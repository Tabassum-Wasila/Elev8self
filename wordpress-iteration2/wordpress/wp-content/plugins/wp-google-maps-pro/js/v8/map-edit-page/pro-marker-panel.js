/**
 * @namespace WPGMZA
 * @module ProMarkerPanel
 * @pro-requires WPGMZA.MarkerPanel
 */
jQuery(function($){
	
	WPGMZA.ProMarkerPanel = function(element)
	{
		var self = this;
		
		
		WPGMZA.MarkerPanel.apply(this, arguments);

		this.initWritersBlock('#wpgmza-description-editor');
		this.initMarkerIconPicker();
		this.initMarkerGalleryInput();
		this.initCategoryPicker();
	}
	
	WPGMZA.extend(WPGMZA.ProMarkerPanel, WPGMZA.MarkerPanel);
	
	WPGMZA.ProMarkerPanel.prototype.initMarkerIconPicker = function()
	{
		this.markerIconPicker = new WPGMZA.MarkerIconPicker($(this.element).find(".wpgmza-marker-icon-picker-container .wpgmza-marker-icon-picker"));
		
		if(!WPGMZA.InternalEngine.isLegacy()){
			this.markerHoverIconPicker = new WPGMZA.MarkerIconPicker($(this.element).find(".wpgmza-marker-hover-icon-picker-container .wpgmza-marker-icon-picker"));
		}
	}
	
	WPGMZA.ProMarkerPanel.prototype.initMarkerGalleryInput = function()
	{
		this.markerGalleryInput = new WPGMZA.MarkerGalleryInput($(this.element).find("input[data-ajax-name='gallery']"));
	}
	
	WPGMZA.ProMarkerPanel.prototype.initCategoryPicker = function()
	{
		this.categoryPicker = new WPGMZA.CategoryPicker($(this.element).find(".wpgmza-category-picker"));
	}
	
	WPGMZA.ProMarkerPanel.prototype.focusMapOnFeature = function(marker)
	{
		this.map.panTo(marker.getPosition());
	}
	
	WPGMZA.ProMarkerPanel.prototype.reset = function()
	{
		WPGMZA.MarkerPanel.prototype.reset.apply(this, arguments);
		
		this.categoryPicker.setSelection(null);
		this.markerGalleryInput.clear();
		this.markerIconPicker.reset();

		if(!WPGMZA.InternalEngine.isLegacy()){
			this.markerHoverIconPicker.reset();
		}
	}

	WPGMZA.ProMarkerPanel.prototype.initDefaults = function(){
		var self = this;
		var args = arguments;
		$(this.element).find(".wpgmza-category-picker").on("loaded.jstree", function() {
			WPGMZA.MarkerPanel.prototype.initDefaults.apply(self, args);
		});
	}
	
	WPGMZA.ProMarkerPanel.prototype.populate = function(data)
	{
		WPGMZA.FeaturePanel.prototype.populate.apply(this, arguments);
		
		// Marker specific fields
		for(var name in data)
		{
			switch(name)
			{
				case "description":
					if(!WPGMZA.InternalEngine.isLegacy()){
						if(this.writersblock){
							$("#wpgmza-description-editor").val(data.description);
							if(this.writersblock.ready){
								this.writersblock.setContent(data.description);								
							}
						} else {
							$("#wpgmza-description-editor").val(data.description);
						}
					} else {
						if(tinyMCE.get("wpgmza-description-editor")){
							var tinyMCEInstance = tinyMCE.get("wpgmza-description-editor");

							var tinyMCEModeToggled = false;
							if(tinyMCEInstance.isHidden()){
								/* The editor is in text mode, swap back before inserting data */
								tinyMCEInstance.show();
								tinyMCEModeToggled = true;
							}

							tinyMCEInstance.setContent(data.description);

							if(tinyMCEModeToggled){
								/* The editor is in text mode, swap back before inserting data */
								tinyMCEInstance.hide();
							}
						} else {
							$("#wpgmza-description-editor").val(data.description);
						}
					}
					break;
				
				case "icon":
					this.markerIconPicker.setIcon(data.icon);
					
					if(data.icon.hover_url && !WPGMZA.InternalEngine.isLegacy()){
						const hoverIcon = {
							url : data.icon.hover_url,
							retina : data.icon.hover_retina ? true : false
						}
						
						this.markerHoverIconPicker.setIcon(hoverIcon);

						if(hoverIcon.retina){
							$(this.markerHoverIconPicker.element).find('input[data-ajax-name="hover_retina"]').prop("checked", true);
						} else {
							$(this.markerHoverIconPicker.element).find('input[data-ajax-name="hover_retina"]').prop("checked", false);
						}
					}

					break;

				case "categories":
					this.categoryPicker.setSelection(data.categories);
					break;
				
				case "gallery":
					if(data.gallery)
						this.markerGalleryInput.populate(data.gallery);
					break;
				
				case "custom_field_data":
					
					data.custom_field_data.forEach(function(field) {
						$("fieldset[data-custom-field-id='" + field.id + "'] input[data-ajax-name]").val(field.value);
					});
				
					break;
				
				default:
					break;
			}
		}
		
		// Legacy support - Add the pic to the gallery, but only if the gallery is blank
		if(data.pic && data.pic.length && (!data.gallery || !data.gallery.length))
		{
			this.markerGalleryInput.addPicture({
				url: data.pic
			});
		}
	}
	
	WPGMZA.ProMarkerPanel.prototype.serializeFormData = function()
	{
		var data = WPGMZA.MarkerPanel.prototype.serializeFormData.apply(this, arguments);
		
		if(WPGMZA.InternalEngine.isLegacy()){

			/*
			 * Interim patch for people reporting issues with using TinyMCE 'text' editor only
			 *
			 * We temporarily toggle into 'visual' mode to allow the system to get the data
			*/
			if($('#wpgmza-description-editor-tmce').length > 0){
				$('#wpgmza-description-editor-tmce').click();
			}
			
			if(tinyMCE.get("wpgmza-description-editor")) {
				data.description = tinyMCE.get("wpgmza-description-editor").getContent();
			} else {
				data.description = $("#wpgmza-description-editor").val();
			}
		} else {
			data.description = $("#wpgmza-description-editor").val();
		}
		
		data.gallery = this.markerGalleryInput.toJSON();
		
		return data;
	}
	
	WPGMZA.ProMarkerPanel.prototype.onSave = function(event)
	{
		var self = this;
		var address = $(this.element).find("[data-ajax-name='address']").val();
		
		if(address.length == 0)
		{
			alert(WPGMZA.localized_strings.no_address_specified);
			return;
		}
		
		this.showPreloader(true);

		var addressUnchanged = !this.hasDirtyField('address');

		if(this.adjustSubMode || addressUnchanged){
			// Trust the force!
			WPGMZA.FeaturePanel.prototype.onSave.apply(self, arguments);
		} else {
			var geocoder = WPGMZA.Geocoder.createInstance();
			geocoder.geocode({
				address: address
			}, function(results, status) {
				
				switch(status)
				{

					case WPGMZA.Geocoder.SUCCESS:
					
						var latLng = results[0].latLng;
					
						$(self.element).find("[data-ajax-name='lat']").val(latLng.lat);
						$(self.element).find("[data-ajax-name='lng']").val(latLng.lng);
						
						WPGMZA.FeaturePanel.prototype.onSave.apply(self, arguments);
						
						break;
						
					case WPGMZA.Geocoder.ZERO_RESULTS:
						alert(WPGMZA.localized_strings.zero_results);
						self.showPreloader(false);

						break;
						
					default:
						alert(WPGMZA.localized_strings.geocode_fail);
						self.showPreloader(false);

						break;
				}
				
			});
		}
	}
});
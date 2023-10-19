import{c as V,e as k,u as L}from"./links.b05f56db.js";import{C as D}from"./index.0eabb636.js";import{r as g,c as T,d as l,w as a,b as m,f as r,o as n,a as u,g as S,t as h}from"./vue.runtime.esm-bundler.b39e1078.js";import"./Caret.164d8058.js";import{_ as v}from"./_plugin-vue_export-helper.b97bdf23.js";/* empty css                                            *//* empty css                                              */import"./default-i18n.3881921e.js";import"./constants.1758f66e.js";import{I as H}from"./Image.0eda2acd.js";import{J as O}from"./JsonValues.870a4901.js";import{M as U}from"./MaxCounts.12b45bab.js";import{T as G}from"./Tags.142bb09a.js";/* empty css                                              */import{B as A}from"./RadioToggle.334ba6b1.js";import{C as N}from"./Card.c4f6abf5.js";import{C as M}from"./HtmlTagsEditor.e28c14ab.js";import{C as B}from"./ImageUploader.0dab3221.js";import{C as F}from"./SettingsRow.1adac8e2.js";import{C as z}from"./TwitterPreview.054d8f90.js";import"./isArrayLikeObject.22a096cb.js";import"./postContent.14ea6e70.js";import"./cleanForSlug.383040f4.js";import"./toString.0891eb3e.js";import"./_baseTrim.8725856f.js";import"./_stringToArray.4de3b1f3.js";import"./html.c8f6387f.js";import"./get.ebf1fee6.js";import"./tags.59b5d3e2.js";import"./Tooltip.6979830f.js";import"./Slide.cdf6c622.js";import"./Editor.0246db67.js";import"./UnfilteredHtml.f654284a.js";import"./Img.57b2833c.js";import"./Plus.3a43a085.js";import"./Row.5242dafa.js";import"./Book.b195937b.js";import"./Profile.066f7adf.js";const R={setup(){return{licenseStore:V(),optionsStore:k(),rootStore:L()}},components:{BaseRadioToggle:A,CoreAlert:D,CoreCard:N,CoreHtmlTagsEditor:M,CoreImageUploader:B,CoreSettingsRow:F,CoreTwitterPreview:z},mixins:[H,O,U,G],data(){return{separator:void 0,titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:this.$t.__("Twitter Card Settings",this.$td),description:this.$t.__("Enable this feature if you want Twitter to display a preview card with images and a text excerpt when a link to your site is shared.",this.$td),enableTwitterCard:this.$t.__("Enable Twitter Card",this.$td),useDataFromFacebook:this.$t.__("Use Data from Facebook Tab",this.$td),useOgDataDescription:this.$t.__("Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",this.$td),defaultCardType:this.$t.__("Default Card Type",this.$td),summary:this.$t.__("Summary",this.$td),summaryLarge:this.$t.__("Summary with Large Image",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultTwitterImagePosts:this.$t.__("Default Post Twitter Image",this.$td),defaultTwitterImageTerms:this.$t.__("Default Term Twitter Image",this.$td),minimumSizeSummary:this.$t.__("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),minimumSizeSummaryWithLarge:this.$t.__("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),homePageImage:this.$t.__("Home Page Image",this.$td),homePageTitle:this.$t.__("Home Page Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),showTwitterAuthor:this.$t.__("Show Twitter Author",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta description and image.",this.$td),`<a href="${this.rootStore.aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=twitter&aioseo-scroll=aioseo-post-settings-twitter&aioseo-highlight=aioseo-post-settings-twitter">`,"</a>"),cardType:this.$t.__("Card Type",this.$td),additionalData:this.$t.__("Additional Data",this.$td),additionalDataDescription:this.$t.__("Enable this option to show additional Twitter data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",this.$td),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0))}}},computed:{twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]},previewTitle(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterTitle||"#site_title"):this.parseTags(this.optionsStore.options.social.twitter.homePage.title||"#site_title")},previewDescription(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterDescription||"#tagline"):this.parseTags(this.optionsStore.options.social.twitter.homePage.description||"#tagline")}},methods:{getCardOptions(s){return this.twitterCards.find(e=>e.value===s)}}},x={class:"aioseo-twitter"},E={class:"aioseo-settings-row aioseo-section-description"},W=["innerHTML"],J=["innerHTML"],Y={class:"aioseo-description"},j={class:"aioseo-description"},q={key:0,class:"aioseo-settings-row aioseo-section-description"},K=["innerHTML"],Q=["innerHTML"],X={key:1},Z=["innerHTML"],$=["innerHTML"];function tt(s,e,et,t,i,p){const C=g("base-toggle"),d=g("core-settings-row"),c=g("base-select"),f=g("base-input"),_=g("core-image-uploader"),b=g("core-alert"),w=g("base-radio-toggle"),y=g("core-card"),I=g("core-twitter-preview"),P=g("core-html-tags-editor");return n(),T("div",x,[l(y,{slug:"twitter","header-text":i.strings.twitterCardSettings},{default:a(()=>[u("div",E,[S(h(i.strings.description)+" ",1),u("span",{innerHTML:s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0)},null,8,W)]),l(d,{name:i.strings.enableTwitterCard},{content:a(()=>[l(C,{modelValue:t.optionsStore.options.social.twitter.general.enable,"onUpdate:modelValue":e[0]||(e[0]=o=>t.optionsStore.options.social.twitter.general.enable=o)},null,8,["modelValue"])]),_:1},8,["name"]),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:0,class:"default-card-type",name:i.strings.defaultCardType,align:""},{content:a(()=>[l(c,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(t.optionsStore.options.social.twitter.general.defaultCardType),"onUpdate:modelValue":e[1]||(e[1]=o=>t.optionsStore.options.social.twitter.general.defaultCardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:1,class:"twitter-default-image-source",name:i.strings.defaultImageSourcePosts,align:""},{content:a(()=>[l(c,{size:"medium",options:s.imageSourceOptions,modelValue:s.getImageSourceOption(t.optionsStore.options.social.twitter.general.defaultImageSourcePosts),"onUpdate:modelValue":e[2]||(e[2]=o=>t.optionsStore.options.social.twitter.general.defaultImageSourcePosts=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&t.optionsStore.options.social.twitter.general.defaultImageSourcePosts==="custom"?(n(),m(d,{key:2,name:i.strings.postCustomFieldName,align:""},{content:a(()=>[l(f,{size:"medium",modelValue:t.optionsStore.options.social.twitter.general.customFieldImagePosts,"onUpdate:modelValue":e[3]||(e[3]=o=>t.optionsStore.options.social.twitter.general.customFieldImagePosts=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:3,class:"twitter-image",name:i.strings.defaultTwitterImagePosts,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.general.defaultCardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.general.defaultImagePosts,"onUpdate:modelValue":e[4]||(e[4]=o=>t.optionsStore.options.social.twitter.general.defaultImagePosts=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:4,class:"twitter-default-image-source",name:i.strings.defaultImageSourceTerms,align:""},{content:a(()=>[t.licenseStore.isUnlicensed?r("",!0):(n(),m(c,{key:0,size:"medium",options:s.getTermImageSourceOptions(),modelValue:s.getImageSourceOption(t.optionsStore.options.social.twitter.general.defaultImageSourceTerms),"onUpdate:modelValue":e[5]||(e[5]=o=>t.optionsStore.options.social.twitter.general.defaultImageSourceTerms=o.value)},null,8,["options","modelValue"])),t.licenseStore.isUnlicensed?(n(),m(c,{key:1,size:"medium",options:s.getTermImageSourceOptions(),modelValue:s.getImageSourceOption("default"),disabled:""},null,8,["options","modelValue"])):r("",!0),t.licenseStore.isUnlicensed?(n(),m(b,{key:2,class:"inline-upsell",type:"blue"},{default:a(()=>[u("div",{innerHTML:i.strings.defaultTermImageSourceUpsell},null,8,J)]),_:1})):r("",!0)]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&t.optionsStore.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!t.licenseStore.isUnlicensed?(n(),m(d,{key:5,name:i.strings.termsCustomFieldName,align:""},{content:a(()=>[l(f,{size:"medium",modelValue:t.optionsStore.options.social.twitter.general.customFieldImageTerms,"onUpdate:modelValue":e[6]||(e[6]=o=>t.optionsStore.options.social.twitter.general.customFieldImageTerms=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&!t.licenseStore.isUnlicensed?(n(),m(d,{key:6,class:"twitter-image",name:i.strings.defaultTwitterImageTerms,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.general.defaultCardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.general.defaultImageTerms,"onUpdate:modelValue":e[7]||(e[7]=o=>t.optionsStore.options.social.twitter.general.defaultImageTerms=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:7,name:i.strings.showTwitterAuthor,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.showAuthor,"onUpdate:modelValue":e[8]||(e[8]=o=>t.optionsStore.options.social.twitter.general.showAuthor=o),name:"showTwitterAuthor",options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:8,name:i.strings.additionalData,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.additionalData,"onUpdate:modelValue":e[9]||(e[9]=o=>t.optionsStore.options.social.twitter.general.additionalData=o),name:"additionalData",options:[{label:s.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),u("div",Y,h(i.strings.additionalDataDescription),1)]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:9,name:i.strings.useDataFromFacebook,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.useOgData,"onUpdate:modelValue":e[10]||(e[10]=o=>t.optionsStore.options.social.twitter.general.useOgData=o),name:"useOgData",options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),u("div",j,h(i.strings.useOgDataDescription),1)]),_:1},8,["name"])):r("",!0)]),_:1},8,["header-text"]),t.optionsStore.options.social.twitter.general.enable?(n(),m(y,{key:0,slug:"twitterHomePageSettings","header-text":i.strings.homePageSettings},{default:a(()=>[t.rootStore.aioseo.data.staticHomePage?(n(),T("div",q,[u("span",{innerHTML:i.strings.homePageDisabledDescription},null,8,K),S("   "),u("span",{innerHTML:s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0)},null,8,Q)])):r("",!0),t.rootStore.aioseo.data.staticHomePage?(n(),T("br",X)):r("",!0),l(d,{name:s.$constants.GLOBAL_STRINGS.preview},{content:a(()=>[l(I,{card:t.optionsStore.options.social.twitter.homePage.cardType,description:p.previewDescription,image:t.optionsStore.options.social.twitter.homePage.image,title:p.previewTitle},null,8,["card","description","image","title"])]),_:1},8,["name"]),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:2,class:"default-card-type",name:i.strings.cardType,align:""},{content:a(()=>[l(c,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(t.optionsStore.options.social.twitter.homePage.cardType),"onUpdate:modelValue":e[11]||(e[11]=o=>t.optionsStore.options.social.twitter.homePage.cardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:3,class:"twitter-image",name:i.strings.homePageImage,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.homePage.cardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.homePage.image,"onUpdate:modelValue":e[12]||(e[12]=o=>t.optionsStore.options.social.twitter.homePage.image=o)},null,8,["description","modelValue"])]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:4,name:i.strings.homePageTitle},{content:a(()=>[l(P,{class:"twitter-meta-input",modelValue:t.optionsStore.options.social.twitter.homePage.title,"onUpdate:modelValue":e[13]||(e[13]=o=>t.optionsStore.options.social.twitter.homePage.title=o),"line-numbers":!1,single:"",onCounter:e[14]||(e[14]=o=>s.updateCount(o,"titleCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[S(h(i.strings.clickToAddHomePageTitle),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:s.maxRecommendedCount(i.titleCount,70)},null,8,Z)]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:5,name:i.strings.homePageDescription},{content:a(()=>[l(P,{class:"twitter-meta-input",modelValue:t.optionsStore.options.social.twitter.homePage.description,"onUpdate:modelValue":e[15]||(e[15]=o=>t.optionsStore.options.social.twitter.homePage.description=o),"line-numbers":!1,onCounter:e[16]||(e[16]=o=>s.updateCount(o,"descriptionCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[S(h(i.strings.clickToAddHomePageDescription),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:s.maxRecommendedCount(i.descriptionCount,200)},null,8,$)]),_:1},8,["name"]))]),_:1},8,["header-text"])):r("",!0)])}const zt=v(R,[["render",tt]]);export{zt as default};

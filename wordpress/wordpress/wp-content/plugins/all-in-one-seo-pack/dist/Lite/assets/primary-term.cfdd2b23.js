import{_ as y}from"./js/_plugin-vue_export-helper.b97bdf23.js";import{r as c,o as _,c as w,d as p,a as l,i as g,f as T,G as S}from"./js/vue.runtime.esm-bundler.b39e1078.js";import{l as x}from"./js/index.c87df9dc.js";import{l as $}from"./js/index.0eabb636.js";import{l as v}from"./js/index.0b123ab1.js";import{u as E,r as f,i as k,t as P,l as h}from"./js/links.b05f56db.js";import{e as A}from"./js/elemLoaded.9a6eb745.js";import{s as b}from"./js/postContent.14ea6e70.js";import{S as B}from"./js/Information.70c6532e.js";import{a as L}from"./js/Caret.164d8058.js";import"./js/translations.6e7b2383.js";import"./js/default-i18n.3881921e.js";import"./js/constants.1758f66e.js";import"./js/isArrayLikeObject.22a096cb.js";import"./js/cleanForSlug.383040f4.js";import"./js/toString.0891eb3e.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/html.c8f6387f.js";import"./js/get.ebf1fee6.js";const C={getTerms:async e=>{const{apiFetch:t}=window.wp,{addQueryArgs:o}=window.wp.url,r=m(e);return await t({path:o(`/wp/v2/${r.restBase}`,{per_page:-1,orderby:"count",order:"desc",_fields:"id,name"})})},getSelectedTerms:e=>{const t=m(e);return window.wp.data.select("core/editor").getEditedPostAttribute(t.restBase)||[]}},D={getTerms:async e=>{var n;const t=[],o=m(e);return(((n=document.getElementById(`${o.name}checklist`))==null?void 0:n.querySelectorAll("li"))||[]).forEach(s=>{const i=s.querySelector("input").value,a=s.querySelector("label").innerText;t.push({id:parseInt(i,10),name:a.trim()})}),new Promise(s=>{s(t)})},getSelectedTerms:e=>{var n;const t=[],o=m(e);return(((n=document.getElementById(`${o.name}checklist`))==null?void 0:n.querySelectorAll("input:checked"))||[]).forEach(s=>{t.push(parseInt(s.value,10))}),t}},d=()=>{var o;return(((o=E().aioseo.postData)==null?void 0:o.taxonomies)||[]).filter(r=>r.primaryTermSupport===!0)},I=e=>d().some(t=>e===t.name),m=e=>{const t=d().filter(o=>e===o.name);return t.length?t[0]:{}},M=e=>f()?C.getSelectedTerms(e):D.getSelectedTerms(e);const H={setup(){return{postEditorStore:k()}},components:{SvgCircleInformation:B,SvgClose:L},data(){return{selectedTerms:[],strings:{didYouKnow:this.$t.sprintf(this.$t.__("Did you know that %1$s Pro allows you to choose a %2$sprimary category%3$s for your posts? This feature works hand in hand with our powerful Breadcrumbs template to give you full navigational control to help improve your search rankings!",this.$td),"AIOSEO","<strong>","</strong>"),learnMoreLink:this.$t.sprintf('<a href="%1$s" target="_blank" rel="noreferrer nofollow">%2$s<span class="link-right-arrow">&nbsp;&rarr;</span></a>',this.$links.getDocUrl("primaryTerm"),this.$t.__("Learn more",this.$td))}}},props:{taxonomy:String},methods:{updateSelectedTerms(){this.selectedTerms=M(this.taxonomy)}},computed:{canShowUpsell(){const{options:e}=this.postEditorStore.currentPost;return!e.primaryTerm.productEducationDismissed&&1<this.selectedTerms.length}},mounted(){this.updateSelectedTerms(),window.aioseoBus.$on("updateSelectedTerms",this.updateSelectedTerms)},beforeUnmount(){window.aioseoBus.$off("updateSelectedTerms",this.updateSelectedTerms)}},N={key:0,class:"aioseo-primary-term-cta"},q=["innerHTML"],U=["innerHTML"];function V(e,t,o,r,n,s){const i=c("svg-circle-information"),a=c("svg-close");return s.canShowUpsell?(_(),w("div",N,[p(i,{width:"15",height:"15"}),l("p",{innerHTML:n.strings.didYouKnow},null,8,q),l("p",{innerHTML:n.strings.learnMoreLink},null,8,U),p(a,{onClick:g(r.postEditorStore.disablePrimaryTermEducation,["stop"])},null,8,["onClick"])])):T("",!0)}const F=y(H,[["render",V]]);const K={components:{PrimaryTerm:F},props:{taxonomy:String}},O={class:"aioseo-app aioseo-primary-term"};function Q(e,t,o,r,n,s){const i=c("primary-term");return _(),w("div",O,[p(i,{taxonomy:o.taxonomy},null,8,["taxonomy"])])}const R=y(K,[["render",Q]]);if(f()&&window.wp){const{createElement:e,Fragment:t}=window.wp.element,{addFilter:o}=window.wp.hooks,{createHigherOrderComponent:r}=window.wp.compose,{subscribe:n}=window.wp.data;o("editor.PostTaxonomyType","aioseo/primary-term",r(s=>i=>{const{slug:a}=i;return I(a)?e(t,{},e(s,i),e("div",{id:`aioseo-primary-term-${a}`},e("div",{className:"aioseo-primary-term-app",taxonomy:a}))):e(s,i)},"withInspectorControls")),n(()=>{window.aioseoBus.$emit("updateSelectedTerms")})}P()&&(h(),d().forEach(e=>{const t=document.querySelector(`#${e.name}div .inside`);if(!t)return;const o=document.createElement("div");o.setAttribute("id",`aioseo-primary-term-${e.name}`),o.setAttribute("class","aioseo-primary-term-app"),o.setAttribute("taxonomy",e.name),t.append(o),function(r){r(`#${e.name}checklist`).on("change",'input[type="checkbox"]',()=>{window.aioseoBus.$emit("updateSelectedTerms")}),r(`#${e.name}checklist`).on("wpListAddEnd",()=>{window.aioseoBus.$emit("updateSelectedTerms")})}(window.jQuery)}));const u=e=>{if(!e)return;const t=e.getAttribute("taxonomy");let o=S({...R,name:"Standalone/PrimaryTerm"},{taxonomy:t});o=x(o),o=$(o),o=v(o),h(o),o.mount(e)};if(b()&&window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"){const e=document.getElementsByClassName("aioseo-primary-term-app");Array.prototype.forEach.call(e,t=>u(t)),A(".aioseo-primary-term-app","aioseoPrimaryTerm"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoPrimaryTerm"&&u(t.target)},{passive:!0})}

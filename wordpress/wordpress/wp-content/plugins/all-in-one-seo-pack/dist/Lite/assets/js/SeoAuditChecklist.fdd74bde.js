import{A as g,n as O,e as C,u as R,c as L,d as E}from"./links.b05f56db.js";import{C as I}from"./Card.c4f6abf5.js";import{C as M}from"./Tabs.d158aaab.js";import{C as w}from"./SeoSiteAnalysisResults.7831cfe8.js";import{p as B}from"./popup.6fe74774.js";import"./default-i18n.3881921e.js";import{u as x,S as D}from"./SeoSiteScore.4c797f42.js";import{r as s,o as a,c as u,d as r,f as _,a as o,t as l,b as S,w as i,i as G,g as k,n as H}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as f}from"./_plugin-vue_export-helper.b97bdf23.js";import{a as N}from"./index.0eabb636.js";import"./Caret.164d8058.js";/* empty css                                            *//* empty css                                              */import"./constants.1758f66e.js";/* empty css                                              */import{C as P}from"./Blur.8cc39c73.js";import{C as U}from"./Index.05e56c3a.js";import{S as W}from"./Book.b195937b.js";import{C as V}from"./Tooltip.6979830f.js";import{S as Y}from"./Refresh.f041bf68.js";import"./isArrayLikeObject.22a096cb.js";import"./Slide.cdf6c622.js";import"./TruSeoScore.29220195.js";import"./Ellipse.d7f3195d.js";import"./Information.70c6532e.js";import"./Tags.142bb09a.js";import"./tags.59b5d3e2.js";import"./postContent.14ea6e70.js";import"./cleanForSlug.383040f4.js";import"./toString.0891eb3e.js";import"./_baseTrim.8725856f.js";import"./_stringToArray.4de3b1f3.js";import"./html.c8f6387f.js";import"./get.ebf1fee6.js";import"./GoogleSearchPreview.dfc68b14.js";import"./Gear.a85d4a2b.js";import"./params.f0608262.js";const q={setup(){return{analyzerStore:g()}},components:{CoreSiteScore:U,SvgBook:W},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:{yourOverallSiteScore:this.$t.__("Your Overall Site Score",this.$td),goodResult:this.$t.sprintf(this.$t.__("A very good score is between %1$s%3$d and %4$d%2$s.",this.$td),"<strong>","</strong>",50,75),forBestResults:this.$t.sprintf(this.$t.__("For best results, you should strive for %1$s%3$d and above%2$s.",this.$td),"<strong>","</strong>",70),anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),readUltimateSeoGuide:this.$t.__("Read the Ultimate WordPress SEO Guide",this.$td)}}},computed:{getError(){switch(this.analyzerStore.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzerStore.analyzeError}}},j={class:"aioseo-site-score-analyze"},F={key:0,class:"aioseo-seo-site-score-score"},K={key:1,class:"aioseo-seo-site-score-description"},Q=["innerHTML"],J=["innerHTML"],X={class:"d-flex"},Z=["href"],ee={key:2,class:"analyze-errors"},te=["innerHTML"];function se(e,m,p,t,n,c){const d=s("core-site-score"),h=s("svg-book");return a(),u("div",j,[t.analyzerStore.analyzeError?_("",!0):(a(),u("div",F,[r(d,{loading:p.loading,score:p.score,description:p.description,strokeWidth:1.75},null,8,["loading","score","description"])])),t.analyzerStore.analyzeError?_("",!0):(a(),u("div",K,[o("h2",null,l(n.strings.yourOverallSiteScore),1),o("div",{innerHTML:n.strings.goodResult},null,8,Q),o("div",{innerHTML:n.strings.forBestResults},null,8,J),o("div",X,[r(h),o("a",{href:e.$links.getDocUrl("ultimateGuide"),target:"_blank"},l(n.strings.readUltimateSeoGuide),9,Z)])])),t.analyzerStore.analyzeError?(a(),u("div",ee,[o("h3",null,l(n.strings.anErrorOccurred),1),o("span",{innerHTML:c.getError},null,8,te)])):_("",!0)])}const oe=f(q,[["render",se]]);const ne={setup(){const{strings:e}=x();return{analyzerStore:g(),connectStore:O(),optionsStore:C(),rootStore:R(),strings:e}},components:{CoreBlur:P,CoreSiteScoreAnalyze:oe},mixins:[D],data(){return{score:0}},watch:{"optionsStore.internalOptions.internal.siteAnalysis.score"(e){this.score=e}},computed:{getSummary(){return{recommended:this.analyzerStore.recommendedCount(),critical:this.analyzerStore.criticalCount(),good:this.analyzerStore.goodCount()}}},methods:{openPopup(e){B(e,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){return this.connectStore.saveConnectToken(e.token)},closedCallback(e){e&&this.analyzerStore.runSiteAnalyzer(),this.analyzerStore.analyzing=!0}},mounted(){!this.optionsStore.internalOptions.internal.siteAnalysis.score&&this.optionsStore.internalOptions.internal.siteAnalysis.connectToken&&(this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer()),this.score=this.optionsStore.internalOptions.internal.siteAnalysis.score}},re={class:"aioseo-seo-site-score"},ie={key:1,class:"aioseo-seo-site-score-cta"};function ae(e,m,p,t,n,c){const d=s("core-site-score-analyze"),h=s("core-blur");return a(),u("div",re,[t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?_("",!0):(a(),S(h,{key:0},{default:i(()=>[r(d,{score:85,description:e.description},null,8,["description"])]),_:1})),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?_("",!0):(a(),u("div",ie,[o("a",{href:"#",onClick:m[0]||(m[0]=G(z=>c.openPopup(t.rootStore.aioseo.urls.connect),["prevent"]))},l(e.connectWithAioseo),1),k(" "+l(t.strings.toSeeYourSiteScore),1)])),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?(a(),S(d,{key:2,score:n.score,description:e.description,loading:e.analyzing,summary:c.getSummary},null,8,["score","description","loading","summary"])):_("",!0)])}const le=f(ne,[["render",ae]]);const ce={setup(){return{analyzerStore:g(),licenseStore:L(),optionsStore:C(),settingsStore:E()}},components:{CoreCard:I,CoreMainTabs:M,CoreSeoSiteAnalysisResults:w,CoreSeoSiteScoreAnalyze:le,CoreTooltip:V,SvgRefresh:Y,SvgCircleQuestionMark:N},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),cardDescription:this.$t.__("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",this.$td)+" "+this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzer",!0)}}},computed:{tabs(){const e=this.optionsStore.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:e.score?this.analyzerStore.allItemsCount():0}},{slug:"critical",label:this.$t.__("Important Issues",this.$td),analyze:{classColor:"red",count:e.score?this.analyzerStore.criticalCount():0}},{slug:"recommended-improvements",label:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:e.score?this.analyzerStore.recommendedCount():0}},{slug:"good-results",label:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:e.score?this.analyzerStore.goodCount():0}}]}},methods:{processChangeTab(e){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:"seoAuditChecklist",value:e}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer({refresh:!0})}}},ue={class:"aioseo-seo-audit-checklist"},_e=["innerHTML"],de={class:"label"};function he(e,m,p,t,n,c){const d=s("core-seo-site-score-analyze"),h=s("core-card"),z=s("svg-circle-question-mark"),$=s("core-tooltip"),v=s("svg-refresh"),b=s("base-button"),A=s("core-main-tabs"),T=s("core-seo-site-analysis-results");return a(),u("div",ue,[r(h,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:i(()=>[r(d)]),_:1}),(e.$isPro&&t.licenseStore.licenseKey||t.optionsStore.internalOptions.internal.siteAnalysis.connectToken)&&t.optionsStore.internalOptions.internal.siteAnalysis.score?(a(),S(h,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:i(()=>[o("span",null,l(n.strings.completeSeoChecklist),1),r($,null,{tooltip:i(()=>[o("span",{innerHTML:n.strings.cardDescription},null,8,_e)]),default:i(()=>[r(z)]),_:1})]),"header-extra":i(()=>[r(b,{class:"refresh-results",type:"gray",size:"small",onClick:c.refresh,loading:t.analyzerStore.analyzing},{default:i(()=>[r(v),k(" "+l(n.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:i(()=>[r(A,{tabs:c.tabs,showSaveButton:!1,active:t.settingsStore.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:c.processChangeTab,"skinny-tabs":""},{"var-tab":i(({tab:y})=>[o("span",{class:H(["round",y.analyze.classColor])},l(y.analyze.count||0),3),o("span",de,l(y.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:i(()=>[r(T,{section:t.settingsStore.settings.internalTabs.seoAuditChecklist,"all-results":t.analyzerStore.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):_("",!0)])}const Je=f(ce,[["render",he]]);export{Je as default};

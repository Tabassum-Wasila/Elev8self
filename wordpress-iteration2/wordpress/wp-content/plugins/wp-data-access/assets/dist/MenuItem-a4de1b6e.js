import{Q as p,U as k,W as N,az as P,a1 as U,L as r,aB as c,r as d,X as j,H as D,K as G,J as S,h as x,Y as I,Z as E}from"./main.js";import{L as $}from"./FormContainer-680f4f25.js";function q(e){return k("MuiDivider",e)}const H=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=H,W=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=W,z=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=z;function _(e){return k("MuiMenuItem",e)}const A=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=A,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],J=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},K=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:u,classes:o}=e,i=E({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},_,o);return r({},o,i)},Q=N(P,{shouldForwardProp:e=>U(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:J})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),X=d.forwardRef(function(t,s){const a=j({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:v=!1,disableGutters:i=!1,focusVisibleClassName:L,role:w="menuitem",tabIndex:b,className:V}=a,B=D(a,h),f=d.useContext($),C=d.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),g=d.useRef(null);G(()=>{l&&g.current&&g.current.focus()},[l]);const T=r({},a,{dense:C.dense,divider:v,disableGutters:i}),m=K(a),F=S(g,s);let y;return a.disabled||(y=b!==void 0?b:-1),x.jsx($.Provider,{value:C,children:x.jsx(Q,r({ref:F,role:w,tabIndex:y,component:u,focusVisibleClassName:I(m.focusVisible,L),className:I(m.root,V)},B,{ownerState:T,classes:m}))})}),ee=X;export{ee as M,q as g};

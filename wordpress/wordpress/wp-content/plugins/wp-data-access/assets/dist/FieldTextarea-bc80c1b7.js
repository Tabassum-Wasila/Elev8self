import{r as i,a9 as p,h}from"./main.js";import{M as d}from"./FormContainer-680f4f25.js";import"./settings-cc0e1832.js";import"./popper-0aa08b12.js";const c=({columnName:r,columnValue:t,primaryKey:m,columnMetaData:e,formMode:o,onColumnChange:l})=>{const[x,s]=i.useState(t);i.useEffect(()=>{s(t)},[t,m]);const n={maxLength:e.character_maximum_length,readOnly:o!==p.EDIT},u="Enter a multi line text ("+e.character_maximum_length+")";return h.jsx(d,{id:r,label:e.formLabel,value:x,required:e.is_nullable==="NO",multiline:!0,minRows:3,maxRows:10,inputProps:n,helperText:u,onChange:a=>{s(a.target.value),l(r,a.target.value)}})};export{c as default};

import{a as r}from"./axios.6e1fcf85.js";const d=(t,e={},m={})=>{let{params:o}=e;const a={params:o,data:o,method:e.method};a.method!=="get"?delete a.params:delete a.data,console.log("_config : ",a);const s="https://always-e5aa7517715d.herokuapp.com"+t;return r(s,a)};export{d as u};
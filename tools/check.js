// Valida exercícios, figuras e durações: node tools/check.js (depois de tools/build.sh)
const fs=require('fs');const html=fs.readFileSync('index.html','utf8');
const m=html.match(/<script>\n\(function\(\)\{([\s\S]*)\}\)\(\);\n<\/script>/);let src=m[1];
const stub={getElementById:()=>({addEventListener(){},hidden:true,innerHTML:'',querySelectorAll:()=>[],style:{},setAttribute(){}}),addEventListener(){},querySelectorAll:()=>[],createElement:()=>({style:{},appendChild(){},click(){},remove(){}}),body:{appendChild(){},style:{}},querySelector:()=>null};
global.document=stub;global.window={};global.navigator={};global.localStorage={getItem:()=>null,setItem(){}};global.location={protocol:'http:'};global.setInterval=()=>0;global.Blob=function(){};global.URL={createObjectURL:()=>'',revokeObjectURL(){}};
src=src.replace('renderHome();\nif (st.sess','//\nif (st.sess');eval(src);const d=window.__dfc;
const LOCS=["gym","home"];
let used=new Set(), missingEx=new Set();
for(const t in d.TYPES){d.TYPES[t].versions.forEach((v,vi)=>{for(const loc of LOCS){const day=d.resolveDay(t,vi,loc,'long');day.blocks.forEach(b=>b.items.forEach(it=>{used.add(it[0]); if(!d.look({...Object.fromEntries(d.LIB.flatMap(g=>g.items.map(i=>[i[0],1])))},it[0])) missingEx.add(it[0]);}));}});}
const noFig=[...used].filter(n=>!d.look(d.FIG,n)), noFeel=[...used].filter(n=>!d.look(d.FEEL,n));
console.log('no LIB:',[...missingEx]);console.log('no FIG:',noFig);console.log('no FEEL:',noFeel);
for(const t in d.TYPES){const row=[];for(const dur of ['long','short']){row.push(dur+'='+d.TYPES[t].versions.map((v,i)=>d.resolveDay(t,i,'gym',dur).min).join('/'));}const home=d.TYPES[t].versions.map((v,i)=>d.resolveDay(t,i,'home','long').min).join('/');console.log(t.padEnd(11),row.join('  '),' home='+home);}
let all=0,withFig=0;d.LIB.forEach(g=>g.items.forEach(i=>{all++;if(d.look(d.FIG,i[0]))withFig++;}));console.log('lib',all,'with fig',withFig,'groups',d.LIB.map(g=>g.g).join(', '));

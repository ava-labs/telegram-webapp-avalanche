import{ac as r,aY as c}from"./index-34bb02db.js";import{getCurrencyMetadata as n}from"./getCurrencyMetadata-e4d596de.js";import"./decimals-a94738fe.js";const s="0x70a08231",o=[{type:"address",name:"_address"}],d=[{type:"uint256"}];async function m(a){return r({contract:a.contract,method:[s,o,d],params:[a.address]})}async function y(a){const[t,e]=await Promise.all([m(a),n(a)]);return{...e,value:t,displayValue:c(t,e.decimals)}}export{y as getBalance};
import{dP as e,dQ as a,dR as i,aa as o}from"./index-85f30e3b.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=(()=>typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:a(t.raw))(),s=e(`${c}${r.length}`);return i(o([s,r]),n)}export{u as hashMessage};

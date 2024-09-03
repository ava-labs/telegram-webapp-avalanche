import{_ as a,d0 as d}from"./index-4e24d365.js";async function p({account:n,transaction:t,serializableTransaction:e,gasless:r}){if(e.value&&e.value>0n)throw new Error("Gasless transactions cannot have a value");let o;if(r.provider==="biconomy"){const{relayBiconomyTransaction:i}=await a(()=>import("./biconomy-ded7eea4.js"),["assets/biconomy-ded7eea4.js","assets/index-4e24d365.js","assets/index-b41033e1.css"]);o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(r.provider==="openzeppelin"){const{relayOpenZeppelinTransaction:i}=await a(()=>import("./openzeppelin-6820ba64.js"),["assets/openzeppelin-6820ba64.js","assets/index-4e24d365.js","assets/index-b41033e1.css"]);o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(r.provider==="engine"){const{relayEngineTransaction:i}=await a(()=>import("./engine-b5f1c874.js"),["assets/engine-b5f1c874.js","assets/index-4e24d365.js","assets/index-b41033e1.css"]);o=await i({account:n,transaction:t,serializableTransaction:e,gasless:r})}if(!o)throw new Error("Unsupported gasless provider");return d({address:n.address,transactionHash:o.transactionHash,chainId:t.chain.id}),o}export{p as sendGaslessTransaction};
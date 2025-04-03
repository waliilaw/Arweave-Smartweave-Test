import { WarpFactory } from "warp-contracts";
import fs from "fs";


const environment = process.env.ENVIRONMENT || "testnet";
let warp 

async function configureWallet(){
    try{
if(environment === "testnet") {
  warp = WarpFactory.forTestnet();
}
else if(environment === "mainnet") {
  warp = WarpFactory.forMainnet();
} else {
  throw new Error("Invalid environment. Use 'testnet' or 'mainnet'.");
}}
catch(error){
    console.error("Error configuring Warp wallet:", error);
    throw error;
  }
}
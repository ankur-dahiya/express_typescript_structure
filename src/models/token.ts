import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Must provide token name"],
        maxLength:[20,"Length of token name must be less than 21."]
    },
    decimal:{
        type:Number,
        required:[true,"Must provide token decimal"],
    }
    ,
    symbol:{
        type:String,
        required:[true,"Must provide token symbol"],
        maxLength:[10,"Length of token symbol must be less than 10."]
    },
    chainName:{
        type:String,
        required:[true,"Must provide chainName"],
        maxLength:[10,"Length of chain name must be less than 10."]
    },
    chainId:{
        type:String,
        required:[true,"Must provide chainId"],
        maxLength:[10,"Length of chainId must be less than 10."]
    },
    chainType:{
        type:String,
        required:[true,"Must provide chainType"],
        enum:{
            values:["EVM","Non-EVM"],
            message:"Invalid chainType"
        }
    },
    address:{
        type:String,
        required:[true,"Must provide token address."]
    }
},{timestamps:true});

export default mongoose.model("tokens",tokenSchema);
import mongoose from "mongoose";

const tokenPriceHistory = new mongoose.Schema({
    price:{
        type: Number,
        required:[true,"token price is required."]
    },
    address:{
        type: String,
        required:[true,"token address is required."]
    },
    chainId:{
        type: String,
        required:[true,"token address is required."]
    }
},{timestamps:true});

export default mongoose.model("priceHistories",tokenPriceHistory);
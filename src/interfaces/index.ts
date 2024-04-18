import { Request,Response,NextFunction } from "express"

export type catchAsyncError = (req:Request,res:Response,next:NextFunction)=>void

export interface customRequest extends Request{
    wallet1: string,
    wallet2?: string,
}

export interface token{
    name:string,
    decimal:string,
    symbol:string,
    chainName:string,
    chainId:string,
    chainType:string,
    address:string
}
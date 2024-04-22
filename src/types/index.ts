import { Request,Response,NextFunction } from "express"

export type catchAsyncError = (req:Request,res:Response,next:NextFunction)=>void

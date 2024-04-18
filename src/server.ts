import express,{Request,Response,NextFunction,ErrorRequestHandler} from "express";
import { envConfigs } from "./config/envConfig";
import cors from "cors";
import connectDb from "./config/connectDb";

const app = express();
connectDb();

// app.use(cors());
app.use(express.json());

app.use((err:any, req:Request, res:Response, next:NextFunction):void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
  });
});

app.listen(envConfigs.port, () => {
  console.log("Server is running on port: " + envConfigs.port);
});

import "dotenv/config";

interface envConfig{
  port: string;
  dbUrl: string;
}


export const envConfigs: envConfig = {
  port: process.env.PORT as string,
  dbUrl: process.env.DB_URL as string,
};

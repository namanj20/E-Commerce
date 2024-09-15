import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// redis is a gian key value store with many data structure, we will be using sets 
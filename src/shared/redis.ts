import {createClient} from "redis";
import logger from "./logger";

let redisClient = createClient({
  url: '',
});

redisClient.on('error', (err) => logger.error('Redis error: ', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
}

export const RedisClient = {
  connect
}
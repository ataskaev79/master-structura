import path from 'path';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // Payment systems are blocked without this parameter
export const ENV = (process.env.ENV || 'development') as 'development' | 'production';
export const PORT = process.env.PORT;
export const EXTERNAL_PORT = process.env.EXTERNAL_PORT;
export const PROTOCOL = (process.env?.PROTOCOL || 'http') as 'http' | 'https';

export const CLIENT_APP_URL = process.env.CLIENT_APP_URL as string | undefined;
export const EXTERNAL_APP_URL = process.env.EXTERNAL_APP_URL as string | undefined;

export const DB_NAME = process.env.DB_NAME as string | undefined;
export const DB_USERNAME = process.env.DB_USERNAME as string | undefined;
export const DB_PASSWORD = process.env.DB_PASSWORD as string | undefined;
export const DB_HOST = process.env.DB_HOST as string;
export const DB_PORT = parseInt(process.env.DB_PORT) as number;

export const DB_LOGS = [true, 'true'].includes(process.env?.DB_LOGS) || false;

export default {
  ENV,
  PORT,
  EXTERNAL_PORT,
  CLIENT_APP_URL,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
};

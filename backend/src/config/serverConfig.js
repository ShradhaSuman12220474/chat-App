import dotenv from 'dotenv'

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const JWT_SECRECT = process.env.JWT_SECRECT;
export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;


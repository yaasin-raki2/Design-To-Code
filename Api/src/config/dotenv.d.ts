declare namespace NodeJS {
  export interface ProcessEnv {
    JWT_KEY: string;
    MONGO_URI: string;
    ADMIN_ID: string;
    STRIPE_KEY: string;
  }
}

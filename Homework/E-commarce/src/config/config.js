const joi = require('joi');
const dotenv = require('dotenv');

dotenv.config({ path: "./.env"});

const envVarsSchema = joi.object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("Mongodb url"),
    JWT_SECRET_KEY: joi.string().description("Jwt sectreat key"),
    BASE_URL: joi.string().trim().description("Base URL"),

}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        },
        base_url: envVars.BASE_URL,
        jwt:{
            secret_key: envVars.JWT_SECRET_KEY,
          },
        }
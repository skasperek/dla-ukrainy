import Config from "src/config/app/app.config";

export default {
    isGlobal: true,
    envFilePath: `${process.env.NODE_ENV}.env`,
    ignoreEnvFile: true,
    load: [Config],
};
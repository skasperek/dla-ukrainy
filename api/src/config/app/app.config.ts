export default () => ({
    port: parseInt(process.env.PORT) || 2083,
    isProduction: process.env.NODE_ENV === 'prod' ? true : false
});
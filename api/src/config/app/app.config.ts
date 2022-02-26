export default () => ({
    port: parseInt(process.env.PORT) || 2083,
    mognooseUrl: process.env.mognooseUrl,
    isProduction: process.env.NODE_ENV === 'prod' ? true : false
});
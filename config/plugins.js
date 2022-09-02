module.exports = ({ env }) => ({
upload: {
    config: {
      provider: 'strapi-provider-upload-digitalocean-nohash',
      providerOptions: {
        includeHash: true,
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),
        directory: env('DO_SPACE_DIRECTORY'),
        cdn: env('DO_SPACE_CDN'),
        // providerOptions: {
        //     sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
        //   },
        // params: {
        //   Bucket: env('DO_SPACE_BUCKET'),
        // },
      },
    //   actionOptions: {
    //     upload: {},
    //     uploadStream: {},
    //     delete: {},
    //   },
    },
  },
});
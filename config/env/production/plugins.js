module.exports = ({ env }) => ({
upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('DO_SPACE_ACCESS_KEY'),
        secretAccessKey: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        providerOptions: {
            sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
          },
        params: {
          Bucket: env('DO_SPACE_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
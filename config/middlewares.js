module.exports = [
  'strapi::errors',
  {
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'connect-src': ["'self'", 'https:'],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          'dl.airtable.com',
          '*.digitaloceanspaces.com',
        ],
        'media-src': [
          "'self'",
          'data:',
          'blob:',
          'dl.airtable.com',
          '*.digitaloceanspaces.com',
        ],
        upgradeInsecureRequests: null,
      },
    },
  },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['*.digitaloceanspaces.com', 'dolphin-app-s4wgb.ondigitalocean.app' ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

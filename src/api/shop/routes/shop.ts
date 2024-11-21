/**
 * shop router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::shop.shop');


export default {
    routes: [
      {
        method: 'GET',
        path: '/shops',
        handler: 'api::shop.shop.find',
        config: {
          auth: false,
        },
      },
      {
        method: 'GET',
        path: '/shops/:id',
        handler: 'api::shop.shop.findOne',
        config: {
          auth: false,
        },
      },
    ],
  };
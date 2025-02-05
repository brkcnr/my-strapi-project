/**
 * category router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::category.category');

export default {
    routes: [
      {
        method: 'GET',
        path: '/categories',
        handler: 'api::category.category.find',
        config: {
          auth: false,
        },
      },
      {
        method: 'GET',
        path: '/categories/:id',
        handler: 'api::category.category.findOne',
        config: {
          auth: false,
        },
      },
    ],
  };

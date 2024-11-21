/**
 * shop controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::shop.shop', ({ strapi }) => ({
    // Customize the findOne method
    async findOne(ctx) {
      const { id } = ctx.params;
  
      // Ensure the ID is numeric
      const shopId = parseInt(id, 10);
      if (isNaN(shopId)) {
        return ctx.badRequest('Invalid ID format');
      }
  
      // Fetch the author by ID using Strapi's db query API
      const shop = await strapi.db.query('api::shop.shop').findOne({
        where: { id: shopId },
        populate: ['categories'], // Populate related data if needed
      });
  
      if (!shop) {
        return ctx.notFound('Shop not found');
      }
  
      //return author;
          
      // You can add more custom logic here if needed
      // sanitizeOutput - exclude private fields from the response
      // This will prevent sensitive fields, like password, from being exposed in the response 
      const sanitizedEntity = await this.sanitizeOutput(shop, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  }));
  

/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
    // Customize the findOne method
    async findOne(ctx) {
      const { id } = ctx.params;
  
      // Ensure the ID is numeric
      const categoryId = parseInt(id, 10);
      if (isNaN(categoryId)) {
        return ctx.badRequest('Invalid ID format');
      }
  
      // Fetch the author by ID using Strapi's db query API
      const category = await strapi.db.query('api::category.category').findOne({
        where: { id: categoryId },
        populate: ['shops'], // Populate related data if needed
      });
  
      if (!category) {
        return ctx.notFound('Category not found');
      }
  
      //return author;
          
      // You can add more custom logic here if needed
      // sanitizeOutput - exclude private fields from the response
      // This will prevent sensitive fields, like password, from being exposed in the response 
      const sanitizedEntity = await this.sanitizeOutput(category, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  }));

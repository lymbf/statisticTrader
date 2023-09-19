"use strict";

/**
 * setup controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::setup.setup", ({ strapi }) => ({
  async find(ctx) {
    // some custom logic here
    const {user} = ctx.state;
    let filters = {...ctx.query.filters};
    filters.user = {id: {'$eq': user.id}}
    ctx.query = { ...ctx.query, filters: filters};
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic

    return { data, meta };
  },
}));

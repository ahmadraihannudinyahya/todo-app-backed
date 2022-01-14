const Joi = require('joi');

const PostTaskPayloadSchema = Joi.object({
  task : Joi.string().required(),
});

module.exports = {
  PostTaskPayloadSchema
}
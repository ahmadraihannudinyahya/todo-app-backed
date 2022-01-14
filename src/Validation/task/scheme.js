const Joi = require('joi');

const PostTaskPayloadSchema = Joi.object({
  task : Joi.string().required(),
});

const PatchTaskPayloadSchema = Joi.object({
  task : Joi.string(),
});

module.exports = {
  PostTaskPayloadSchema,
  PatchTaskPayloadSchema
}
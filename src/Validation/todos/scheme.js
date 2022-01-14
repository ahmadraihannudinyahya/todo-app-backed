const Joi = require('joi');

const PostTodosPayloadSchema = Joi.object({
  title : Joi.string().required(),
  desc : Joi.string().required(),
});

const PatchTodosPayloadSchema = Joi.object({
  title : Joi.string(),
  desc : Joi.string(),
});

module.exports = {
  PostTodosPayloadSchema,
  PatchTodosPayloadSchema
}
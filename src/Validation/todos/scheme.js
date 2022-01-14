const Joi = require('joi');

const PostTodosPayloadSchema = Joi.object({
  title : Joi.string().required(),
  desc : Joi.string().required(),
})

module.exports = {
  PostTodosPayloadSchema,
}
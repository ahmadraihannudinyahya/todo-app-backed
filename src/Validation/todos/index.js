const InvarianError = require('../../Commons/InvarianError');
const { PostTodosPayloadSchema, PatchTodosPayloadSchema } = require('./scheme');

const TodosValidation = {
  validatePostTodosPayload : (payload) => {
    const result = PostTodosPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  },

  ValidatePatchTodosPayload : (payload) =>{
    const result = PatchTodosPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  }
};

module.exports = TodosValidation;
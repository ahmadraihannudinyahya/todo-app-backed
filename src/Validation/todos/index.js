const InvarianError = require('../../Commons/InvarianError');
const { PostTodosPayloadSchema } = require('./scheme');

const TodosValidation = {
  validatePostTodosPayload : (payload) => {
    const result = PostTodosPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvarianError(validationResult.error.message);
    };
  },
};

module.exports = TodosValidation;
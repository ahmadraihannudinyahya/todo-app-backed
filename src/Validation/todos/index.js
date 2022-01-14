const InvarianError = require('../../Commons/InvarianError');
const { PostTodosPayloadSchema } = require('./scheme');

const TodosValidation = {
  validatePostTodosPayload : (payload) => {
    const result = PostTodosPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  },
};

module.exports = TodosValidation;
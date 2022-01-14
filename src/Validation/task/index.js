const InvarianError = require('../../Commons/InvarianError');
const { PostTaskPayloadSchema } = require('./scheme');

const TaskValidation = {
  validatePostTaskPayload : (payload) =>{
    const result = PostTaskPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  }
}

module.exports = TaskValidation;
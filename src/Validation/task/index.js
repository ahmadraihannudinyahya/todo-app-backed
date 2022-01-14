const InvarianError = require('../../Commons/InvarianError');
const { PostTaskPayloadSchema, PatchTaskPayloadSchema } = require('./scheme');

const TaskValidation = {
  validatePostTaskPayload : (payload) =>{
    const result = PostTaskPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  },
  validatePatchTaskPayload : (payload) =>{
    const result = PatchTaskPayloadSchema.validate(payload);
    if (result.error) {
      throw new InvarianError(result.error.message);
    };
  },
}

module.exports = TaskValidation;
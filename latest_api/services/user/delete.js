import models from '../../models/index.js';

const deleteUser = async (id) => {
  try {
    const user = await models.User.findByPk(id);
    const data = await user.destroy();
    return user;
  } catch (error) {
    throw error;
  }
}
export default deleteUser;


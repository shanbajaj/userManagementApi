import models from '../../models/index.js';
const updateUser = async (id, { name, address }) => {
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return null;
    }
    user.name = name;
    user.address = address;
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}
export default updateUser;

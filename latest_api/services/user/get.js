import models from '../../models/index.js';

const getData = async () => {
  try {
    const users = await models.User.findAll({include: models.Ticket});
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await models.User.findOne({where:{id},include: models.Ticket});
    return user;
  } catch (error) {
    throw error;
  }
}
export default { getUserById, getData };

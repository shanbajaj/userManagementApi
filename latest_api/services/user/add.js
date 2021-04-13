import models from '../../models/index.js';
const addUser = async ({name,mno,address }) => {
  const data = {name,mno,address};
  try {
    const user = await models.User.create(data);
    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
};
export default addUser;


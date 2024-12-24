import { User } from '../model/userModel';

export const create = (req, res) => {
   try {
      const userData = req.body;
      console.log(userData);
   } catch (error) {}
};

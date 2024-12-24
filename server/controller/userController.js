import UserModel from '../model/userModel.js';

const create = async (req, res) => {
   try {
      const userData = new UserModel(req.body);

      // add is exist maybe ?

      const createUser = await userData.save();

      if (!createUser) {
         throw Error('Can not create user');
      }

      res.status(200).json(createUser);

      console.log(userData);
   } catch (error) {
      console.log('Error occured');
      res.status(500).json({ message: error?.message ?? error });
   }
};

const update = async (req, res) => {
   try {
      const userData = req.body;
      console.log(userData);
   } catch (error) {}
};

const remove = async (req, res) => {
   try {
      const userData = req.body;
      console.log(userData);
   } catch (error) {}
};

const fetch = async (req, res) => {
   try {
      const userData = req.body;
      console.log(userData);
   } catch (error) {}
};

export const UserController = { create, update, remove, fetch };

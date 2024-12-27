import UserModel from '../model/userModel.js';

const create = async (req, res) => {
   try {
      const userData = new UserModel(req.body);

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
      const allUsers = await UserModel.find();

      res.status(200).json(allUsers);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const findOne = async (req, res) => {
   try {
      const { id } = req.params;
      const userData = await UserModel.findById(id);

      if (!userData) {
         return res.status(404).json({ message: 'User is not defined' });
      }

      res.status(200).json(userData);
   } catch (error) {
      res.status(400).json({ message: `User is not defined. ${error?.message ?? error}` });
   }
};

export const UserController = { create, update, remove, fetch, findOne };

import ChatModel from '../model/chatModel.js';
import UserModel from '../model/userModel.js';

const create = async (req, res) => {
   try {
      const { userId } = req.query;

      const userExist = await UserModel.findOne({ _id: userId });

      if (!userId || !userExist) {
         throw Error('Can not find such User or UserID');
      }

      const chatData = new ChatModel(req.body);

      const createdChat = await chatData.save();

      if (!createdChat) {
         throw Error('Can not create user');
      }

      createdChat.users.push(userId);

      await chatData.save();

      res.status(200).json(createdChat);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const update = async (req, res) => {
   try {
      const { id } = req.params;
      const { firstname, lastname } = req.body;

      if (!firstname && !lastname) {
         throw Error('Error while updatind data. Fields are Empty.');
      }
      const options = { new: true, runValidators: true, returnDocument: 'after' };
      const chatUpdated = await ChatModel.findByIdAndUpdate(id, { firstname, lastname }, options);

      res.status(200).json(chatUpdated);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const remove = async (req, res) => {
   try {
      const { id } = req.params;

      const chatRemoved = await ChatModel.findByIdAndDelete(id);

      res.status(200).json(chatRemoved);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const getOne = async (req, res) => {
   try {
      const { id } = req.params;

      const chatData = await ChatModel.findById(id);

      res.status(200).json(chatData);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const getAll = async (req, res) => {
   try {
      const chatData = await ChatModel.find();

      res.status(200).json(chatData);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

const getAllByUserId = async (req, res) => {
   try {
      const { userId } = req.query;

      const userData = await UserModel.findById({ _id: userId });

      if (!userId || !userData) {
         return res.status(400).json({ message: 'Can not find such user' });
      }

      const chatData = await ChatModel.find({ users: { $all: [userId] } });

      res.status(200).json(chatData);
   } catch (error) {
      res.status(500).json({ message: error?.message ?? error });
   }
};

export const ChatController = { create, update, remove, getAll, getAllByUserId, getOne };

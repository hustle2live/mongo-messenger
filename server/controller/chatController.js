import ChatModel from '../model/chatModel.js';
import UserModel from '../model/userModel.js';

const create = async (req, res) => {
   try {
      console.log('--- creating a chat --- ');
      const { userId } = req.query;
      console.log('userId : ' + userId);

      const userExist = await UserModel.findOne({ _id: userId });
      console.log(userExist);
      if (!userId || !userExist) {
         console.log('can not find such User or UserID');
         throw Error("Missed Creator's User ID");
      }

      const chatData = new ChatModel(req.body);

      const createdChat = await chatData.save();

      if (!createdChat) {
         throw Error('Can not create user');
      }

      createdChat.users.push(userId);

      await chatData.save();

      console.log('--- Creating a chat has done successfully! --- ');

      res.status(200).json(createdChat);
   } catch (error) {
      console.log('Error occured');
      res.status(500).json({ message: error?.message ?? error });
   }
};

const update = async (req, res) => {
   try {
      const chatData = req.body;
      console.log(chatData);
   } catch (error) {}
};

const remove = async (req, res) => {
   try {
      const chatData = req.body;
      console.log(chatData);
   } catch (error) {}
};

const getOne = async (req, res) => {
   try {
      const chatId = req.params.id;

      const chatData = await ChatModel.findOne({ _id: chatId });

      console.log(chatData);

      res.status(200).json(chatData);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: error?.message ?? error });
   }
};

const getAll = async (req, res) => {
   try {
      const chatData = req.body;
      console.log(chatData);
   } catch (error) {}
};

export const ChatController = { create, update, remove, getAll, getOne };

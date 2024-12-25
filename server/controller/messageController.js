import MessageModel from '../model/messageModel.js';
import ChatModel from '../model/chatModel.js';

const create = async (req, res) => {
   try {
      const { chatId, userId } = req.query;

      const currentChat = await ChatModel.findById({ _id: chatId });

      if (!chatId || !userId) {
         throw Error('Can not find current chat');
      }

      const messageData = new MessageModel({ ...req.body, user_id: userId });

      const createMessage = await messageData.save();

      currentChat.messages.push(createMessage);

      await currentChat.save();

      const messages = await currentChat.populate('messages');

      res.status(200).json(messages);
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

export const MessageController = { create, update, remove };

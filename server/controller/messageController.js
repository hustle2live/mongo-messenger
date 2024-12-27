import MessageModel from '../model/messageModel.js';
import ChatModel from '../model/chatModel.js';
import { socketEmitter } from '../index.js';

const fakeUserId = '676abffe95deb53ad300d42c';

const qouteGenerator = async () => {
   const QUOTE_URL = 'https://api.forismatic.com/api/1.0/?lang=en&format=json&method=getQuote';
   try {
      const response = await fetch(QUOTE_URL);
      if (!response.ok) {
         throw Error('Error while fetching forismatic.com');
      }
      const result = await response.json();

      const { quoteText } = result;

      return quoteText;
   } catch (error) {
      console.log(error?.message ?? error);
      return null;
   }
};

const autoResponse = async (chat_id) => {
   try {
      const getQoute = await qouteGenerator();
      const user_id = fakeUserId;

      const request = {
         query: { chatId: chat_id, userId: user_id },
         body: { text: getQoute }
      };

      const response = {
         success: '',
         result: '',
         status: (num) => {
            return {
               json: (item) => {
                  response.success = num === 200 ? 'success' : 'error';
                  response.result = item;
                  return item;
               }
            };
         }
      };

      await create(request, response);

      const updated = await ChatModel.findById({ _id: chat_id }).populate('messages');

      socketEmitter.emit('NEW_MESSAGE', { data: updated });
   } catch (error) {
      console.log(error?.message ?? error);
   }
};

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

      if (userId !== fakeUserId) {
         setTimeout(() => autoResponse(chatId), 3000);
      }

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

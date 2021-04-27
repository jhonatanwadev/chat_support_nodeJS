import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';


class MessageController{

    async create(request: Request, response: Response){

        const { admin_id, text, user_id } = request.body;
        const messagesService = new MessagesService();

        const message = await messagesService.create({
            admin_id,
            text,
            user_id
        });

        response.status(200).json(message);

    }

    async showByUser(request: Request, response: Response){
        
        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);

        return response.json(list);

    }

}

export { MessageController }
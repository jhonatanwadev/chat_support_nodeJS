import { Response, Request } from 'express';
import { UsersService } from '../services/UsersService';

class UsersControllers{

    async create(request: Request, response: Response){

        const { email } = request.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return response.json(user);
    }

}

export { UsersControllers }
import { Request, Response } from 'express';
import { RepositoryNotTreeError } from 'typeorm';
import { SettingsService } from '../services/SettingsService';

class SettingsController {

    async create(request: Request, response: Response){

        const { chat, username } = request.body;
        
        try {

            const settingsService = new SettingsService();

            const settings = await settingsService.create({chat, username});

            return response.json(settings);

        } catch (error) {
            
            return response.status(400).json({
                message: error.message
            })

        }
    

    }

    async findByUsername(request: Request, response: Response){

        const { username } = request.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUsername(username);

        return response.json(settings);

    }

    async update(request: Request, response: Response){

        const { username } = request.params;
        const { chat } = request.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chat);

        return response.json(settings);

    }

}

export { SettingsController }
import { Router } from 'express';
import { MessageController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersControllers } from './controllers/UsersControllers';

const routes = Router();

// Settings Routes
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);


// Users Routes
const usersController = new UsersControllers();

routes.post("/users", usersController.create);


// Messages Routes
const messagesController = new MessageController();

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes }
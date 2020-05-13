import { Router } from 'express';
import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jean Borges',
    email: 'jean@gmail.com',
    password_hash: '1231456489',
  });
  return res.json(user);
});

export default routes;

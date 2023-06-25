import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get('/', (req, res) => {
  // Implement logic to fetch all users
  res.json({ message: 'Get all users' });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  // Implement logic to fetch a user by ID
  res.json({ message: `Get user with ID ${userId}` });
});

router.post('/', createUserValid, responseMiddleware, (req, res) => {
  const { id, name, email, phoneNumber, password } = req.body;
  // Implement logic to create a user
  const user = userService.createUser(id, name, email, phoneNumber, password);
  res.json({ message: 'User created', user });
});

router.put('/:id', updateUserValid, responseMiddleware, (req, res) => {
  const userId = req.params.id;
  const { name, email, phoneNumber, password } = req.body;
  // Implement logic to update a user by ID
  res.json({ message: `Update user with ID ${userId}`, user: req.body });
});

router.delete('/:id', responseMiddleware, (req, res) => {
  const userId = req.params.id;
  // Implement logic to delete a user by ID
  res.json({ message: `Delete user with ID ${userId}` });
});

export { router };

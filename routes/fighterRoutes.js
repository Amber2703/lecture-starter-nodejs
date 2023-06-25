import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', (req, res) => {
  // Implement logic to fetch all fighters
  res.json({ message: 'Get all fighters' });
});

router.get('/:id', (req, res) => {
  const fighterId = req.params.id;
  // Implement logic to fetch a fighter by ID
  res.json({ message: `Get fighter with ID ${fighterId}` });
});

router.post('/', createFighterValid, responseMiddleware, (req, res) => {
  const { id, name, power, defense, health } = req.body;
  // Implement logic to create a fighter
  const fighter = fighterService.createFighter(id, name, power, defense, health);
  res.json({ message: 'Fighter created', fighter });
});

router.put('/:id', updateFighterValid, responseMiddleware, (req, res) => {
  const fighterId = req.params.id;
  const { name, power, defense, health } = req.body;
  // Implement logic to update a fighter by ID
  res.json({ message: `Update fighter with ID ${fighterId}`, fighter: req.body });
});

router.delete('/:id', responseMiddleware, (req, res) => {
  const fighterId = req.params.id;
  // Implement logic to delete a fighter by ID
  res.json({ message: `Delete fighter with ID ${fighterId}` });
});

export { router };

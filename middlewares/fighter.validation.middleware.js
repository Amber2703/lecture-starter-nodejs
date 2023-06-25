import { FIGHTER } from "../models/fighter.js";

// const createFighterValid = (req, res, next) => {
  // Validation middleware for creating a fighter
const createFighterValid = (req, res, next) => {
  const { id, name, power, defense, health } = req.body;

  // Check for required fields
  if (!name || !power || !defense) {
    return res.status(400).json({ error: 'All fields are required except id and health.' });
  }

  // Check for presence of any extra fields
  const validFields = Object.keys(new FIGHTER());
  const receivedFields = Object.keys(req.body);
  const hasExtraFields = receivedFields.some((field) => !validFields.includes(field));
  if (hasExtraFields) {
    return res.status(400).json({ error: 'Extra fields are not allowed.' });
  }

  // Perform field format validations
  // You can use regular expressions or custom logic here

  // Validation successful, proceed to the next middleware
  next();
};



  // TODO: Implement validatior for FIGHTER entity during creation
//   next();
// };

// const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  // Validation middleware for updating a fighter
const updateFighterValid = (req, res, next) => {
  const { id, name, power, defense, health } = req.body;

  // Check for presence of at least one field from the model
  if (!name && !power && !defense && !health) {
    return res.status(400).json({ error: 'At least one field must be present for update.' });
  }

  // Check for absence of id field
  if (id) {
    return res.status(400).json({ error: 'ID field should not be present for update.' });
  }

  // Check for presence of any extra fields
  const validFields = Object.keys(new FIGHTER());
  const receivedFields = Object.keys(req.body);
  const hasExtraFields = receivedFields.some((field) => !validFields.includes(field));
  if (hasExtraFields) {
    return res.status(400).json({ error: 'Extra fields are not allowed.' });
  }

  // Perform field format validations
  // You can use regular expressions or custom logic here

  // Validation successful, proceed to the next middleware
  next();
};
//   next();
// };

export { createFighterValid, updateFighterValid };

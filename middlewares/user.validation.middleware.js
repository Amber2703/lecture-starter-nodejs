import { USER } from "../models/user.js";

// const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  // Validation middleware for creating a user
const createUserValid = (req, res, next) => {
  const { id, name, email, phoneNumber, password } = req.body;

  // Check for required fields
  if (!name || !email || !phoneNumber || !password) {
    return res.status(400).json({ error: 'All fields are required except id.' });
  }

  // Check for presence of any extra fields
  const validFields = Object.keys(new USER());
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

// const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  // Validation middleware for updating a user
const updateUserValid = (req, res, next) => {
  const { id, name, email, phoneNumber, password } = req.body;

  // Check for presence of at least one field from the model
  if (!name && !email && !phoneNumber && !password) {
    return res.status(400).json({ error: 'At least one field must be present for update.' });
  }

  // Check for absence of id field
  if (id) {
    return res.status(400).json({ error: 'ID field should not be present for update.' });
  }

  // Check for presence of any extra fields
  const validFields = Object.keys(new User());
  const receivedFields = Object.keys(req.body);
  const hasExtraFields = receivedFields.some((field) => !validFields.includes(field));
  if (hasExtraFields) {
    return res.status(400).json({ error: 'Extra fields are not allowed.' });
  }

  // Perform field format validations
  // You can use regular expressions or custom logic here

  // Validation successful, proceed to the next middleware
  next();
  // next();
};

export { createUserValid, updateUserValid };

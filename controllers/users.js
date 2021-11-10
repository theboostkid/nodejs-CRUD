import { v4 as uuidv4 } from "uuid";
export const createUser = (req, res) => {
  const user = req.body;

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);
  res.send(`User with the name ${user.firstname} added to the DATABASE.`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with the ID: ${id} deleted from the database.`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const updateUsers = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User of ${id} has been updated.`);
};

export const getAllUsers = (req, res) => {
  console.log(users);

  res.send(users);
};

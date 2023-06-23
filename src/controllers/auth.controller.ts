import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid"; // Import the UUID v4 generator
import { db } from "../db/db.config";
import { logger } from "../helpers/logger";
import { generateJWTToken } from "../helpers/token.generator";
import { Model } from "objection";
import User from "../db/models/User";
import { sendActivationEmail } from "../mail/sendActivationEmail";

Model.knex(db);

/**
 * @desc Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      res.status(400).json({ message: "Username field is required" });
      return;
    }
    if (!email) {
      res.status(400).json({ message: "Email field is required" });
      return;
    }
    if (!password) {
      res.status(400).json({ message: "Password field is required" });
      return;
    }

    // Check if the username is already taken
    const existingUser = await User.query().findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const id = uuidv4(); // Generate a UUID for the 'id' field
    const activationToken = uuidv4()
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Create a new user
    const newUser = await User.query().insert({
      id,
      username,
      email,
      password: hashedPassword,
      activationToken: activationToken,
    });

    sendActivationEmail(email, activationToken);

  // Check user data and return a response
  if (newUser) {
    const token = generateJWTToken(newUser.id);
    const { id, username, email } = newUser;
    logger.info(`User ${username} has been registered`);
    return res.status(201).json({ id, username, email, token });
    // res.status(201).json({ success: true, data: newUser });
   } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Server could not process your response at the moment",
    });
    logger.error("[Server]: An error occurred", error);
  }
};

/**
 * @desc Login a new user
 * @route POST /api/auth/login
 * @access Public
 */

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    // Find user by username
    const user = await User.query().findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = generateJWTToken(user.id);

    // Return the token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



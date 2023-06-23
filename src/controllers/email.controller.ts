import { Request, Response } from "express";
import User from "../db/models/User";





export const activateEmail = async (req: Request, res: Response) => {
    const { token } = req.params;
  
    try {
      // Find user by activation token
      const user = await User.query().findOne({ activationToken: token });
      if (!user) {
        return res.status(404).json({ message: 'Invalid activation token' });
      }
  
      // Update user's isActive field
    await User.query().findById(user.id).patch({ isActive: true });
  
    res.json({ message: 'Account activated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
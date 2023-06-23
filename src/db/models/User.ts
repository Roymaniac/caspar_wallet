import { Model } from 'objection';

class User extends Model {
  id!: string;
  username!: string;
  email!: string;
  password!: string;
  activationToken!: string;
  isActive!: boolean;

  static tableName = 'users';
}

export default User;

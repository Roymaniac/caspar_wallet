import { Model } from 'objection';

class User extends Model {
  id!: string;
  username!: string;
  email!: string;
  password!: string;

  static tableName = 'users';
}

export default User;

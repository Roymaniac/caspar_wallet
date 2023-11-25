export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  activationToken: string;
  isActive: boolean;
  created_at: Date,
  updated_at: Date
}

export interface Currencies {
  id: string;
  code: string;
  name: string;
  symbol: string;
  created_at: Date,
  updated_at: Date
}

export interface Wallets {
  id: string;
  user_id: string;
  currency_id: string;
  balance: number;
  created_at: Date,
  updated_at: Date

}


declare module 'knex/types/tables' {
  interface Tables {
    users: User;
  }
};
import { Model } from "objection";
import User from "./User";

class Wallet extends Model {
    id!: string;
    balance!: number;
    user_id!: string;
    currency_id!: string;

    static tableName = 'wallets';

}

export default Wallet;
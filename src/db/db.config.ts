import { onDatabaseConnect } from './knex';
import { logger } from '../helpers/logger';

onDatabaseConnect()
  .then(() => logger.info('Database is connected'))
  .catch((error) => logger.error(error));

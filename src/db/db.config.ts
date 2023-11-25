import { onDatabaseConnect } from './knex';
import { logger } from '../utils/logger';

onDatabaseConnect()
  .then(() => logger.info('Database is connected'))
  .catch((error) => logger.error(error));

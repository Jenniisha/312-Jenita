import { success, error } from './logger.js';
import * as Logger from './logger.js';

success( 'Added a product to the database' );
error( 'Unable to connect to the database' );
Logger.error( 'Unable to connect to the database' );
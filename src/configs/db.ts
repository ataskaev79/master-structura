import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_LOGS } from './env';
import User from '../api/User/models/User.model';
import Role from '../api/Role/models/Role.model';
import UserRoles from '../api/Role/models/UserRoles.model';
import CustomerProfile from '../api/Customer/models/CustomerProfile.model';
import ContractorProfile from '../api/Contractor/models/ContractorProfile.model';
import ContractorTask from '../api/Task/models/ContractorTask.model';
import CustomerTask from '../api/Task/models/CustomerTask.model';

const mainDBConnection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: DB_LOGS,
  models: [User, Role, UserRoles, CustomerProfile, ContractorProfile, ContractorTask, CustomerTask],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default mainDBConnection;

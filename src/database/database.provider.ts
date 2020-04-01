import { Sequelize, Table, Model, Column } from 'sequelize-typescript';
import { User } from 'src/common/models/user.model';

export const databaseProvider =
{
    provide: 'SEQUELIZE',
    //local config
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'asd123!@',
        database: 'workout_storage',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
    //remote config
    // useFactory: async () => {
    //   const sequelize = new Sequelize({
    //     dialect: 'postgres',
    //     host: 'workoutstorage.cofhmrxxmfqy.eu-central-1.rds.amazonaws.com',
    //     port: 5432,
    //     username: 'postgres',
    //     password: process.env.SQL_PASSWORD,
    //     database: 'workout_storage',
    //   });
    //   sequelize.addModels([User]);
    //   await sequelize.sync();
    //   return sequelize;
    // },
};
import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
import { clampSpaces } from "@src/utils";


export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: "db",
    username: "user",
    password: "user",
    port: 3306,
    host: "localhost",
    dialectModule: mysql2,
    define: { underscored: true, timestamps: true, freezeTableName: true },
    sync: { force: true },
    logging: (sql) => console.log(
        sql
            .split('\n')
            .map((row) => clampSpaces(row))
            .filter((row) => !row.startsWith('--'))
            .join(' '),
    ),
});

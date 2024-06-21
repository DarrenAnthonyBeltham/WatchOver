import { Sequelize } from "sequelize";

const db = () => ('database1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;
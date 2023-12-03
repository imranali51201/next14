import { DataTypes, Model } from "sequelize"
import { sequelize } from ".."
import { CreateUserType, IUser } from "@src/types";

const User = sequelize.define<Model<IUser, CreateUserType>>("User", {
    id: {
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User
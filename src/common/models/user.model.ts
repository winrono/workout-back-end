import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({ tableName: 'user', underscored: true })
export class User extends Model<User> {
    @Column({
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        type: DataType.UUID
    })
    id: string;
    @Column
    login: string;
    @Column
    password: string;

}
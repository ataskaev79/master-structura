import {
  Table,
  Model,
  IsUUID,
  PrimaryKey,
  Unique,
  Default,
  Column,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
  AllowNull,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserRoles from './UserRoles.model';
import { IUserRoleOption } from '../interfaces';

@Table({
  tableName: 'Role',
})
class Role extends Model<Role> {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @Default(DataTypes.UUIDV4)
  @Column
  id?: string;

  @AllowNull(false)
  @Unique
  @Column
  label: IUserRoleOption;

  @HasMany(() => UserRoles, 'roleId')
  userRoles: UserRoles[];

  @CreatedAt
  readonly createdAt?: Date;

  @UpdatedAt
  readonly updatedAt?: Date;

  @DeletedAt
  readonly deletedAt?: Date;
}

export default Role;

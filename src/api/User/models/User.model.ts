import {
  Table,
  Unique,
  Column,
  PrimaryKey,
  IsUUID,
  AllowNull,
  Default,
  CreatedAt,
  UpdatedAt,
  Model,
  HasMany,
  DeletedAt,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasOne,
  BelongsToMany,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import UserRoles from '../../Role/models/UserRoles.model';
import Role from '../../Role/models/Role.model';

export const USER_SCOPES = {
  BASIC: 'basic',
};

@Table({
  tableName: 'User',
  scopes: {
    [USER_SCOPES.BASIC]: {
      attributes: ['id', 'phone', 'email'],
    },
  },
})
class User extends Model<User> {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @Default(DataTypes.UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Unique
  @Column
  phone: string;

  @AllowNull(true)
  @Column
  bannedUntil: Date;

  @AllowNull(true)
  @Column
  phoneVerificationDate: Date;

  @AllowNull(true)
  @Column
  authCode: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  // @HasMany(() => UserRoles, 'userId')
  // roles: UserRoles[];

  @CreatedAt
  readonly createdAt?: Date;

  @UpdatedAt
  readonly updatedAt?: Date;

  @DeletedAt
  readonly deletedAt?: Date;
}

export default User;

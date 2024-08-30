import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import User from '../../User/models/User.model';
import CustomerTask from '../../Task/models/CustomerTask.model';

@Table({
  tableName: 'CustomerProfile',
})
class CustomerProfile extends Model<CustomerProfile> {
  @Column
  address: string;

  @Column
  phone: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => CustomerTask, 'customerProfileId')
  tasks: CustomerTask[];
}
export default CustomerProfile;

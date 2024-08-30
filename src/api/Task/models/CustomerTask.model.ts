import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import CustomerProfile from '../../Customer/models/CustomerProfile.model';

@Table({
  tableName: 'CustomerTask',
})
class CustomerTask extends Model<CustomerTask> {
  @Column
  description: string;

  @ForeignKey(() => CustomerProfile)
  @Column
  customerProfileId: number;

  @BelongsTo(() => CustomerProfile)
  customerProfile: CustomerProfile;
}

export default CustomerTask;

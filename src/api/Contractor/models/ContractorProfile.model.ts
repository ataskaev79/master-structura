import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import User from '../../User/models/User.model';
import ContractorTask from '../../Task/models/ContractorTask.model';

@Table({
  tableName: 'ContractorProfile',
})
class ContractorProfile extends Model<ContractorProfile> {
  @Column
  specialization: string;

  @Column
  experience: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => ContractorTask, 'contractorProfileId')
  tasks: ContractorTask[];
}
export default ContractorProfile;

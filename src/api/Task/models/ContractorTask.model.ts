import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import ContractorProfile from '../../Contractor/models/ContractorProfile.model';

@Table({
  tableName: 'ContractorTask',
})
class ContractorTask extends Model<ContractorTask> {
  @Column
  description: string;

  @ForeignKey(() => ContractorProfile)
  @Column
  contractorProfileId: number;

  @BelongsTo(() => ContractorProfile)
  contractorProfile: ContractorProfile;
}

export default ContractorTask;

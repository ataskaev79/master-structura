import UserRoles from '../../Role/models/UserRoles.model';
import User from '../../User/models/User.model';

export interface IAuth {
  user: User;
  currentRole: UserRoles;
}

export interface ILoginPayload {
  expires?: number;
  token: string;
}

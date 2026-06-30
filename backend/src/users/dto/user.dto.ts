import { EUserRole, UserEntity } from '../../shared/modules/user.entity';

export class UserDto {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: EUserRole;

  constructor(ent: UserEntity) {
    this.id = ent.id;
    this.name = ent.name;
    this.email = ent.email;
    this.password = ent.password;
    this.role = ent.role;
  }
}

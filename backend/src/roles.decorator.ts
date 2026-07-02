import { SetMetadata } from '@nestjs/common';
import { EUserRole } from './shared/modules/user.entity';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: EUserRole[]) => SetMetadata(ROLES_KEY, roles);

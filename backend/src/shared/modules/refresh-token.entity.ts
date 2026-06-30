import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class RefreshTokenEntity extends BaseEntity {
  @PrimaryColumn()
  token!: string;

  @Column()
  expires!: Date;

  @ManyToOne(() => UserEntity, (user) => user.refreshToken)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EUserRole, UserEntity } from '../shared/modules/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async getUserByEmail(email: string) {
    return this.userRepo.findOne({
      where: { email },
    });
  }

  async getUsers() {
    const users = await this.userRepo.find().catch((e) => {
      console.log(e);
      return [];
    });
    const usersMass = users.map((item) => new UserDto(item));
    return usersMass;
  }

  async createUser(
    name: string,
    email: string,
    hashPass: string,
  ): Promise<UserEntity> {
    const user = new UserEntity();
    user.name = name;
    user.email = email.trim().toLocaleLowerCase();
    user.password = hashPass;
    user.role = EUserRole.USER;

    const res = await user.save();
    return res;
  }
}

import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignINDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '../shared/modules/user.entity';
import { RefreshTokenEntity } from '../shared/modules/refresh-token.entity';
import { MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepo: Repository<RefreshTokenEntity>,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async singIn(data: SignINDto): Promise<SignInResponseDto> {
    const user = await this.userService.getUserByEmail(data.email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isPasswordValid = await bycrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return this.getTokens(user);
  }

  private generateSecureToken() {
    return randomBytes(48).toString('base64url');
  }

  async singUp(data: SignUpDto): Promise<SignInResponseDto> {
    const isEmailedValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!isEmailedValid) {
      throw new BadRequestException('Invalid Email');
    }

    const user = await this.userService.getUserByEmail(data.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashPass = await bycrypt.hash(data.password, 10);

    const userCreated = await this.userService.createUser(
      data.name,
      data.email,
      hashPass,
    );
    return this.getTokens(userCreated);
  }

  async getTokens(user: UserEntity): Promise<SignInResponseDto> {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const refreshToken = new RefreshTokenEntity();
    refreshToken.token = this.generateSecureToken();
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    refreshToken.expires = new Date(Date.now() + 60 * 60 * 1000);
    refreshToken.user = user;

    const refreshTokenCreated = await refreshToken.save();
    const accessToken = await this.jwtService.signAsync(payload);
    return new SignInResponseDto(accessToken, refreshTokenCreated.token);
  }

  async refreshToken(token: string): Promise<SignInResponseDto> {
    const now = new Date();
    const refreshToken = await this.refreshTokenRepo.findOne({
      relations: {
        user: true,
      },
      where: {
        token: token,
        expires: MoreThan(now),
      },
    });
    if (!refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    return this.getTokens(refreshToken.user);
  }
}

import { type Response } from 'express';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignINDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('sign-in')
  async singIn(@Body() data: SignINDto): Promise<SignInResponseDto> {
    return this.service.singIn(data);
  }

  @Post('sign-up')
  async singUp(
    @Body() data: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.service.singUp(data);

    res.cookie('access_token', tokens.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    res.cookie('refresh_token', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    return {
      message: 'Success',
    };
  }

  @Post('refresh-token')
  async refreshToken(
    @Body() data: RefreshTokenDto,
  ): Promise<SignInResponseDto> {
    return this.service.refreshToken(data.token);
  }
}

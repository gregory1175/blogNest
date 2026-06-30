import { Body, Controller, Post } from '@nestjs/common';
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
  async singUp(@Body() data: SignUpDto): Promise<SignInResponseDto> {
    return this.service.singUp(data);
  }

  @Post('refresh-token')
  async refreshToken(
    @Body() data: RefreshTokenDto,
  ): Promise<SignInResponseDto> {
    return this.service.refreshToken(data.token);
  }
}

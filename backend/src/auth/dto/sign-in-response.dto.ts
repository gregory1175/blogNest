export class SignInResponseDto {
  accessToken!: string; // 5min
  refreshToken!: string; // month

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}

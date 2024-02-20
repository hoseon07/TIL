import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/dto/request/signIn.dto';
import { ResStructureDto } from 'src/dto/response/resStructure.dto';

@Controller('auth')
export class AuthController {
  constructor (
    private authService: AuthService,
  ) {}

  @Post()
  async signIn(@Body() signInDto: SignInDto): Promise<ResStructureDto> {
    const data = await this.authService.signIn(signInDto);

    return {
      data,
      statusCode: 201,
      statusMsg: "로그인 완료"
    }
  }
  @Post("refresh")
  async refresh(@Headers("authorization") refreshToken: string) : Promise<ResStructureDto> {
    const data = await this.authService.verifyRefresh(refreshToken);

    return {
      data,
      statusCode: 200,
      statusMsg : "토큰 검증 완료"
    }
  }
}
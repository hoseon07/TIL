import { Body, Controller, Get, Headers, Post, UseGuards, UseInterceptors } from "@nestjs/common"
import { UserService } from './user.service';
import { SignUpRequestDto } from 'src/dto/request/signUp.dto';
import { ResStructureDto } from "src/dto/response/resStructure.dto";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('user')
export class UserController {
  // constructor(
  //   private userService : UserService,
  // ) {}

  // @Post()
  // async signUp(@Body() signUpDto: SignUpDto):Promise<void> {
  //   return await this.userService.signUp(signUpDto)
  // }
  constructor (
    private userService: UserService,
  ) { }

  @Post()
  async signUp(@Body() signUpDto: SignUpRequestDto) : Promise<ResStructureDto> {
    const data = await this.userService.signUp(signUpDto)

    return {
      data,
      statusCode: 201,
      statusMsg: "Created"
    }
  }

  @UseGuards(new AuthGuard())
  @Get()
  async userPage(@Headers("authorization") accesstoken: string) {
    const data = await this.userService.userPage(accesstoken)

    return {
      data,
      statusCode: 200,
      statusMsg: "Success to get inform"
    }
  }
}
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from 'src/dto/signUp.dto';
import { SignUpRequestDto } from 'src/dto/request/signUp.dto';


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

  async signUp(signUpDto: SignUpRequestDto) : Promise<object> {
    const data = await this.userService.signUp(signUpDto)

    return {
      data,
      statusCode: 201,
      statusMsg: "Created"
    }
  }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Redis } from 'ioredis';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from 'src/dto/request/signIn.dto';
import { compareSync } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor (
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,

  ) {}
  signIn = async (signInDto: SignInDto) => {
    const {email, password} = signInDto;

    const thisUser = await this.userRepository.findOneBy({email});
    if(!thisUser) throw new NotFoundException(); // 회원 존재 여부
    if(!compareSync(password, thisUser.password)) throw new BadRequestException(); // 비밀번호 일치 여부

    return {
      id: thisUser.id
    }
  }
}

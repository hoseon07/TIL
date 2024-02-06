import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { SignUpRequestDto } from 'src/dto/request/signUp.dto';
import { SignupResponseDto } from 'src/dto/response/signUp.dto';
import { SignUpDto } from 'src/dto/signUp.dto';
import { UserEntity } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // async signUp(singUpDto: SignUpDto) {
  //   const {name, email, password} = singUpDto;

  //   console.log(name, email, password);

  //   return
//  }

  constructor (
    @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>,
  ) {}

  async signUp(signUpDto: SignUpRequestDto): Promise<SignupResponseDto> {
    const {email, name, password, birth} = signUpDto

    const isExistEmail  = await this.userEntity.findOneBy({email})
    if(isExistEmail) throw new ConflictException();

    const hashed = await hashSync(password, process.env.SALT)

    await this.userEntity.save ({
      email,
      name,
      password,
      birth
    })

    return {
      email,
      name,
      birth
    }
  } 
}

/**
 * express
 * const signup = async(req, res)
 * 
 * NestJs
 * 
 */
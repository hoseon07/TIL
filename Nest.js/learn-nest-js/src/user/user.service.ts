import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { SignUpRequestDto } from 'src/dto/request/signUp.dto';
import { SignupResponseDto } from 'src/dto/response/signUp.dto';
import { UserEntity } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor (
    private jwtService: JwtService,
    @InjectRepository(UserEntity) private userEntity: Repository<UserEntity>,
  ) {}

  private logger = new Logger();
  
  async signUp(signUpDto: SignUpRequestDto): Promise<SignupResponseDto> {
    const {email, name, password, birth} = signUpDto

    const isExistEmail  = await this.userEntity.findOneBy({email})
    if(isExistEmail) throw new ConflictException();

    const hashed = await hashSync(password, Number(process.env.SALT))

    await this.userEntity.save ({
      email,
      name,
      password: hashed,
      birth
    })

    return {
      email,
      name,
      birth
    }
  } 

  async userPage(accesstoken) {
    const userId = await this.jwtService.verify(accesstoken.split(" ")[1], {secret: process.env.SECRET}).id

    const user = await this.userEntity.findOne({
      where: {id: userId},
      select: ["id", "name", "email", "birth"]
    });
    this.logger.debug(user)
    if(!user) throw new NotFoundException(`userId ${userId} doesn't exist`);

    return  user
  }
}

/**
 * express
 * const signup = async(req, res)
 * 
 * NestJs
 * 
 */
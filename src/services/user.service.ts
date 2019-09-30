
import { Injectable } from '@nestjs/common';
import { Repository, getRepository, DeleteResult, getCustomRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(    
    
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {console.log("UserService");}
  
  async getAll(): Promise<any> {
    const users = await this.userRepository.find();
    return users;
  }
  
  async add(model: UserEntity): Promise<any> {
    try{
      const user = await this.userRepository.insert(model);
    console.log(user);
    return user;
    }
     catch (err) {
    console.log(err);
    console.log(`${err} Could not Connect to the Database. Exiting Now...`);
    process.exit();
    return "Could not Connect to the Database";
  }

  }

  getById(id): string {
    return 'Auth Service '+ id;
  }

}
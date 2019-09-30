import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService ,} from './services/user.service';
import { AuthService } from './services/auth.service';
import { BookService } from './services/books.service';
import { BookModule } from './books/books.module';
import { BookEntity } from './entities/book.entity';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb+srv://sashabaev:Qwerty@123@cluster0-fxp9n.mongodb.net/test",
      //port: 27017,
      username: "sashabaev",
      password: encodeURIComponent("Qwerty@123"),
      database: "test",
      entities: [ BookEntity, UserEntity],
      logging: false,
      useUnifiedTopology: true,
      useNewUrlParser: true
    }),
    UserModule, BookModule ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

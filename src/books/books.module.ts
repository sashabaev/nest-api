import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from 'src/services/books.service';
import {BookController} from './books.controller'
import { BookEntity } from 'src/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])
],
  controllers: [BookController],
  providers: [ BookService],
  exports: [BookService],
})
export class BookModule {}
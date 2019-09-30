import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from 'src/entities/book.entity';
import { PaginationOptionsInterface, Pagination } from 'src/paginate';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>
  ) { }

  async getAll(): Promise<BookEntity[]> {
    const books = await this.bookRepository.find();
    return books;
  }
  async paginate(options: PaginationOptionsInterface, ): Promise<Pagination<BookEntity>> {
    console.log(options)
    const [results, total] = await this.bookRepository.findAndCount({
      take: options.limit,
      skip: options.page * options.limit, // think this needs to be page * limit
    });

    // TODO add more tests for paginate
    let result = new Pagination<BookEntity>({
      results,
      total,
    });
    console.log(result);
    return result
  }

  async getById(id): Promise<any> {
    return await this.bookRepository.findByIds(id);
  }

  async update(book: BookEntity): Promise<any> {
    return await this.bookRepository.update(book.id, book);
  }

  async create(book: BookEntity): Promise<any> {
    return await this.bookRepository.insert(book);
  }

  async delete(id): Promise<any> {
    return await this.bookRepository.delete(id);
  }

}
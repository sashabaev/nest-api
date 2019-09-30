import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BookService } from 'src/services/books.service';
import { BookEntity } from 'src/entities/book.entity';
import { PaginationOptionsInterface } from 'src/paginate';

@Controller('books')
export class BookController {

    constructor(private readonly bookService: BookService) {}
    @Get()
    async findAll(): Promise<Array<BookEntity>> {
         return await this.bookService.getAll();
    }

     @Post('/paginate')
    async paginate(@Body() data: PaginationOptionsInterface): Promise<any> {
        return await this.bookService.paginate(data);
    }

    @Get('/:id')
    findById(@Param('id') id): Promise<BookEntity> {
        debugger
        console.log(id);
        return this.bookService.getById(id);
    }

    @Post()
    async create(@Body() book: BookEntity): Promise<any> {
        return await this.bookService.create(book);
    }

    @Put()
    update(@Body() book: BookEntity): Promise<any> {
        console.log(book);
        return this.bookService.update(book);
    }

    @Delete('/:id')
    delete(@Param('id') id): Promise<any> {
        debugger
        console.log(id);
        return this.bookService.delete(id);
    }
}

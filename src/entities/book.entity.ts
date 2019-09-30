import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate, ObjectIdColumn } from 'typeorm';

@Entity()
export class BookEntity {
     @ObjectIdColumn()
     id: number;
    @Column()
    price: number;
    @Column()
    image: string;
    @Column()
    isbn: number;
    @Column()
    title: string;
    @Column()
    subtitle: string;
    @Column()
    author: string;
    @Column()
    published: Date;
    @Column()
    publisher:string;
    @Column()
    pages: number;
    @Column()
    description: string;
    @Column()
    website: string;
    @Column()
    isBooked: boolean;
    @Column()
    bookCount: number;
    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    created: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    updated: Date;
    }
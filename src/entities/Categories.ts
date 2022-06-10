import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, OneToMany, OneToOne} from 'typeorm'

import Books from './Books'
@Entity('categories')
class Categories{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Books, (book) => book.category)
  books: Books[]

  @CreateDateColumn()
  created_at: Date

}

export default Categories

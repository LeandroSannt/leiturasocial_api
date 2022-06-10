import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, OneToOne} from 'typeorm'

import  Category from './Categories'
import User from './Users'

@Entity('books')
class Books{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length:100})
  title: string;

  @Column({length:200})
  sinopse: string;

  @Column()
  photo: string;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column()
  numberpages: number;

  @ManyToOne(() => Category, category => category.books)
  @JoinColumn({name:"category_id"})
  category: Category;

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date

}

export default Books

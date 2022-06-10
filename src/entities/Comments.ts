import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, OneToOne} from 'typeorm'

import Post from './Posts'
import Book from './Books'
import User from './Users'

@Entity('comments')
class Comments{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length:150})
  description: string;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post: Post

  @Column()
  post_id: string;

  @Column()
  book_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToOne(() => Book)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date

}

export default Comments

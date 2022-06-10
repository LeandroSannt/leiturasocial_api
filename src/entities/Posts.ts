import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,JoinColumn,ManyToOne, OneToMany, OneToOne} from 'typeorm'

import User from './Users'
import Comments from './Comments'

@Entity('posts')
class Posts{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length:500})
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string;

  @OneToMany(() => Comments, comment => comment.post)
  comments: Comments[];

  @CreateDateColumn()
  created_at: Date

}

export default Posts

import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,JoinColumn,ManyToOne} from 'typeorm'

import User from './Users'

@Entity('following_users')
class Follower_user{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  user_id: string;

  @Column()
  follower_user_id: string;

  @CreateDateColumn()
  created_at: Date

}

export default Follower_user

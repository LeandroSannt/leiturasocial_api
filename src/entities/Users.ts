import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, OneToMany} from 'typeorm'
import {v4 as uuid} from 'uuid'

import Follower_user from './Following_users';

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  isAdmin: boolean;

  @Column()
  surname: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Follower_user, follower_user => follower_user.user)
  follower_user: Follower_user[];

  @CreateDateColumn()
  created_at: Date

  constructor(){
    if(!this.id){
        this.id = uuid()
    }
}
}

export default User

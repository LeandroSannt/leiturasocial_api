import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, OneToMany} from 'typeorm'

@Entity('profiles')
class Profiles{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date

}

export default Profiles

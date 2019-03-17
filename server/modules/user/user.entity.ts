import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Length, IsEmail } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  @Length(5, 80)
  name: string;

  @Column({ length: 20 })
  account: string;

  @Column({ length: 20 })
  password: string;

  @Column({ length: 100 })
  @IsEmail()
  email: string;
}
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm'
import { Users } from './Users'

@Entity()
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    name!: string

    @ManyToMany(() => Users, (users) => users.roles)
    users!: Users[]
}
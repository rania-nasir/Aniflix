import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm'
import { Roles } from './Roles'

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstname!: string

    @Column()
    lastname!: string

    @Column({ unique: true })
    email!: string

    @Column()
    password!: string

    @ManyToMany(() => Roles, (roles) => roles.users)
    @JoinTable()    // Creates the join table "user_roles" to manage the relationship
    roles!: Roles[]
}
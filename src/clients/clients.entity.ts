import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm' 

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: number

    @Column({nullable: true})
    address: string

    @Column({nullable: true})
    phone: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({unique: true})
    email: string

    @Column()
    dni: string

    @Column({ type: 'datetime' })
    birthDate: Date

    @Column({ type: 'datetime' })
    enrollmentDate: Date

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({nullable: true})
    interestTopic: string

    @Column()
    state: boolean

}
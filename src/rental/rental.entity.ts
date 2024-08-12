import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm' 
import { Client } from '../clients/clients.entity'

@Entity()
export class Rental {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rentalNumber: number

    @ManyToOne(() => Client, (client) => client.code)
    @JoinColumn({ name: 'client_code' })
    client: Client

    @Column({ type: 'datetime' })
    rentalDate: Date

    @Column()
    rentalValue: number
}
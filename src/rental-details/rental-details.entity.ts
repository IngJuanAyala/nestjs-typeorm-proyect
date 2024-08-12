import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm' 
import { Rental } from '../rental/rental.entity'
import { Cd } from '../cd/cd.entity'

@Entity()
export class RentalDetails {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Rental, (rental) => rental.rentalNumber)
    @JoinColumn({ name: 'rental_number' })
    rental: Rental

    @Column()
    item: string

    @PrimaryColumn()
    title_CD: string;
  
    @PrimaryColumn()
    nro_CD: string;
  
    @ManyToOne(() => Cd, (cd) => cd.titleCode)
    @JoinColumn({ name: 'title_code' })
    cdByTitle: Cd;
  
    @ManyToOne(() => Cd, (cd) => cd.nro)
    @JoinColumn({ name: 'nro_CD' })
    cdByNro: Cd;

    @Column({ type: 'datetime' })
    returnDate: Date

    @Column()
    LoadDaysDate: number
}
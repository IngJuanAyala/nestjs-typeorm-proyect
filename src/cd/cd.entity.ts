import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm' 

@Entity()
export class Cd {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titleCode: number;

    @Column()
    nro: number;

    @Column()
    condition: string

    @Column()
    location: string

    @Column()
    status: string

}

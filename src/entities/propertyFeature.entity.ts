import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  bderooms: number;
  @Column()
  bathrooms: number;
  @Column()
  parkingSpots: number;
  @Column()
  area: number;
  @Column()
  hasBalcony: boolean;
  @Column()
  hasSwimingPool: boolean;
  @OneToOne(() => Property, (property) => property.PropertyFeature)
  @JoinColumn()
  property: Property;
}

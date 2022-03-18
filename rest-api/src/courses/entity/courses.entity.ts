import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('courses')
export class CoursesEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  description: string;

  @Column()
  longDescription: string;

  @Column()
  iconUrl: string;

  @Column()
  category: string;

  @Column()
  lessonsCount: number;

  @Column()
  seqNo: number;

  @Column()
  url: string;

  @Column()
  promo: boolean;
}

import {NotFoundException} from '@nestjs/common';
import {DeleteResult, EntityRepository, FindAndModifyWriteOpResultObject, MongoRepository} from 'typeorm';
import {CoursesEntity} from '../entity/courses.entity';
import { Types } from 'mongoose';

@EntityRepository(CoursesEntity)
export class CoursesRepository extends MongoRepository<CoursesEntity> {

  async findAllCourses(): Promise<CoursesEntity[]> {
    return await this.find();
  }

  async updateCourse(courseId: string, changes: Partial<CoursesEntity>): Promise<FindAndModifyWriteOpResultObject> {
    const exists = Types.ObjectId.isValid(courseId) && await this.findOne(courseId);
    if (!exists) {
      throw new NotFoundException();
    }

    // it can return CoursesEntity
    // return (await this.findOneAndUpdate({_id: new Types.ObjectId(courseId)}, {$set: changes}, {upsert: true})).value;

    return await this.findOneAndUpdate({_id: new Types.ObjectId(courseId)}, {$set: changes}, {upsert: true});
  }

  async deleteCourse(courseId: string): Promise<DeleteResult> {
    const exists = Types.ObjectId.isValid(courseId) && await this.findOne(courseId);
    if (!exists) {
      throw new NotFoundException();
    }

    return await this.delete(courseId);
  }

  async createCourse(course: Partial<CoursesEntity>): Promise<CoursesEntity> {
    const coursesEntities = await this.create(course);

    return await this.save(coursesEntities);
  }
}

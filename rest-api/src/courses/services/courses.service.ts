import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {CoursesRepository} from '../repositories/courses.repository';
import {CoursesEntity} from '../entity/courses.entity';
import {DeleteResult, FindAndModifyWriteOpResultObject} from 'typeorm';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(CoursesRepository)
    private coursesRepository: CoursesRepository,
  ) {}

  async findAllCourses(): Promise<CoursesEntity[]> {
    return await this.coursesRepository.findAllCourses();
  }

  async updateCourse(courseId: string, changes: Partial<CoursesEntity>): Promise<FindAndModifyWriteOpResultObject> {
    return await this.coursesRepository.updateCourse(courseId, changes);
  }

  async deleteCourse(courseId: string): Promise<DeleteResult> {
    return await this.coursesRepository.deleteCourse(courseId);
  }

  async createCourse(course: Partial<CoursesEntity>): Promise<CoursesEntity> {
    return await this.coursesRepository.createCourse(course);
  }
}

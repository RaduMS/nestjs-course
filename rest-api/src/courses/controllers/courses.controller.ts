import {Controller, Get, Put, Delete, Post, Body, Param, Req, Res, BadRequestException} from '@nestjs/common';
import { Course } from '../../../../shared/course';
import { findAllCourses } from '../../../db-data';
import {CoursesRepository} from '../repositories/courses.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {CoursesService} from '../services/courses.service';
import {CoursesEntity} from '../entity/courses.entity';
import { Request, Response } from 'express';
import {DeleteResult, FindAndModifyWriteOpResultObject} from 'typeorm';

@Controller('courses')
export class CoursesController {

  constructor(private coursesService: CoursesService) {
    debugger;
    console.log('coursesService');
    console.log(coursesService);
  }

  @Get('hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello World!';
  }

  @Get()
  async findAllCourses(): Promise<CoursesEntity[]> {
    return await this.coursesService.findAllCourses();
  }

  // @Get('/api/courses')
  // async findAllCourses(
  //   @Req() request: Request,
  //   // when you call @Res in params you need to used in the function in order to send a response to the client
  //   // else the call will remain on pending
  //   // @Res() response: Response,
  // ): Promise<CoursesEntity[]> {
  //   debugger;
  //
  //   console.log(request);
  //   // console.log(response);
  //
  //   // this code will not work if you call @Res() in function params
  //   return await this.coursesService.findAllCourses();
  // }

  @Put(':courseId')
  async updateCourse(
    @Param('courseId') courseId: string,
    @Body() changes: Partial<CoursesEntity>,
    ): Promise<FindAndModifyWriteOpResultObject> {
    return await this.coursesService.updateCourse(courseId, changes);
  }

  @Delete(':courseId')
  async deleteCourse(@Param('courseId') courseId: string): Promise<DeleteResult> {
    return await this.coursesService.deleteCourse(courseId);
  }

  @Post('')
  async createCourse(@Body() course: Partial<CoursesEntity>): Promise<CoursesEntity> {
    if (!course || !course.description || !course.category || !course.url || !course.iconUrl) {
      throw new BadRequestException(`Course does not contain what needed`);
    }
    return await this.coursesService.createCourse(course);
  }

}

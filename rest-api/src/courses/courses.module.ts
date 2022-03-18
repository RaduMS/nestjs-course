import {Module} from '@nestjs/common';
import {CoursesController} from './controllers/courses.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CoursesRepository} from './repositories/courses.repository';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CoursesService} from './services/courses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoursesRepository]),
  ],
  controllers: [
    CoursesController,
  ],
  providers: [
    CoursesService,
  ],
})
export class CoursesModule {

}

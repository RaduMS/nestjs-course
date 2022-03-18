import {Module} from '@nestjs/common';
import {CoursesModule} from './courses/courses.module';
import {MongooseModule} from '@nestjs/mongoose';
import {MONGO_CONNECTION} from './constants';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CoursesEntity} from './courses/entity/courses.entity';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      url: MONGO_CONNECTION,
      type: 'mongodb',
      host: 'localhost',
      port: 9000,
      database: 'nestjsCourse',
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [
        CoursesEntity,
      ],
    }),
  ],
})
export class AppModule {

}

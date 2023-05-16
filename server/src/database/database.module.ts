import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
//import { UserService } from './middleware/user';

@Module({
  imports: [],
  providers: [DatabaseService],
  exports: [DatabaseService]
})

export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [DatabaseModule, CatsModule, OwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

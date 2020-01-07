import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatsService } from './cat.service';
import { catsProviders } from './cat.provider';
import { CatsController } from './cat.controller';

@Module({
    imports:[DatabaseModule],
    providers:[CatsService,...catsProviders],
    controllers:[CatsController]
})
export class CatsModule {}

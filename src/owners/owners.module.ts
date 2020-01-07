import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { ownerProviders } from './owners.provider';

@Module({

    imports:[DatabaseModule],
    controllers:[OwnersController],
    providers:[OwnersService,
                ...ownerProviders]
})
export class OwnersModule {}

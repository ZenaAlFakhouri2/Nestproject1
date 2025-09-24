import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentsModule } from './shipments/shipments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShipmentsModule,
    MongooseModule.forRoot('mongodb://localhost/nest_project'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

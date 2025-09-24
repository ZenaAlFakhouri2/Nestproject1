import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShipmentsService } from './shipments.service';
import { ShipmentsController } from './shipments.controller';
import { Shipment, ShipmentSchema } from './schemas/shipment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shipment.name, schema: ShipmentSchema }]),
  ],
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
})
export class ShipmentsModule {}
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './schemas/shipment.schema';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  // Add a shipment
  @Post()
  async addShipment(@Body() shipmentInfo: Partial<Shipment>) {
    return this.shipmentsService.create(shipmentInfo);
  }

  @Get()
  async getAllShipments() {
    return this.shipmentsService.getAll();
  }

  @Get(':number')
  async getShipmentsByNumber(@Param('number') number: string) {
    return this.shipmentsService.getShipmentByNumber(Number(number));
  }
}
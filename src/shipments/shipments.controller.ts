import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Shipment } from './schemas/shipment.schema';
import { CreateShipmentDto } from './dtos/create-shipment.dto';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  // Add a shipment
  @Post()
  addShipment(@Body() body: CreateShipmentDto) {
    return this.shipmentsService.create(body);
  }

  @Get()
  async getAllShipments() {
    return this.shipmentsService.getAll();
  }

  @Get(':number')
  async getShipmentsByNumber(@Param('number') number: Number) {
    return this.shipmentsService.getShipmentByNumber(Number(number));
  }

}
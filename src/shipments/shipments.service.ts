import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shipment ,ShipmentDocument } from './schemas/shipment.schema';
import { Model } from 'mongoose';
import { CreateShipmentDto } from './dtos/create-shipment.dto';

@Injectable()
export class ShipmentsService {
    constructor(@InjectModel(Shipment.name) private shipmentModel: Model<Shipment>) {}

  //auto_generate (by select the latest shipment then add 1 )
  async create(body:CreateShipmentDto) {
     const lastShipment = await this.shipmentModel.findOne().sort({ number: -1 }).exec();
     const newNumber = lastShipment ? lastShipment.number + 1 : 1;
     const newShipment = new this.shipmentModel({...body,number: newNumber,});
    return newShipment.save();
  }

  // Retrieve all shipments
  async getAll() {
    return this.shipmentModel.find().exec();
  }

  // Retrieve a specific shipment by its number
  async getShipmentByNumber(number: Number) {
    return this.shipmentModel.find({number}).exec();
  }
}

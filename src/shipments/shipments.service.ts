import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shipment ,ShipmentDocument } from './schemas/shipment.schema';
import { Model } from 'mongoose';

@Injectable()
export class ShipmentsService {
    constructor(@InjectModel(Shipment.name) private shipmentModel: Model<ShipmentDocument>) {}

  //auto_generate (by select the latest shipment then add 1 )
  async create(shipmentData: Partial<Shipment>) {

    const lastShipment = await this.shipmentModel.findOne().sort({ number: -1 }).exec();
    const newNumber = lastShipment ? lastShipment.number + 1 : 1;

    const newShipment = new this.shipmentModel({...shipmentData,number: newNumber,});

    return newShipment.save();
  }

  // Retrieve all shipments
  async getAll() {
    return this.shipmentModel.find().exec();
  }

  // Retrieve a specific shipment by its ID
  async getShipmentByNumber(number: number) {
    return this.shipmentModel.find({number}).exec();
  }
}

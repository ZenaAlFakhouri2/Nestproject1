import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShipmentDocument = Shipment & Document;

@Schema()
export class Shipment {
  @Prop()
  number: number;   

  @Prop({ required: true })
  orderId: string;  

  @Prop()
  weight?: number;

  @Prop({ default: true })
  isAvailable: boolean;
}

export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
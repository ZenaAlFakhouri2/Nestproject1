import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShipmentDocument = HydratedDocument<Shipment>;

@Schema()
export class Shipment {
  @Prop({required:true})
  number: number;   

  @Prop({ required: true })
  orderId: string;  

  @Prop()
  weight?: number;

  @Prop({ default: true })
  isAvailable: boolean;
}

export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
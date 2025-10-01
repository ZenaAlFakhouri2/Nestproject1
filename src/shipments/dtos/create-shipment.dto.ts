import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateShipmentDto
{
      number :number    
      @IsString()
      @IsNotEmpty()
      orderId: string;

      @IsNumber()
      @IsOptional()
      weight?: number;
    
      @IsBoolean()
      isAvailable: boolean = true ;

}
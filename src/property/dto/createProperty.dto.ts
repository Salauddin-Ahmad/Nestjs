import { IsInt, IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name!: string; // No more error

  @IsString()
  description!: string;

  @IsInt()
  area!: number;
}

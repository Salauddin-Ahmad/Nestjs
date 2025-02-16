import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ always: true })
  @Length(2, 10, { message: 'error on length' })
  name!: string; // No more error

  @IsString()
  @Length(2, 40, { groups: ['create'] })
  @Length(2, 40, { groups: ['update'] })
  description!: string;

  @IsInt({ always: true })
  @IsPositive()
  area!: number;
}

import { Transform } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class JumbleRequest {
  @IsNotEmpty()
  message: string;
}

export class JumbleParams {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  n: number;
}

export class JumbleResponse {
  jumbled: string;
}

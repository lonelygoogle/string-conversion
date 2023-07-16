import { Controller, Post, Body, Param } from '@nestjs/common';
import { JumbleService } from './jumble.service';
import { JumbleParams, JumbleRequest, JumbleResponse } from './dto/jumble.dto';

@Controller('api/jumble')
export class JumbleController {
  constructor(private readonly jumbleService: JumbleService) {}

  @Post(':n')
  jumbleMessage(
    @Param() params: JumbleParams,
    @Body() request: JumbleRequest,
  ): JumbleResponse {
    const jumbled = this.jumbleService.jumble(request.message, params.n);
    return { jumbled };
  }
}

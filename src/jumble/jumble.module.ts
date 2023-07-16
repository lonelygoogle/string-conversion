import { Module } from '@nestjs/common';
import { JumbleController } from './jumble.controller';
import { JumbleService } from './jumble.service';

@Module({
  controllers: [JumbleController],
  providers: [JumbleService]
})
export class JumbleModule {}

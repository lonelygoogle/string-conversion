import { Test, TestingModule } from '@nestjs/testing';
import { JumbleController } from './jumble.controller';
import { JumbleService } from './jumble.service';

describe('JumbleController', () => {
  let controller: JumbleController;
  let service: JumbleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JumbleController],
      providers: [JumbleService],
    }).compile();

    controller = module.get<JumbleController>(JumbleController);
    service = module.get<JumbleService>(JumbleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

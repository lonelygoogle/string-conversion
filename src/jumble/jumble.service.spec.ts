import { Test, TestingModule } from '@nestjs/testing';
import { JumbleService } from './jumble.service';

describe('JumbleService', () => {
  let service: JumbleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JumbleService],
    }).compile();

    service = module.get<JumbleService>(JumbleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('jumble', () => {
    it('should shift lowercase letters within the range', () => {
      const input = 'abcxyz';
      const n = 1;
      const expectedOutput = 'bcdyza';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should shift lowercase letters beyond the range, requiring wrapping', () => {
      const input = 'xyz';
      const n = 5;
      const expectedOutput = 'cde';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should leave numbers and spaces unchanged', () => {
      const input = 'test 123!';
      const n = 5;
      const expectedOutput = 'yjxy 123';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should remove non-alphanumeric characters', () => {
      const input = '!@#$%^&*()_';
      const n = 2;
      const expectedOutput = '';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should handle an empty input string', () => {
      const input = '';
      const n = 10;
      const expectedOutput = '';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should handle n = 0', () => {
      const input = 'abcxyz';
      const n = 0;
      const expectedOutput = 'abcxyz';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should throw an error for n > 1000 (out of range)', () => {
      const input = 'abcxyz';
      const n = 2000;

      expect(() => service.jumble(input, n)).toThrowError(
        'Invalid value for n. Please provide a number between 1 and 1000.',
      );
    });

    it('should handle the lowercase letter "z" at the end of the range', () => {
      const input = 'xyz';
      const n = 1;
      const expectedOutput = 'yza';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });

    it('should handle the lowercase letter "a" at the beginning of the range', () => {
      const input = 'abc';
      const n = 26;
      const expectedOutput = 'abc';

      const result = service.jumble(input, n);

      expect(result).toEqual(expectedOutput);
    });
  });
});

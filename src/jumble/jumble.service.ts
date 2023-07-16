import { Injectable } from '@nestjs/common';

@Injectable()
export class JumbleService {
  jumble(input: string, n: number): string {
    if (n < 0 || n > 1000) {
      throw new Error(
        'Invalid value for n. Please provide a number between 1 and 1000.',
      );
    }

    const characters = input.split('');

    for (let i = 0; i < characters.length; i++) {
      let char = characters[i];

      if (/[a-z]/.test(char)) {
        let code = char.charCodeAt(0);
        code = ((code - 97 + n) % 26) + 97;
        char = String.fromCharCode(code);
      } else if (!/[0-9\s]/.test(char)) {
        characters.splice(i, 1);
        i--;
        // Skip the rest of the code in this iteration and move to the next iteration
        continue;
      }

      characters[i] = char;
    }

    return characters.join('');
  }
}

import { generateLoremThema, getAvailableThemes } from '../src';

test('should return available themes', () => {
  const themes = getAvailableThemes();
  expect(themes).toContain('space');
  expect(themes).toContain('food');
});

test('should generate words for a valid theme', () => {
  const output = generateLoremThema('space', 10);
  expect(output.split(' ').length).toBe(10);
});

test('should throw an error for invalid theme', () => {
  expect(() => generateLoremThema('invalid')).toThrow(/Theme "invalid" not found/);
});
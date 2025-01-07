import { generateLoremThema, getAvailableThemes } from '../src';

test('should return available themes', () => {
  const themes = getAvailableThemes();
  expect(themes).toContain('space');
  expect(themes).toContain('food');
});

test('should generate words for a valid theme', () => {
  const output = generateLoremThema('space', 10);
  const actualWordCount = output.split(/\s+/).length;
  expect(actualWordCount).toBe(10);
});

test('should throw an error for invalid theme', () => {
  expect(() => generateLoremThema('invalid')).toThrow(/Theme "invalid" not found/);
});

// Additional edge cases
test('should generate exactly one word', () => {
  const output = generateLoremThema('space', 1);
  const actualWordCount = output.split(/\s+/).length;
  expect(actualWordCount).toBe(1);
});

test('should handle themes with multi-word entries', () => {
  const output = generateLoremThema('space', 15);
  const actualWordCount = output.split(/\s+/).length;
  expect(actualWordCount).toBe(15);
});

test('should generate a large number of words accurately', () => {
  const output = generateLoremThema('space', 100);
  const actualWordCount = output.split(/\s+/).length;
  expect(actualWordCount).toBe(100);
});
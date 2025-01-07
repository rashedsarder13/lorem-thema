import { themes } from './themes';

export function generateLoremThema(theme: string, wordCount: number = 50): string {
  // Check if the theme exists
  if (!themes[theme]) {
    throw new Error(`Theme "${theme}" not found. Available themes: ${Object.keys(themes).join(', ')}`);
  }

  const words = themes[theme];
  const result: string[] = [];
  let totalWordCount = 0;

  // Generate words until we reach exactly the requested word count
  while (totalWordCount < wordCount) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const wordParts = randomWord.split(/\s+/); // Split multi-word entries into parts
    const remainingWords = wordCount - totalWordCount;

    if (wordParts.length <= remainingWords) {
      // Add the entire multi-word entry if it fits
      result.push(randomWord);
      totalWordCount += wordParts.length;
    } else {
      // Add only the required number of words from the multi-word entry
      result.push(wordParts.slice(0, remainingWords).join(' '));
      totalWordCount = wordCount; // We've reached the exact count
    }
  }

  return result.join(' ');
}

export function getAvailableThemes(): string[] {
  return Object.keys(themes);
}
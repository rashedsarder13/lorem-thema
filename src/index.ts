import { themes } from './themes';

export function generateLoremThema(theme: string, wordCount: number = 50): string {
  if (!themes[theme]) {
    throw new Error(`Theme "${theme}" not found. Available themes: ${Object.keys(themes).join(', ')}`);
  }

  const words = themes[theme];
  let result = '';

  for (let i = 0; i < wordCount; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    result += randomWord + ' ';
  }

  return result.trim();
}

export function getAvailableThemes(): string[] {
  return Object.keys(themes);
}
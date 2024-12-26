import { generateLoremThema, getAvailableThemes } from './index';

console.log('Available themes:', getAvailableThemes());

console.log('\nSpace theme (50 words):');
console.log(generateLoremThema('space'));

console.log('\nFood theme (20 words):');
console.log(generateLoremThema('food', 20));

console.log('\nTechnology theme (30 words):');
console.log(generateLoremThema('technology', 30));

console.log('\nNature theme (40 words):');
console.log(generateLoremThema('nature', 40));
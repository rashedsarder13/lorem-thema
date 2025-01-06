
# Lorem Thema

Lorem Thema is a customizable lorem ipsum generator that produces placeholder text based on unique themes. Instead of random gibberish, you can create meaningful, themed placeholder text for your projects.

## Features

- Generate lorem ipsum-style text based on themes like `space`, `food`, `technology`, `nature`,
`countries`, `currencies`, `colors`, `birds`, `fruits`, `flowers`, `fish`, `electronics`, and `goodComments`
- Specify the number of words you need. (Max 100 words)
- Easy-to-use API with TypeScript support.

## Installation

Install the package via npm:

```bash
npm install lorem-thema
```

## Usage

Here's an example of how to use the **Lorem Thema** package:

```typescript
import { generateLoremThema, getAvailableThemes } from 'lorem-thema';

// Generate themed lorem ipsum text
const theme = 'goodComments'; // Choose a theme: `space`, `food`, `technology`, `nature`,`countries`, `currencies`, `colors`, `birds`, `fruits`, `flowers`, `fish`, `electronics`, and `goodComments`
const wordCount = 10;  // Specify the number of words you need

const loremText = generateLoremThema(theme, wordCount);
console.log('Generated Lorem Thema Text:', loremText);

// Get available themes
const themes = getAvailableThemes();
console.log('Available Themes:', themes);
```

For more details, visit the [GitHub repository](https://github.com/rashedsarder13/lorem-thema).

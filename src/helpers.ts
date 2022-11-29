import { convert } from 'html-to-text';

export interface RutInfo {
  rut: string;
  fullName: string;
}

export const extractData = (html: string): RutInfo | null => {
  const text = convert(html, {
    baseElements: {
      selectors: ['div[style*="float:left;line-height:18px; width:780px; text-align:justify"i]'],
    },
  }).split('\n');

  if (text.length > 2) {
    return null;
  }

  return {
    fullName: text[0],
    rut: text[1],
  };
};

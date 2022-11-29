import { convert } from 'html-to-text';

export interface RutInfo {
  rut: string;
  fullName: string;
}

export interface Rut {
  documentNumber: number;
  verifier: string;
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

function calculate(rut: number): string {
  const documentNumber = `${rut}`;

  let counter = 0;
  let multiply = 2;

  for (let i = 1; i <= documentNumber.length; i++) {
    counter += parseInt(documentNumber.charAt(documentNumber.length - i), 10) * multiply;
    multiply = multiply === 7 ? 2 : multiply + 1;
  }

  const moduleValue = 11 - (counter % 11);
  if (moduleValue === 10) return 'K';
  if (moduleValue === 11) return '0';
  return `${moduleValue}`.toUpperCase();
}

export const validateDocument = (rut: Rut): boolean => {
  if (!rut || `${rut.documentNumber}-${rut.verifier}`.trim().length < 3) return false;
  const digitCalculated = calculate(rut.documentNumber);
  return digitCalculated === rut.verifier;
};

export const destructureRUT = (rut: string): Rut => {
  const newDocument = rut.replace(/[^0-9kK-]/g, '').toLowerCase();
  const split = newDocument.split('-');
  return {
    documentNumber: parseInt(split[0], 10),
    verifier: split[1].toUpperCase(),
  };
};

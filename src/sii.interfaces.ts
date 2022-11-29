export interface FormSII {
  RUT: number;
  DV: number;
  PRG?: 'STC' | string;
  OPC?: 'NOR' | string;
  CAPTCHA: string;
  CODE: string;
}
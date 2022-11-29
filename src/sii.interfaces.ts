export interface FormSII {
  RUT: number;
  DV: string;
  PRG?: 'STC' | string;
  OPC?: 'NOR' | string;
  CAPTCHA: string;
  CODE: string;
}
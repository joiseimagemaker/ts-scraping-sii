import axios, { AxiosResponse } from 'axios';
import constants from './constants';
import { FormSII } from './sii.interfaces';

export interface CaptchaData {
  captcha: string;
  code: string;
}

export const getCaptcha = async (): Promise<CaptchaData> => {
  const captcha = await axios({
    method: 'GET',
    url: constants.URL_CAPTCHA,
  }).then((response) => {
    return response.data?.txtCaptcha;
  });

  return {
    captcha,
    code: atob(captcha).substring(36, 40)
  };
};

export const sendFormSII = async (form: FormSII): Promise<AxiosResponse> => {
  return axios({
    method: 'POST',
    url: constants.URL_FORM_SII,
    data: {
      RUT: form.RUT,
      DV: form.DV,
      PRG: form.PRG,
      OPC: form.OPC,
      txt_captcha: form.CAPTCHA,
      txt_code: form.CODE,
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
};

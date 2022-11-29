import { CaptchaData, getCaptcha, sendFormSII } from './sii.repository';
import { FormSII } from './sii.interfaces';
import { extractData, RutInfo } from './helpers';
// import { html } from '../mock';

const main = async () => {
  const captcha: CaptchaData = await getCaptcha();

  const data: FormSII = {
    RUT: 16480627,
    DV: 8,
    CAPTCHA: captcha.captcha,
    CODE: captcha.code,
    OPC: 'NOR',
    PRG: 'STC',
  };

  const response = await sendFormSII(data);

  const rutInfo: RutInfo | null = extractData(response.data);

  if (!rutInfo) {
    return {
      status: 'error',
      message: `No ha sido posible completar su solicitud. Esto debido a que el Rut ${data.RUT}-${data.DV} no existe en las Bases de Datos del Servicio.`,
      data: null,
    };
  }

  return {
    status: 'success',
    message: `Rut ${data.RUT}-${data.DV} encontrado.`,
    data: rutInfo,
  };
};

main();

import { CaptchaData, getCaptcha, sendFormSII } from './sii.repository';
import { FormSII } from './sii.interfaces';
import { destructureRUT, extractData, Rut, RutInfo, validateDocument } from './helpers';
// import { html } from '../mock';

const main = async (rut: string) => {
  const rutClean: Rut = destructureRUT(rut);

  const isValid: boolean = validateDocument(rutClean);

  if (!isValid) {
    return {
      status: 'error',
      message: `Rut inválido: ${rut}`,
      data: null,
    };
  }

  const captcha: CaptchaData = await getCaptcha();

  const data: FormSII = {
    RUT: rutClean.documentNumber,
    DV: rutClean.verifier,
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

main('16480627-8').then((response) => {
  console.log(response);
});

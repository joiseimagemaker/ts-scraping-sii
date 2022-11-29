export const html = `<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<title>Consultar Situaci&oacute;n Tributaria de Terceros</title>

<head>
  <link href='https://zeus.sii.cl/admin/css/master_sii.css' rel='stylesheet' type='text/css' />
  <script type='text/javascript' src='https://zeus.sii.cl/admin/barranav.js'></script>
  <STYLE TYPE="text/css">
    .titulo {
      font-family: arial, helvetica, sans-serif;
      font-style: bold;
      font-size: 18px;
      text-decoration: none;
      color: #000000;
    }

    .texto {
      font-family: arial, helvetica;
      font-style: normal;
      font-size: 10pt;
      text-decoration: none;
      color: #000000;
    }

    .reporte {
      font-family: arial, helvetica;
      font-style: normal;
      font-size: 7.5pt;
      text-decoration: none;
      color: #000000;
    }
  </STYLE>
  <script type="text/javascript">
    <!--
    function volver(pagina)
    {
      history.go(-pagina);
    }
    //-->
  </script>
  <script type="text/javascript" src="/cvc/comun/validacomun.js">
  </script>
</head>

<body link="#003399">
  <div id='contenedor'>
    <div id='barra_sup'>
      <div>
        <script
          type='text/javascript'>/* <![CDATA[ */ mostrar(0, '0,215, Consultar situaci�n tributaria de terceros'); /* ]]> */</script>
      </div>
    </div>
    <div id='titulo'>
      <h1>CONSULTAR SITUACI�N TRIBUTARIA DE TERCEROS</h1><br /> A trav�s de esta opci�n, el SII proporciona informaci�n
      a los contribuyentes respecto de su situaci�n tributaria, de manera que tomen conocimiento del estado en que se
      encuentran, al momento de realizar la consulta, y las situaciones que deben ser solucionadas. Junto con lo
      anterior, permite alertar a aquellas personas que efect�an operaciones con contribuyentes de comportamiento
      tributario irregular. <br />
    </div>
    <div style='float:left; width:170px;line-height:18px;'><strong>Nombre o Raz&oacute;n Social&nbsp;:</strong></div>
    <div style='float:left;line-height:18px; width:780px; text-align:justify'>CRISTINA ISABEL LOPEZ CANTILLANA </div>
    <br>
    <div style='float:left; width:170px;line-height:18px;'><b>RUT Contribuyente&nbsp;:</b><br></div>
    <div style='float:left;line-height:18px; width:780px; text-align:justify'>16480627-8</div><br>
    <div style='clear:both'></div><span style='line-height:18px;'><br>Fecha de realizaci&oacute;n de la consulta:
      29-11-2022 17:21 hrs
    </span><br><span style='line-height:18px;'>Contribuyente presenta Inicio de Actividades: NO</span><br><span
      style='line-height:18px;'>Contribuyente autorizado para declarar y pagar sus impuestos en moneda extranjera: NO
    </span><br><span style='line-height:18px;'>Contribuyente es Empresa de Menor Tama&ntilde;o (seg&uacute;n Ley
      N&deg;20.416) <span style='font-size:11pt;color:blue;'>*</span>: NO
    </span><br><span style='font-size:8pt;color:blue;'><br>(*)</span><span style='font-size:7pt;color:black;'> Las
      empresas de menor tama&ntilde;o, seg&uacute;n la Ley N&deg; 20.416 del Ministerio de Econom&iacute;a, Fomento y
      Turismo, se clasifican en funci&oacute;n de sus ingresos anuales por ventas y servicios y otras actividades del
      giro en el &uacute;ltimo a&ntilde;o calendario, en micro empresas (hasta 2.400 UF); peque&ntilde;as empresas
      (desde 2.401 y 25.000 UF); y medianas empresas (desde 25.001 y 100.000 UF).<br></span><br>
    <div style='float:left; width:105px;'><strong>Observaci&oacute;n:</strong></div>
    <div style='float:left; width:845px; text-align:justify'><strong>Recomendaci&oacute;n General</strong></br>Como
      recomendaci&oacute;n general, siempre que se realicen transacciones comerciales con cualquier contribuyente, el
      SII aconseja verificar, en las opciones anteriores habilitadas, el timbraje del documento y que la actividad
      econ&oacute;mica est&eacute; vigente en las bases de datos del Servicio. Adem&aacute;s, se recomienda verificar
      que el domicilio y la actividad econ&oacute;mica consignados en la factura o boleta que reciba, correspondan al
      vendedor o prestador del servicio ofrecido. <br><br>Para un mayor resguardo, se recomienda efectuar el pago con
      cheque nominativo o vale vista a favor del proveedor, anotando al reverso el RUT del emisor y n&uacute;mero del
      documento recibido.<br>&nbsp;</div><br><b>Si el contribuyente correspondiente al RUT consultado, no est&aacute; de
      acuerdo o desconoce la situaci&oacute;n informada en esta consulta, deber&aacute; concurrir a la unidad del SII
      correspondiente a su domicilio para aclarar o resolver su situaci&oacute;n</b>.<br><b><br>Esta consulta no
      constituye una certificaci&oacute;n del comportamiento tributario del contribuyente. De esta manera, si para un
      RUT no aparecen observaciones, no significa que en una posterior auditor&iacute;a no se detecten
      problemas.<br></b><br><b></b>
    <center>
      <form name="form2" method="post" action="">
        <input name="consulta" type="button" value="Consultar otro Contribuyente"
          onClick="location.href='/cvc/stc/stc.html';">
      </form>
    </center>
    <br><br></center>
    <div id="certifica" style="position:absolute; width:0; height:0; z-index:6;top: 0; left: 0; visibility: hidden">
      <script type="text/javascript" src="/admin/certifica_iva.js"></script>
      <script type="text/javascript">
        certifica(14444, 'SITTRIB', 'TribTerc');
      </script>
    </div>
    <div id='piePagina'>
      <script type='text/javascript'>mostrarPie()</script>
    </div>
  </div>
</body>

</html>`;
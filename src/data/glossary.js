export const glossary = [
  // "Glosario ESP": [
  {
    letter: 3,
    word: "3DS 1.0",
    definition: "Acrónimo de Three-Domain Secure, un protocolo de comunicación antifraude desarrollado por Visa y hoy utilizado por otras marcas internacionales de tarjetas de débito y crédito para pagos no presenciales.  \n\nCuando el cliente realiza una transacción, el banco emisor solicita, además del CVV, al menos un dato de autenticación como:\n\nClave de un solo uso, o One Time Password (OTP)\n\nCódigo enviado por SMS\n\nContraseña\n",
    // NOTA IMPORTANTE: "Detekta plus es una versión complementaria del servicio de <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3008954452\/Detekta+servicio+de+Certifikado?src=search \">Detekta<\/a>, el cual, además de generar un análisis diagnóstico detallado de la situación jurídica de un inmueble conocido como <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3008954452 \">Certificado de Estado Jurídico<\/a>, también ofrece un certificado con la calificación o score de las líneas de crédito, así como un certificado del histórico de tradentes y clientes para los inmuebles. \n\nNota: al igual que para la solicitud del servicio básico de Detekta, Detekta plus requiere de un número de ticket de un <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3006726308\/Certificado+de+Tradici+n+y+Libertad+CTL \">Certificado de Tradición y Libertad<\/> o CTL comprado previamente o adquirido en combo. \n"
  },
  {
    letter: 3,
    word: "3DS 2.0",
    definition: "Para mejorar el protocolo 3DS 1.0,  EMVCo lanzó en 2016 el protocolo 3DS 2.0, con miras a mantener un sano equilibrio entre tasa de aceptación de transacciones y riesgo bajo de fraude. \n\nEn el protocolo 3DS 2.0 se envía a evaluación más información contextual del cliente pagado y solo se pide una autentificación cuando exista un alto riesgo de fraude. A diferencia del protocolo anterior, no hay una redirección al pagador a una página externa.\n\nEn esta versión, a diferencia de la versión anterior, los emisores pueden personalizar sus reglas de autenticación y tener criterios de aceptación diferentes para cada tipo de cuenta.\n\n\nEn Kushki estamos implementando Cybersource como proveedor de validación 3DS 1.0 y 2.0, dependiendo de la versión implementada por el emisor.\n\n"
  },
  {
    letter: "A",
    word: "ACH Colombia",
    definition: "Es una empresa proveedora de servicios de pago en Colombia . La conforman al menos 35 entidades financieras y está regulada por la Superintendencia Financiera de Colombia. El servicio establecido entre ACH Colombia y Kushki es el de transferencias interbancarias (transfer in y transfer out). Para más información, visita <a href=\"https:\/\/www.achcolombia.com.co\/home\">este<\/a> enlace."
  },
  {
    letter: "A",
    word: "Actualizador Automático de Facturación",
    definition: "Este servicio no es soportado por Kushki actualmente\n\nTambién conocido en inglés como Automatic Billing Updater (ABU). Es un servicio que ofrecen los emisores de las tarjetas a los comercios con la finalidad de reducir las transacciones declinadas de los clientes (tarjetahabientes) del comercio. \n\nABU se utiliza cuando un cliente da de alta un pago recurrente a un comercio con su tarjeta de débito o crédito. Al cabo de un tiempo es posible que los datos de la tarjeta del cliente, como la fecha de expiración, sean modificados. Si el cliente no notifica al comercio el cambio en la información causaría que la próxima transacción fuera declinada. El servicio ABU se encarga de actualizar la información al comercio para evitar que la próxima transacción sea declinada."
  },
  {
    letter: "A",
    word: "Acuerdo de nivel de servicio",
    definition: "Conocido en inglés como Service Level Agreement (SLA). Es un contrato entre el cliente y el proveedor de un servicio en donde se establecen todos los acuerdos del servicio que se va a brindar, incluyendo las métricas, el alcance y las limitaciones del mismo. Es importante considerar los posibles riesgos que pudieran presentarse y las penalizaciones por el incumplimiento de los compromisos, así como las responsabilidades de cada lado del acuerdo. El SLA se puede revisar y actualizar periódicamente según las necesidades del cliente y el proveedor, siempre llegando a un acuerdo y autorización de ambas partes."
  },
  {
    letter: "A",
    word: "Adquirente",
    definition: "Es un banco o institución financiera autorizada por las franquicias internacionales– tales como Diners, Mastercard o Visa–, para procesar las tarjetas de crédito y débito que se utilicen en un país. \n\nSe encarga de realizar las afiliaciones y relaciones comerciales con los establecimientos que quieran vender online u offline y recibir pagos con tarjeta de crédito o débito, a través de la administración de las mismas."
  },
  {
    letter: "A",
    word: "Aggregator",
    definition: "Es una figura dentro del ecosistema de pagos de cada país que provee los servicios e infraestructura tecnológica necesaria a un comercio para que pueda aceptar pagos con tarjeta. El agregador procesa, en representación de un adquirente, el pago con tarjetas en modelos presente y no presente; este proceso se conoce como Modelo de agregador.\n\nEl modelo agregador ofrece más seguridad a los clientes de un comercio por sus estrategias para evitar fraudes o movimientos sospechosos. Además, gestiona y eficientiza los procesos de apertura de cuentas para los comercios y mejora los tiempos en procesos de contracargos y reembolsos."
  },
  {
    letter: "A",
    word: "Anulación",
    definition: "Es la acción por la que se anula un cargo exitoso. En Kushki este proceso es automático si se realiza antes de la hora de corte, la cual varía por país.\n\nChile  :flag_cl:\n\nColombia :flag_co: \n\nEcuador :flag_ec: \n\nMéxico :flag_mx: \n\nPerú :flag_pe: \n\nHasta 3 horas después de aprobada la transacción.\n\n20:59 horas del día de la transacción.\n\n21:00 horas del día de la transacción.\n\n23:59 horas del día de la transacción.\n\nDepende del agregador local; puede ser a las 20:59 o a las 23:00 horas.\n\nSi la anulación ocurre después de esa hora, el proceso se convierte en un reembolso o refund. Aprende más sobre las anulaciones aquí."
  },
  {
    letter: "A",
    word: "Answered Surveys",
    definition: "Es un tipo de encuesta de satisfacción al cliente para determinar el puntaje CSAT y así poder evaluar las necesidades del cliente. Dependiendo de la encuesta a desarrollar para la métrica, se pueden evaluar las acciones para mejorar la satisfacción del cliente. Es una forma rápida de contactar con el cliente, además, se pueden realizar en cualquier momento del proceso del producto o servicio.  \n\nSe tiene los siguientes tipos de preguntas:\n\nPreguntas con escala de Likert: llevan al cliente a decidir entre dos opciones extremas (es decir, satisfecho o insatisfecho).\n\nPreguntas binarias: preguntas con respuestas rápidas de sí o no (equivalentes a verdadero o falso)\n\nPreguntas con respuesta múltiple: preguntas con más información de respuesta, dando más alternativas al cliente.\n\nPreguntas de final abierto: respuestas propias de los clientes.   \n\nA su vez, pueden existir preguntas de frecuencia de uso, como alternativa de encuesta.  "
  },
  {
    letter: "A",
    word: "Aplicación",
    definition: "Programa que provee funciones requeridas por un servicio de TI. Cada aplicación podría ser parte de más de un servicio de TI. Una aplicación se puede ejecutar en uno o más servidores o clientes. \n\nVéase también Gestión de aplicaciones  y Portafolio de aplicaciones ."
  },
  {
    letter: "A",
    word: "Apple Pay",
    definition: "Es un servicio de pago digital, diseñada para sustituir el uso de las tarjetas físicas y poder realizar pagos en línea e incluso en terminales de tiendas físicas y cajeros automáticos que cuente con tecnología Contactless, se puede usar nacional e internacional.\n\n La forma en que se utiliza, es mediante una aplicación o navegador Safari, donde debes generar una cuenta y registrar tus tarjetas bancarias compatibles. Con la configuración anterior se pueden efectuar pagos al aproximar el dispositivo con la terminal bancaria, esto debido a la tecnología NFC. La autenticación de la transacción se puede efectuar mediante Touch ID, Face ID, PIN o contraseña. Apple Pay únicamente está disponible para los dispositivos de la marca Apple."
  },
  {
    letter: "A",
    word: "Arquitectura",
    definition: "La estructura de un sistema o un servicio TI, incluyendo las relaciones de sus componentes y del entorno en el que se encuentran. La arquitectura también incluye los estándares y las guías que dirigen el diseño y evolución del sistema."
  },
  {
    letter: "A",
    word: "Atributo",
    definition: "Una parte de información de un elemento de configuración. Ejemplos: nombre, ubicación, versión, número y coste. Los atributos de un CIs se registran en una base de datos de la configuración (CMDB) y se mantienen como parte de un sistema de gestión de la configuración."
  },
  {
    letter: "A",
    word: "Autenticación Estricta del Cliente",
    definition: "También conocido en inglés como Strong Customer Authentication (SCA). Es una autenticación de dos o más elementos independientes, categorizados en:\n\nConocimiento: algo que solo el usuario conozca o sepa, por ejemplo, una contraseña única o una pregunta personal.\n\nPosesión: algo que solo el usuario posea. Un ejemplo que se usa comúnmente, es el teléfono móvil.\n\n​​Inherencia: algo que el usuario es, por ejemplo, una huella digital o reconocimiento facial. \nNota: el SCA es obligatorio bajo el PSD2, el cual busca aumentar la seguridad de los pagos y transacciones bancarias en línea. \n\n"
  },
  {
    letter: "A",
    word: "Autorización",
    definition: "El proceso en el que el emisor de la tarjeta –AMEX, Diners, Mastercard o Visa– verifica los detalles del pago y reserva los fondos de la cuenta para capturarlos más tarde, como cuando se realiza una reservación en hoteles o en los procesos de arrendamiento de autos.\n\nLa autorización tiene un tiempo de vida limitado; en caso de que un pago autorizado no haya sido capturado o cancelado durante este tiempo, la autorización expira."
  },
  {
    letter: "A",
    word: "Autorización y captura",
    definition: "También conocido como reserva de fondos, check-in\/check-out, o pago en dos pasos. \n\nPermite a los comercios verificar la disponibilidad de fondos de una tarjeta y capturar o debitar los fondos posteriormente. \n\nEn Chile :flag_cl: y Perú :flag_pe: el tiempo máximo permitido para realizar una captura es 7 días luego de la autorización.\n\nEn México :flag_mx:  el tiempo máximo permitido para realizar una captura es 30 días luego de la autorización.\nSinónimos: preautorización y captura, check-in\/check-out, pago en dos pasos.\n\n"
  },
  {
    letter: "A",
    word: "Azure",
    definition: "Es el conjunto de productos de Microsoft diseñado para resolver y administrar necesidades de almacenamiento, procesamiento y análisis de información mediante servicios de cómputo en la nube. Azure cuenta con más de 200 herramientas, algunas de sus categorías son: seguridad, redes, realidad mixta, multimedia, migración, internet de las cosas, identidad, DevOps, herramientas para desarrolladores, almacenamiento y análisis.  \n\nEn Kushki utilizamos My Access, que es uno de los servicios de Azure, para iniciar sesión en la consola interna. Una gran ventaja de este servicio es que permite la gestión de permisos generando paquetes de acceso y provee un mayor nivel de seguridad utilizando doble autenticación."
  },
  {
    letter: "B",
    word: "Back-end",
    definition: "En el desarrollo web, es la parte que se comunica con los servidores y bases de datos, a través de lenguajes de programación, y no es visible por los usuarios del software.\n\nDesde el back-end se llevan a cabo acciones fundamentales para el funcionamiento de cualquier página o aplicativo, tales como:\n\nEjecución de acciones lógicas.\n\nEjecución de funciones.\n\nGestión de seguridad.\n\nCarga y descarga de imágenes.\n\nConexión con bases de datos.\n\nConsumo de APIs.\n\nUso de librerías del servidor web.\n\nOptimización de recursos."
  },
  {
    letter: "B",
    word: "Backlog",
    definition: "Se refiere a la sección o apartado dentro de, ya sea una consola de trabajo o un programa gestor de tareas, tal como Jira o Asana, en el que se “alamacenan” y enlistan, mediante criterios de prioridad, todas aquellas tareas, actividades o work items que deben ser completados por un equipo de trabajo como parte de la planeación estratégica del proceso de desarrollo de un producto. "
  },
  {
    letter: "B",
    word: "Benchmark",
    definition: "Es una herramienta estratégica donde se realiza el análisis de los productos, servicios y procesos internos de las empresas líderes y se comparan con los establecidos en tu empresa. Con esta información puedes tener una referencia para implementar las mejoras de los procesos o productos de tu compañía.\n\nPara consultar el Benchmark de nuestra competencia, haz click aquí."
  },
  {
    letter: "B",
    word: "Botón de pagos",
    definition: "Es una solución de pagos de Kushki en la cual el comercio redirecciona a su cliente hacia una experiencia de pagos controlada por Kushki. La ventaja del Botón de pagos es que permite que los comercios puedan recibir pagos con una mínima integración.\n\nSinónimos: Webcheckout"
  },
  {
    letter: "B",
    word: "Breaking Change",
    definition: "Es un cambio en el código de alguno de los productos, para el cual es necesario lanzar una nueva versión. Este tipo de cambios implican que el cliente realice actualizaciones en su código de integración para seguir operando. Cuando se efectúan este tipo de cambios se notifica al cliente al menos 4 meses previo a su lanzamiento a producción con la finalidad de que el cliente esté listo. \n\nAlgunos ejemplos de cambios que producen un breaking change son:\n\nCambiar los permisos existentes.\n\nRemover un parámetro, campo de respuesta o de petición previamente permitido.\n\nAgregar un nuevo parámetro o campo de petición que sea requerido y que no tendrá valores por defecto. Esto podría cambiar la interacción al llamar a una función, ya que al no poseer el número de campos necesarios en la petición no obtendremos respuesta o tendremos un error como respuesta.\n\nCambiar a la funcionalidad final de un endpoint.\n\nAgregar una nueva validación.\n\nRemover o renombrar un endpoint, campo o valor enum.\n\nCambiar el tipo de un campo.\n\nCambiar el formato del URL en la definition del HTTP.\n\nCambiar a un campo opcional a que sea requerido en la petición.\n\nEn contraste los non breaking change son cambios que se pueden presentar sin previa notificación y cuyo consumidor debe soportarlo por defecto. Algunos ejemplos de estos cambios son:\n\nAgregar un nuevo endpoint.\n\nAgregar un nuevo método a un endpoint existente.\n\nAgregar nuevos campos en los próximos escenarios:\n\nNuevos campos en respuestas.\n\nNuevo campo de petición o parámetros opcionales.\n\nNuevo campo de petición requerido que tendrá valores por defecto.\n\nAgregar un nuevo valor devuelto por un campo de texto existente.\n\nCambiar el orden en que los campos de respuesta son retornados.\n\nAgregar un header de petición opcional.\n\nRemover campos redundantes del header.\n\nCambiar la longitud de la información devuelta por un campo.\n\nCambiar el tamaño promedio de la respuesta.\n\nCambiar los mensajes de error. (No se debería leer el mensaje de error directamente en la integración, sino leer de los códigos de respuesta o error).\n\nCambiar los códigos de respuesta o de error pasando de un valor incorrecto a correcto.\n\nAñadir un nuevo valor a un enum."
  },
  {
    letter: "B",
    word: "Branch",
    definition: "Las branches (ramas) se identifican como una categoría de sucursal, es decir, son comercios secundarios que están subordinados a un comercio principal. Es el tercer nivel transaccional de la nueva estructura jerárquica de la consola 3.0 (owners > customers > branches) y es en este nivel donde se crean las credenciales respectivas.\n\nLas branches pueden ser de dos tipos: \n\nBranch centralizada\nEs aquella que hereda los datos configurados por el comercio padre (customer), esto es, no puede modificar la información desde su nivel. Por lo tanto tendrá la misma información que configure el customer. \n\nBranch descentralizada\nEs aquella que no hereda los datos configurados del comercio padre (customer), pues pueden configurar su  propia información. "
  },
  {
    letter: "C",
    word: "Cámara de Comercio",
    definition: "“Una cámara de comercio es una asociación o red de empresarios destinada a promover y proteger los intereses de sus miembros.” (1). Por lo general, una cámara de comercio corresponde a  la unión de varios propietarios de negocios que se unen bajo un liderazgo para poder debatir sobre políticas que defienden o las cuales están en contra, promover la competitividad y la formalización, además de impulsar el desarrollo de la región.\n\nLas cámaras de comercio no tienen un papel directo en la creación de leyes ni en los reglamentos del país en donde se encuentran,  pero sí ejercen presión sobre los legisladores con sus esfuerzos organizados.\n\nFuente:\n\nHayes, A. Chamber of Commerce: What it is, what it does, how it makes money. Investopedia. Chamber of Commerce: What It Is, What It Does, How It Makes Money . (Estrella, A, Trans.)(Trabajo original publicado el 2 de noviembre de 2022)."
  },
  {
    letter: "C",
    word: "Cámara de Compensación Automatizada\n\n",
    definition: "También conocido en inglés como Automated Clearing House (ACH) es un sistema que procesa transacciones a través del uso de una red electrónica digital. Es considerado uno de los sistemas de pago más grandes a nivel mundial ya que, en su mayoría, las transacciones realizadas por medio de este sistema corresponden a lotes de pagos de bajo valor, cuyas tarifas son económicas y con los que se pueden realizar múltiples transacciones al mismo tiempo. \n\nEste sistema garantiza la seguridad y velocidad de las transacciones realizadas, a través del ofrecimiento de una variedad de servicios, tales como: transferencias de crédito, depósitos directos, nóminas, devolución de impuestos, facturas, pago de impuestos, entre otros servicios."
  },
  {
    letter: "C",
    word: "Cancelación de un cargo"
  }, {
    letter: "C",
    word: "Captación",
    definition: "Es la recolecta de dinero que efectúan las instituciones financieras, a partir de los recursos que las personas u organizaciones resguardan en la institución. Dependiendo del tipo de cuenta que tenga el cliente, es probable que se le asigne un porcentaje de interés a favor, como beneficio por resguardar su dinero en la institución. Las instituciones financieras otorgan este tipo de recompensa, debido a que les interesa colocar el dinero captado. \n\nNota: no se recomienda el uso de este término, debido a que en Ecuador :flag_ec: y Colombia :flag_co: se asocia al delito “captación de recurso”."
  },
  {
    letter: "C",
    word: "Captura",
    definition: "Es un pago ya autorizado por el procesador de pagos. Los fondos reservados se transfieren del comprador al comerciante. \n\nKushki permite la captura diferida o la captura automática. También es posible realizar una captura parcial o cancelar un pago. Las capturas, cancelaciones y reembolsos juntos se llaman modificaciones, ya que modifican el estado de una solicitud de pago autorizada. \n\n\nSinónimos: compensación y liquidación.\n"
  },
  {
    letter: "C",
    word: "Card not present (CNP)\n\n",
    definition: "Es una transacción en la que ni el cliente ni su tarjeta están presentes físicamente.\n\nEl proceso funciona así:\n\nEl cliente coloca el número de su tarjeta, la fecha de vencimiento y el CVV y la pasarela de pagos las procesa para generar un token. \n\nEl token es enviado al adquirente, se verifica por parte del emisor de la tarjeta y lo autentica el banco que la expide.\n\nEl comercio recibe una notificación que indica si el proceso de pago fue exitoso o se declinó.\n"
  },
  {
    letter: "C",
    word: "Card Verification Value (CVV)\n",
    definition: "Es el código único de verificación de una tarjeta de crédito o débito, y se emplea para validar su posesión. Costa de 3 a 4 dígitos. Tiene distintas denominaciones: CVD (Card Verification Data), CCV (Card Code Verification), CVN (Card Verification Number), CSC (Card Security Code), CVVC (Card Verification Value Code), pero todas se refieren al mismo tipo de código. \n\nUn CVV es importante porque evita fraudes y permite realizar compras más seguras por internet, pues con este se puede verificar que, en efecto, quien hace la compra es el poseedor de la tarjeta.\n\nSinónimos: Criptograma visual, CSC.\n<img src=\"blob:https:\/\/kushki.atlassian.net\/79d06d64-c070-40dc-bcec-a1d152cd4734#media-blob-url=true&id=35b21f4f-4bff-49f2-a143-3ad0a0bf3fd6&collection=contentId-2651979949&contextId=2651979949&height=398&width=560&alt=\"><\/img>\n\nLos CVVs pueden ser de dos tipos:\n\nEstáticos:  algunos tipos de tarjeta, como VISA y Mastercard, el CVV se encuentra al respaldo, y consta de tres dígitos, mientras que en otros, como la American Express, se ubica en la parte frontal de la tarjeta y contiene cuatro dígitos.\n\nDinámicos: no están impresos en la tarjeta física. En estos casos, el CVV es cambiante y se consulta a través de una aplicación desarrollada por el emisor de la tarjeta."
  },
  {
    letter: "C",
    word: "Cargo",
    definition: "Es el proceso que permite realizar una transacción de cobro al cliente. Implica la salida de fondos desde su cuenta para el pago de un producto o servicio."
  },
  {
    letter: "C",
    word: "Cargos recurrentes\n",
    definition: "Es un tipo de cargo en el cual el comprador autoriza que el comercio retire fondos de su tarjeta de forma automática, también conocidos como One-Click Charges, a cambio de ciertos bienes o servicios.\n\nNota: en Kushki, el cargo recurrente pasa previamente por un proceso de tokenización.\n\nLos cargos recurrentes pueden ser de dos tipos:\n<a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2651193540\">Cargos Calendarizados<\/a> \n<a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2652012560\">Cargos One Click<\/a>\n\n"
  },
  {
    letter: "C",
    word: "Cargos Calendarizados\n",
    definition: "Una vez el comprador acepte un cargo recurrente, los retiros se realizarán de forma automática en su cuenta en los intervalos acordados, hasta que el comprador decida cancelar el servicio. Para ello, suele existir un esquema que define las fechas y el monto de los pagos a realizarse.\n\nLos cobros calendarizados en Kushki funcionan así:\n\nEl comercio captura la información de la tarjeta y la envía a Kushki para su tokenización. En este paso se define la frecuencia del cobro y si este será abierto o por un período definido.\n\nKushki tokeniza la información y crea un cargo recurrente identificado por un ID de suscripción.\n\nLos cobros se realizan de forma automática con la periodicidad definida."
  },
  {
    letter: "C",
    word: "Cargos One Click\n",
    definition: "La información del tarjetahabiente se autentica la primera vez y luego se tokeniza para compras futuras, de forma tal que el comprador puede adquirir bienes o servicios sin necesidad de ingresar sus datos nuevamente ya que puede pagar con la información previamente guardada, a través de un solo clic. \n\nEsta forma de procesamiento puede ser gatillada por el comercio o por el tarjetahabiente. Más información aquí.\n<a href=\"https:\/\/docs.kushki.com\/mx\/one-time-payments\/card\/on-demand\">aquí<\/a>\nSinónimo: cargos bajo demanda.\n\n"
  },
  {
    letter: "C",
    word: "CasesystemId",
    definition: "Se refiere al identificador único de las personas consultadas en el proceso de validación de World Check One (WC1). Este dato es proporcionado por la herramienta Refinitiv. "
  },
  {
    letter: "C",
    word: "Cashback",
    definition: "Es la word con la que se conoce a la función de realizar un retiro en efectivo desde un establecimiento no bancario autorizado, en lugar de hacerlo en un cajero automático o en ventanilla bancaria.\n\nUn ejemplo de cashback, es cuando haces tus compras en el supermercado. Al momento de efectuar el pago de tu mercancía, muchos establecimientos te dan la opción de solicitar un retiro de dinero. La cantidad que solicites se suma al monto total a pagar y el cajero al momento que proceder con el cobro te da el efectivo solicitado.\n"
  },
  {
    letter: "C",
    word: "Cash in (Recepción de pagos en efectivo)\n",
    definition: "También conocido como Recepción de pagos en efectivo. Es la opción que ofrece Kushki para aceptar pagos de usuarios que prefieren hacer pagos en efectivo. \n\nLos clientes solo deben contar con la referencia de pago, acudir a algún punto de recaudo y depositar el efectivo. El comercio de recaudo notifica automáticamente a Kushki y Kushki a su cliente, para que entregue el bien o servicio al cliente final. Conoce más información aquí.\n<a href=\"https:\/\/docs.kushki.com\/mx\/en\/one-time-payments\/cash\/overview\">aquí<\/a>"
  },
  {
    letter: "C",
    word: "Cash out (Retiro de efectivo)\n",
    definition: "Kushki también permite a sus clientes en Colombia :flag_co: realizar pagos a terceros ya sea en efectivo o a través de transferencias (Transfer out).\n\nA través de la API, Kushki tokeniza la información del usuario (nombre y apellidos) y genera un comprobante, con el que el cliente final acude al punto de pago más cercano a su ubicación , muestra el comprobante y retira su dinero en efectivo, a este proceso de retiro de efectivo se le conoce como cash out.\n\nPara conocer el estado de esta transacción de cash out, el merchant puede configurar un <a href=\"https:\/\/docs.kushki.com\/co\/notifications\/webhooks\/webhook-cash-out>\"webhook<\/a>  o consultarlo a través de este <a href=\"https:\/\/api-docs.kushkipagos.com\/api\/cash-out\/cashoutstatus\">método API<\/a>.\n"
  },
  {
    letter: "C",
    word: "Catálogo de servicios\n",
    definition: "Base de datos o documento estructurado con información sobre todos los servicios de TI en producción, incluye los servicios que están disponibles para su implementación. \n\nEl catálogo de servicios es parte del porfolio de servicios y contiene información sobre dos tipos de servicios de TI: los servicios de cara al cliente que son visibles para el negocio y servicios de apoyo que son requeridos por el proveedor de servicios para entregar los servicios de cara-al-cliente. \n\nVéase también porfolio de acuerdos con el cliente, <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2659748303\">Gestión del catálogo de servicios<\/a>.\n"
  },
  {
    letter: "C",
    word: "Cédula de Identidad (CI)\n",
    definition: "Es una tarjeta con la que los ciudadanos se identifican dentro y fuera del país, también se utiliza para ejercer su derecho al sufragio.\n\nLa CI aplica como un tipo de TAX ID dentro de la consola de Kushki, para los siguientes países:\n\nCosta Rica :flag_cr: \nLa CI es emitidas por el Tribunal Supremo de Elecciones. Esta cédula cuenta con un número, el cual está diseñado para identificar al ciudadano numéricamente. Se compone de tres partes: la primera corresponde a la provincia donde nació la persona, la segunda indica el tomo en que está inscrita en el Registro y la tercera indica el asiento de la anotación de su nacimiento.\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/dd1cc5a5-60af-4c70-8386-097025c8da16#media-blob-url=true&id=a4f1588d-5efe-42e1-864f-fff62639b7b5&collection=contentId-2781938305&contextId=2781938305&height=264&width=877&alt=\">Imagen 1. Cédula Costa Rica<\/a>\nNicaragua :flag_ni: \nLas cédulas  son emitidas por el Consejo Supremo Electoral (CSE) a los ciudadanos a partir de los 16 años. La CI cuenta con un número, el cual está diseñado para identificar al ciudadano numéricamente y se encuentra en la parte superior de la cédula.\n\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/4f9430ab-aa44-468d-bb57-871d5855fc9c#media-blob-url=true&id=853e6846-96e0-4598-bb41-526d4b632ed2&collection=contentId-2781938305&contextId=2781938305&height=255&width=426&alt=\">Imagen 2. Cédula de Identidad Nicaragua<\/a>\n\nFuente de imágenes:\nNoticias MasterLex. (2016). Cédula Costa Rica. MODIFICAN FORMATO DE LAS CÉDULAS DE IDENTIDAD, [Imagen], Punto Jurídico, <a href=\"https:\/\/puntojuridico.com\/modifican-formato-de-las-cedula-de-identidad\/\">Modifican formato de las cédulas de identidad - Punto Jurídico<\/a>.\n\nPantoja, A. (2012). Cédula de Identidad Nicaragua. Extienden vigencia de cédulas hasta 2014, [Imagen], El Nuevo Diario, \n<a href=\"https:\/\/www.elnuevodiario.com.ni\/politica\/270804-extienden-vigencia-cedulas-2014\/\">https:\/\/www.elnuevodiario.com.ni\/politica\/270804-extienden-vigencia-cedulas-2014 <\/a>.\n\n"
  },
  {
    letter: "C",
    word: "Cédula de Identidad Personal (CIP)\n",
    definition: "Es un documento, con el que los ciudadanos mayores de edad se identifican dentro y fuera del país. Las cédulas son emitidas por el Tribunal Electoral de Panamá :flag_pa: . \n\nCon este documento se pueden identificar los ciudadanos para realizar trámites y ejercer su derecho al sufragio. La cédula cuenta con un número, el cual está diseñado para identificar al ciudadano numéricamente y se encuentra debajo de la fotografía.\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/dfe4b8dc-2cfb-4493-afd0-f6907acf3547#media-blob-url=true&id=220b560e-7362-4aa1-a907-a4117192a281&collection=contentId-2781512284&contextId=2781512284&height=255&width=404&alt=\">Imagen 1. Cédula de Identidad Personal Panamá<\/a>\nFuente de imagen:\nDirección Nacional de Cedulación. (2017). Cédula de Identidad Personal Panamá. [Imagen] La Cédula.  <a href=\"https:\/\/www.tribunal-electoral.gob.pa\/direccion-nacional-de-cedulacion\/la-cedula\/\">La Cédula - Tribunal Electoral<\/a>."
  },
  {
    letter: "C",
    word: "Centro de costos\n",
    definition: "Un centro de costos funge como una etiqueta transaccional cuyo fin único es el de servir para organizar y agrupar transacciones provenientes de la emisión de certificados individuales o masivos de manera más eficiente dentro de las consola de reseller; por tanto, la asignación de una transacción a cualquier centro de costos no la afecta en rubros como el precio, los procedimientos de emisión o la facturación."
  },
  {
    letter: "C",
    word: "Certificado de Estado Jurídico (EJ)\n",
    definition: "Es aquel documento que contiene las conclusiones del análisis de un Certificado de Tradición y Libertad en cuanto al historial jurídico de un inmueble, pero sin llegar a cotejar sus resultados con títulos de dominio u otros soportes. Este instrumento permite generar una calificación del estado jurídico del inmueble en una escala que Kushki establece en términos de Ideal, Aceptable y En alerta, con base en la cual se emiten las sugerencias más adecuadas a seguir de acuerdo al resultado obtenido del análisis de un CTL. "
  },
  {
    letter: "C",
    word: "Certificado de Histórico Vehicular (CHV)\n",
    definition: "El Histórico Vehicular se trata de un documento informativo oficial que expide el Registro Único Nacional de Tránsito (RUNT) en el cual se desglosa de manera detallada los datos más relevantes y actualizados acerca del vehículo con el fin de conocer de manera exhaustiva todos sus antecedentes (entre ellos: el histórico de propietarios, el estado técnico-mecánico, la existencia de limitaciones judiciales, las características físicas, la existencia de adeudos por infracciones, etc). De este modo, el CVH se constituye como un documento esencial, más no-obligatorio, en los procesos de compra-venta entre particulares. "
  },
  {
    letter: "C",
    word: "Certificado de Tradición y Libertad (CTL)\n",
    definition: "Es un documento público que contiene el registro oficial de la vida jurídica de un inmueble. Esto es, se trata de un documento que detalla, por un lado, el histórico de los propietarios legales de un inmueble, la información sobre su construcción, la ubicación geográfica y todos aquellos datos relevantes a partir de que el predio en cuestión fue dado de alta en la Oficina de Registro de Instrumentos Públicos. Este certificado es expedido únicamente por la Superintendencia de Notariado y Registro (SNR)."
  },
  {
    letter: "C",
    word: "Certificador LACPI",
    definition: "Es la persona responsable de avalar el flujo seguro e íntegro de la información generada por las transacciones entre tarjetas bancarias bajo el estándar de Banda Magnética, EMV, Dispositivos Punto de Venta de Kushki hasta PROSA. También es el encargado de consultar las transacciones realizadas desde dispositivos MPOS o Smartpos."
  },
  {
    letter: "C",
    word: "Certifikado (Antes EDD)",
    definition: "Certifikado es una plataforma original de Kushki cuya función radica en la emisión y gestión de diferentes documentos de fuentes oficiales al interior de las empresas, dirigida únicamente a los clientes y comercios de Colombia. Las características de este producto consisten en:\n\nConsulta y descarga individual o masiva de documentos oficiales.\n\nEntrega de datos en diferentes formatos para integrar a los sistemas de gestión de las empresas.\n\nManejo por centro de costos.\n\nEsta plataforma sustituye a la consola de Emisión de Documentos, mejor conocida como EDD. "
  },
  {
    letter: "C",
    word: "Chargeback rate\n",
    definition: "Es el número de devoluciones de cargo en comparación con todas las ventas realizadas en un periodo.\n\nChargeback rate = Transacciones de Contracargos \/ Total de transacciones aprobadas * 100\n\nEjemplo: Supongamos que Kushki procesa 50.000 transacciones en un mes, de las cuales 250 dan lugar a una tasa de devoluciones del 0,5% (250\/50.000*100)."
  },
  {
    letter: "C",
    word: "Checkout Lending (Checkout Financing)",
    definition: "Es la posibilidad que ofrecen los comercios a sus clientes de abrir una línea de crédito en el momento de la compra. Por lo general se muestra un botón en el Checkout para que el usuario aplique a un financiamiento para su compra y este es redirigido a la plataforma de financiamiento."
  },
  {
    letter: "C",
    word: "Clabe (Clabe interbancaria)\n",
    definition: "La Clave Bancaria Estandarizada (Clabe) es un número de 18 dígitos que identifica a una cuenta bancaria para la realización de transferencias entre cuentas en México :flag_mx: . La entidad encargada de la estandarización de las Clabes es el Banco de México.\n\nNota: compartir una Clabe interbancaria es 100% seguro, ya que solo se utiliza para recibir depósitos y no para realizar compras.\n\nSinónimos: cuenta Clabe"
  },
  {
    letter: "C",
    word: "Clave de derivación base\n",
    definition: "También conocido en inglés como Base Derivation Key es una llave criptográfica que se utiliza para generar otra llave y generalmente se asocia a la técnica de gestión de claves para cifrar transacciones DUKPT (en español, Clave única derivada por transacción), ya que el proceso de BDK es el que inicializa el proceso de DUKPT.\n\nFuente: \n\nPCI Security Standards Council & PIN Assessment Working Group. Information Supplement: PIN Security Requirement 18-3 - <a href=\"https:\/\/listings.pcisecuritystandards.org\/documents\/PIN_Security_Rqmt_18-3_Key_Blocks_2019.pdf \">Key Blocks. PCI Security Standards Council<\/a>. (Martin, P, Trans.) (Trabajo original publicado el 1 de junio de 2019).\n"
  },
  {
    letter: "C",
    word: "Clave Única de Registro de Población (CURP)\n",
    definition: "Es una clave única emitida por RENAPO (Registro Nacional de Población), con la cual se identifican los mexicanos fuera y dentro del país, así como los extranjeros que radican en México. \n\nLa CURP se asigna a un mexicano desde el momento de su nacimiento y consta de 18 caracteres alfanuméricos, compuesto de la siguiente forma:\n\nPrimera letter del primer apellido.\n\nPrimera vocal del primer apellido.\n\nPrimera letter del segundo apellido.\n\nPrimera letter del primer nombre.\n\nAño de nacimiento (dos dígitos).\n\nMes de nacimiento (dos dígitos).\n\nDía de nacimiento (dos dígitos).\n\nletter del género (H para Hombre y M para Mujer).\n\nDos letters que corresponden a la Entidad de Nacimiento.\n\nPrimera consonante del primer apellido, en caso de que la primera letter del apellido sea consonante, se toma la segunda.\n\nPrimera consonante del segundo apellido, en caso de que la primera letter del apellido sea consonante, se toma la segunda.\n\nPrimera consonante interna del nombre de pila, en caso de que la primera letter del nombre sea consonante, se toma la segunda.\n\nDígito o letter para evitar duplicidad.\n\nDígito verificador.\n\nNota: existen algunas excepciones donde se ajusta la clave para evitar words altisonantes y duplicidad.\n"
  },
  {
    letter: "C",
    word: "Clave única derivada por transacción\n\n",
    definition: "También conocido en inglés como Derived Unique Key Per Transaction. Es una técnica de gestión de claves para cifrar transacciones. DUKPT es una clave única generada por la transacción que no se vuelve a utilizar y normalmente es usada para cifrar la información del PIN, el cual  es adquirido en los terminales de los puntos de venta.\n\nFuente: \n\nInza, J. (7 de julio de 2013). DUKPT – Derived Unique Key Per Transaction – clave derivada única por transacción. Todo es electrónico. Recuperado el 17 de noviembre de 2022, de <a href=\"https:\/\/inza.wordpress.com\/2013\/07\/07\/dukpt-derived-unique-key-per-transaction-clave-derivada-unica-por-transaccion\/\">DUKPT – Derived Unique Key Per Transaction – clave derivada única por transacción<\/a>\n"
  },
  {
    letter: "C",
    word: "CLP (Peso Chileno)",
    definition: "CLP es el código ISO que se asigna a la divisa Peso Chileno, para saber más información de esta divisa consulta la siguiente tabla: \n\nPaís que la usa en Kushki\n\nChile :flag_cl:\n\nTasa de cambio (8 abr 2022 )\n\n1 USD = 815.50 CLP\n\nBanco emisor\n\nBanco Central de Chile\n\nSímbolo\n\n$\n\n \n\nDenominaciones de monedas\n\n10 pesos\n\n50 pesos\n\n100 pesos\n\n500 pesos\n\n \n\n \n\nDenominaciones de billetes\n\n1 000 pesos\n\n2 000 pesos\n\n5 000 pesos\n\n10 000 pesos\n\n20 000 pesos"
  },
  {
    letter: "C",
    word: "Cobro Digital (CoDi)\n",
    definition: "Es una plataforma de pagos desarrollada por el Banco de México que opera mediante el Sistema de Pagos Electrónicos Interbancarios (SPEI). CoDi se especializa en pagos con tecnología <a href=\"https:\/\/docs.google.com\/document\/d\/1tcDb7EmXl2M7KqW7c2OQczcnbVnKOrC20xQRR_5ibqM\/edit#heading=h.2vupftttictv \"> QR<\/a> y <a href=\"https:\/\/docs.google.com\/document\/d\/1tcDb7EmXl2M7KqW7c2OQczcnbVnKOrC20xQRR_5ibqM\/edit#heading=h.2z524naodcsp \">NFC<\/a> (sin contacto). \nMás información sobre CoDi <a href=\"https:\/\/www.banxico.org.mx\/sistemas-de-pago\/codi-cobro-digital-banco-me.html \">aquí<\/a>.\n\n\n"
  },
  {
    letter: "C",
    word: "Cobro programado\n",
    definition: "Los cobros o pagos programados son modalidades de pago que permiten realizar un pago en varios plazos definidos por la empresa, banco o procesador que ofrece este sistema. La principal diferencia entre los cobros programados y las cuotas radica en que, en el caso de haber aceptado un cobro programado, es necesario  abonar el dinero o dar el permiso para que dicho cobro sea realizado en el periodo acordado y en un día específico.  No es posible abonar un monto; en vez de esto, el pago debe ser completo.\n\nFuente:\n\nPagos programados. Epayments-support.ingenico (s.f). Recuperado en noviembre 24 de 2022, de <a href=\"https:\/\/epayments-support.ingenico.com\/es\/integration-solutions\/recurring-payments\/scheduled-payments#:~:text=Pagos%20programados%20permite%20a%20los,programaci%C3%B3n%20las%20realiza%20el%20comerciante\">Pagos programados<\/a> .  \n"
  },
  {
    letter: "C",
    word: "Código IBAN",
    definition: "IBAN is the acronym for International Bank Account Number [1]. It consists of a country code comprised of two letters followed by two other verification digits, to which up to thirty alphanumeric characters are added, representing the bank account number. Although a uniform length has not been established for SEPA countries, the IBAN code cannot exceed 34 characters [2].\n\nSource:\n\n[1] Liñán, E. C. (n.d.). Código IBAN y código BIC o SWIFT: qué son y para qué sirven. BBVA. Retrieved on December 27th, 2022, from  <a href=\"https:\/\/www.bbva.com\/es\/salud-financiera\/swift-e-iban\/\">https:\/\/www.bbva.com\/es\/salud-financiera\/swift-e-iban\/<\/a>.\n\n[2] Santander, B. (n.d.). Calcular IBAN. Banco Santander. Retrieved on December 27th, from <a href=\"https:\/\/www.bancosantander.es\/particulares\/cuentas-tarjetas\/cuentas-corrientes\/calcular-iban\">Calcular IBAN<\/a>. \n\n"
  },
  {
    letter: "C",
    word: "Código SWIFT\n",
    definition: "El código SWIFT (en inglés, Society for Worldwide Interbank Financial Telecommunication) o también denominado código BIC (Bank Identifier Code) es una serie alfanumérica de 8 u 11 dígitos que sirve para identificar al banco receptor cuando se realiza una transferencia internacional [1]. \n\nEste código ayuda a que las transacciones internacionales sean más seguras, rápidas, con menos errores y evita costos adicionales.  \n\nFuente:\n\n[1] España, B. (2019, July 11). Qué es el código SWIFT \/ BIC. BBVA School. <a href=\"https:\/\/www.bbva.es\/finanzas-vistazo\/ef\/cuentas\/codigo-swift-bic.html\">¿Qué es el código SWIFT BIC y cómo encontrarlo?<\/a>. \n"
  },
  {
    letter: "C",
    word: "Colocación",
    definition: "Es cuando las instituciones financieras ponen dinero a circular dentro de la economía. Esto lo hacen a través del dinero que recolectan por la captación. Este dinero lo otorgan a clientes mediante préstamos crediticios y las instituciones financieras obtiene ganancias mediante el porcentaje de interés que cobran por el préstamo."
  },
  {
    letter: "C",
    word: "Comerciante de Registro\n",
    definition: "También conocido en inglés como Merchant on Record (MoR). Es un ente que se encarga de gestionar los aspectos legales y financieros de un comercio electrónico. Es útil para los comercios que por alguna razón no pueden gestionar por sí mismos la tributación, ni facturan directamente a los clientes. El MoR actúa como intermediario entre los vendedores y el cliente final y se encarga de:\n\nLos asuntos legales.\n\nLas condiciones de compra.\n\nLas contrataciones.\n\nLas acciones contables.\n\nVigilar la autenticidad y legalidad de los productos que se comercializan.\n<a href=\"blob:https:\/\/kushki.atlassian.net\/bc207e7d-6bf3-4f93-ac82-0d1862599dad#media-blob-url=true&id=4b6367a2-3de4-4a4c-b7c4-5f2a5dd68579&collection=contentId-2659516795&contextId=2659516795&height=1024&width=1440&alt=\\\">imagen<\/a>"
  },
  {
    letter: "C",
    word: "Comercio",
    definition: "Es una compañía o persona física que comercia bienes o servicios a cambio de un beneficio económico. Un comerciante utiliza los servicios de una pasarela de pagos, como Kushki, para procesar pagos con tarjetas de crédito de forma segura y evitar fraudes.\n\nLas pasarelas de pago encriptan los detalles de pago –como el PAN, la fecha de expiración, el CVV–, transmiten estos datos al adquirente y responden al comercio si la transacción es exitosa o no. "
  },
  {
    letter: "C",
    word: "Compensación",
    definition: "Es un acuerdo realizado entre dos o más partes, donde todos los participantes son deudores y acreedores al mismo tiempos, en otras words, todos tiene dinero a favor y en contra. Por lo tanto, se hace la compensación para saldar el total de las deudas. \n\nLa compensación es una actividad común entre instituciones bancarias para efectuar pagos entre ellos o resolución de deudas."
  },
  {
    letter: "C",
    word: "Comprador",
    definition: "Es el cliente de un comercio, que adquiere bienes o servicios a cambio de un pago.\n\nEn Kushki, el comprador es una persona natural o jurídica que efectúa un pago a favor de uno de los comercios en contraprestación de un bien o servicio prestado por estos."
  },
  {
    letter: "C",
    word: "Comprobante IVA\n",
    definition: "Un comprobante es un documento cuya utilidad es dar prueba de la realización de una transacción económica, entrega de un bien, cobro, compra o gasto, entre otros. [1] Para el caso de los comprobantes IVA (Impuesto al Valor Agregado), este se refiere al soporte que certifica las transacciones gravadas con dicho impuesto. \n\nFuente:\n\n[1] López, J. F. (abril 30 de 2019). Comprobante. Economipedia. Comprobante | <a href=\"https:\/\/economipedia.com\/definiciones\/comprobante.html\">Economipedia<\/a>  \n"
  },
  {
    letter: "C",
    word: "Comunicación de Campo Cercano\n",
    definition: "También conocido en inglés como Near-field Communication (NFC). La NFC o Comunicación de campo cercano es una tecnología de comunicación que permite intercambiar datos entre dispositivos cercanos sin ningún contacto físico. \n\nPermite compartir archivos, enlaces o incluso realizar pagos, acercando el dispositivo móvil a una terminal de pagos."
  },
  {
    letter: "C",
    word: "Conciliación",
    definition: "Es el proceso con el que un comerciante verifica la información financiera de su negocio. En el modelo agregador, Kushki se encarga de realizar la conciliación de valores del cliente, pues el recurso ingresa a las cuentas de Kushki para luego liquidar hacia el cliente el monto restante tras aplicar las comisiones bancarias, de Kushki e impuestos, según el país.\n\nEn el modelo gateway, el cliente realiza el proceso directamente con el banco, y puede comparar las transacciones autorizadas del banco frente a las que se reflejen en Kushki. Aquí se tiene el detalle de lo pagado frente al movimiento bancario."
  },
  {
    letter: "C",
    word: "Conoce a tu Cliente\n",
    definition: "También conocido en inglés como Know Your Customer (KYC). Es un conjunto de herramientas, que a través de reglas, perfiles, análisis y scoring, sirven para analizar un riesgo potencial en el procesamiento de un pago. Filtrar las transacciones de alto riesgo permite a los comerciantes minimizar el número de pagos fraudulentos y, por lo tanto, maximizar los ingresos. Realizar una gestión de riesgos precisa es extremadamente complejo e implica un gran análisis de datos."
  },
  {
    letter: "C",
    word: "Consola",
    definition: "Es el portal administrativo de Kushki que permite a los comercios controlar su operatividad general, en el que pueden configurar diferentes funcionalidades, de acuerdo con los roles que se hayan asignado durante el proceso de afiliación. \n\nEstá compuesta por nueve módulos, a través de los cuales los comercios pueden:\n\nGestionar transacciones\n\nConfigurar su información\n\nDefinir roles de usuarios \n\nActivar y gestionar suscripciones\n\nConfigurar Smartlinks\n\nElaborar y descargar informes\n\nConfigurar servicios\n\nDescargar información y credenciales para integrar a Kushki a sus tiendas en línea \n\nObtener ayuda de Soporte\n\nNota: también hay una <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/1093894251 \">consola interna<\/a> desde la cual administramos la creación, edición y mantenimiento de las operaciones de los comercios.\n\nSinónimos: backoffice."
  },
  {
    letter: "C",
    word: "Consorcio",
    definition: "Asociación económica contractual entre dos o más empresas las cuales buscan participar en forma activa, directa y conjunta en un determinado negocio. Esta nueva sociedad no origina la creación de una persona moral (jurídica) independiente de sus miembros, por lo que los consorciados conservan su autonomía."
  },
  {
    letter: "C",
    word: "Contracargo",
    definition: "Un contracargo es un mecanismo creado para solucionar aquellos cargos que se realizan a una tarjeta de crédito o débito que no son reconocidos. Es una manera de poder proteger al tarjetahabiente de cargos hechos sin su consentimiento. Se genera cuando un tarjetahabiente se pone en contacto directo con su banco para notificar que no reconoce un cargo hecho a su tarjeta de crédito o débito por un comercio. En ese momento, el banco emisor del tarjetahabiente envía la solicitud de contracargo al banco del comercio.\n\nEntre las razones que ocasionan los contracargos se encuentran:\n\nDuplicidad de la tarjeta o del pago.\n\nFalta de reconocimiento: El cliente no recuerda o no reconoce la transacción.\n\nFalta de entrega: El cliente no recibió los bienes o servicios por los cuales pagó.\n\nComportamiento engañoso y deshonesto.\n\nFraude: El cliente no autorizó o no participó en la transacción.\n\nNota: los contracargos aplican únicamente para pagos realizados con tarjeta de crédito y débito. En Chile :flag_cl: solo a pagos con tarjetas de crédito."
  },
  {
    letter: "C",
    word: "Conversión Dinámica de Moneda",
    definition: "También conocido en inglés como Dynamic Currency Conversion. Es un servicio que prestan tanto adquirentes como negocios para que los tarjetahabientes decidan si quieren pagar en la moneda de la factura (que es distinta a la de la tarjeta) o en la de origen de la tarjeta. Por lo general, suele prestarse cuando el tarjetahabiente está en el extranjero o vaya a transferir un pago que no esté en su moneda local. \n\nLos pagos con este servicio pueden convertirse también a la moneda preferida del titular de la tarjeta. Para ejecutar este tipo de pagos, los comercios y los adquirentes deben dar transparencia, de modo que generen confianza en los tarjetahabientes a la hora de decidir si toman el servicio de DCC o no.\n\n📚 Sinónimos: pago multimoneda."
  },
  {
    letter: "C",
    word: "COP (Peso Colombiano)",
    definition: "COP es el código ISO que se asigna a la divisa Peso Colombiano. Para conocer más información sobre esta divisa, consulta la siguiente tabla: \n\nPaís que la usa en Kushki\n\nColombia :flag_co:\n\nTasa de cambio (8 abr 2022 )\n\n1 USD = 3782.20 COP\n\nBanco emisor\n\nBanco de la República (Banco Central de Colombia)\n\nSímbolo\n\n$\n\n \n\n \n\n \n\n \n\nDenominaciones de monedas\n\n5 pesos\n\n10 pesos\n\n20 pesos\n\n50 pesos\n\n100 pesos\n\n200 pesos\n\n500 pesos\n\n1 000 pesos\n\n \n\n \n\n \n\nDenominaciones de billetes\n\n1 000 pesos\n\n2 000 pesos\n\n5 000 pesos\n\n10 000 pesos\n\n20 000 pesos\n\n50 000 pesos\n\n100 000 pesos"
  },
  {
    letter: "C",
    word: "Costo de Adquisición de un Cliente (CAC)",
    definition: "El Costo de Adquisición de un Cliente (CAC) representa el gasto o inversión económica necesaria para atraer a un nuevo cliente a Kushki."
  },
  {
    letter: "C",
    word: "CRC (Colón Costarricense)",
    definition: "CRC es el código ISO que se asigna a la divisa Colón Costarricense, para saber más información de esta divisa consulta la siguiente tabla: \n\nPaís que la usa en Kushki\n\nCosta Rica :flag_cr: \n\nTasa de cambio (8 abr 2022 )\n\n1 USD = 656.54 CRC\n\nBanco emisor\n\nBanco Central de Costa Rica\n\nSímbolo\n\n₡\n\n \n\n \n\nDenominaciones de monedas\n\n5 colones\n\n10 colones\n\n25 colones\n\n50 colones\n\n100 colones\n\n500 colones\n\n \n\n \n\nDenominaciones de billetes\n\n1 000 colones\n\n2 000 colones\n\n5 000 colones\n\n10 000 colones\n\n20 000 colones"
  },
  {
    letter: "C",
    word: "Criptograma de petición de autorización",
    definition: "También conocido en inglés como Authorization Request Cryptogram, el cual hace referencia a un criptograma generado por las tarjetas al momento de realizar transacciones. Este criptograma se envía al emisor de la tarjeta con los datos de la transacción;  el emisor valida los datos, crea su propio criptograma y compara los resultados para verificar que la tarjeta es auténtica.\n\nFuente: \n\nBoza Velez, P. E. (2018). Implantación de tecnología EMV en la Red ATM Banbif. Universidad San Ignacio de Loyola. Recuperado el 17 de noviembre de 2022, de \n<a href=\"https:\/\/repositorio.usil.edu.pe\/server\/api\/core\/bitstreams\/89087529-5a36-4fbe-8593-b95a0076ab9f\/content\">https:\/\/repositorio.usil.edu.pe\/server\/api\/core\/bitstreams\/89087529-5a36-4fbe-8593-b95a0076ab9f\/content<\/a>"
  },
  {
    letter: "C",
    word: "Criptograma de respuesta de autorización",
    definition: "Es el acrónimo del término en inglés Authorization Response Processing Cryptogram, el cual hace referencia a la respuesta que produce el emisor de la tarjeta EMV (Europay, Mastercard, Visa) una vez que esta genera una solicitud de autorización de criptograma (o ARQC por sus siglas en inglés). Este proceso se realiza de acuerdo con el requerimiento de la terminal de punto de venta del comercio que solicita un cobro."
  },
  {
    letter: "C",
    word: "Cross-selling",
    definition: "Significa una venta cruzada, es un término de marketing  el cual implica sugerir al cliente otros productos adicionales o complementarios al que va a comprar para aumentar el volumen de la venta.\n\nPor ejemplo, en una tienda online un cliente compra una laptop, una vez se complete la compra, o mientras se llena el carrito de compras, se le muestra un anuncio del tipo “También de puede interesar”.\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/4980dc98-2d76-4f3a-9727-f70116fb709e#media-blob-url=true&id=a15a09f0-8723-4417-9270-abca807c1cb9&collection=contentId-2728657683&contextId=2728657683&height=860&width=1427&alt=\n\">Ejemplo de Cross-selling en Amazon<\/a>."
  },
  {
    letter: "C",
    word: "CRUD",
    definition: "Es el acrónimo de las words en inglés Create, Read o Retrive, Update y Delete o Destroy, las cuales, en conjunto, resumen los cuatro conceptos u operaciones básicas que un usuario programador debe conocer y ejecutar para generar y gestionar eficientemente bases de datos o aplicaciones."
  },
  {
    letter: "C",
    word: "Cumplimiento de la industria de tarjetas de pago",
    definition: "También conocido en inglés como Payment Card Industry Compliance (PCI Compliance). Es una norma de las compañías de tarjetas de pago para garantizar la seguridad de los datos durante las transacciones. Los estándares técnicos y operativos son definidos por el PCI Security Standards Council.\n\nEsta norma de cumplimiento aplica a toda empresa que requiera, almacene, procese o transmita datos de tarjetas de pago. A pesar de considerarse obligatorio, no todas las empresas de la industria de pagos cumplen con el PCI compliance."
  },
  {
    letter: "C",
    word: "Cybersource",
    definition: "Cybersource es una empresa que provee servicios de seguridad y gestión de fraude para comercios electrónicos que tienen como medio de pago tarjetas; además del procesamiento de las mismas. \n\nEs un proveedor de servicios certificados PCI DSS nivel 1 y es una subsidiaria de propiedad absoluta de VISA. Cybersource no es un medio adquirente; sin embargo, trabaja a nivel mundial en más de 190 países con alrededor de 150 procesadores adquirentes. \n\nActualmente trabaja con las siguientes monedas: \n\nAUD Dólar Australiano\n\nCAD Dólar Canadiense\n\nCHF Franco Suizo\n\nCNY Yuan Chino Renminbi\n\nCZK Coronas Checas\n\nDKK Corona Danesa\n\nEUR Euro\n\nGBP Libra Esterlina Británica\n\nHKD Dólar de Hong Kong\n\nHUF Florín Húngaro\n\nJPY Yen Japonés\n\nNOK Corona Noruega\n\nNZD Dólar Neozelandés\n\nPLN Zloty Polaco\n\nSEK Coronas Suecas\n\nSGD Dólar de Singapur\n\nUSD (predeterminado) Dólar estadounidense"
  },
  {
    letter: "C",
    word: "Certificado de No Propiedad (CNP)",
    definition: "El Certificado de No Propiedad o CNP se trata de una constancia que emite la Superintendencia de Notariado y Registro (SNR) de Colombia en el cual se asienta que la persona a cuyo nombre se expide no posee bienes inmuebles a nivel nacional. De este modo, un CNP es un documento requerido para obtener subsidios gubernamentales o para acceder a programas de vivienda. "
  },
  {
    letter: "C",
    word: "Customer",
    definition: "El término de customer hace referencia al comercio el cual concentra la información de la empresa que está bajo contrato con una entidad financiera de Kushki (owner). En el nivel de customer se configuran los datos de la empresa, la información financiera, tarifas y descuentos, procesamientos, servicios, desarrolladores (Webhooks), entre otros."
  },
  {
    letter: "C",
    word: "Climate & Culture",
    definition: "Hace referencia a una encuesta de satisfacción de los empleados en Kushki llevada a cabo por el área de Recursos Humanos RRHH.\n\nLos conceptos Clima y Cultura afectan la satisfacción y rendimiento de los empleados. Se refiere a cómo se sienten y se comportan las personas dentro de una organización. Cultura es lo que los empleados creen y valoran, además de como se espera que actúen dentro de la misma. Clima es cómo perciben su ambiente de trabajo y cómo sienten la dirección de la empresa y sus prácticas de valores.\n\n \n\nFuente:\n\n[1] Siddharth B. (07 de abril del 2023). Understanding the importance of organizational culture and climate: Implications for employee performance and engagement. Linkedin. Understanding the Importance of Organizational Culture and Climate: Implications for Employee Performance and Engagement  \n<a href=\"https:\/\/www.linkedin.com\/pulse\/understanding-importance-organizational-culture-bhattacharya-ph-d\/\">Understanding the Importance of Organizational Culture and Climate: Implications for Employee Performance and Engagement<\/a>"
  },
  {
    letter: "C",
    word: "CSAT",
    definition: "Por sus siglas en inglés, Customer Satisfaction Score, en español Puntuación de satisfacción del cliente, es una métrica para calcular el porcentaje de satisfacción del cliente con tu producto o servicio. La medición se puede realizar en cualquier momento del proceso, aunque lo recomendable es realizarla una vez culminado el proceso, con una encuesta con preguntas simples y directas, como por ejemplo:  \"¿Qué tan satisfecho estaba con [empresa\/producto\/servicio]?\". \n\nEsta encuesta es una métrica cuantitativa y proporciona resultados cualitativos; de esta manera, se pueden abordar los problemas identificados de forma efectiva y estratégica, fortaleciendo la relación entre el consumidor y la empresa. \n\nLas calificaciones pueden ser numéricas con escala del 1 al 10, por ejemplo, donde 1 podría ser “totalmente insatisfecho” y 10 “totalmente satisfecho”. También se pueden emplear alternativas de nivel de satisfacción en términos y no en números. \n\nPara realizar un cálculo de puntaje CSAT, se debe tomar la cantidad de clientes satisfechos y dividirla por la cantidad total de respuestas.\n\n(Número total de respuesta satisfechas\/ Número total de respuesta)*100"
  },
  {
    letter: "D",
    word: "Datos de autenticación sensibles",
    definition: "Se trata de la información del tarjetahabiente para verificar su autenticidad en el momento de realizar un pago con tarjeta. Estos datos incluyen:\n\nEl número de tarjeta\n\nEl CVV\n\nLos datos de identidad del poseedor\n\nEl PIN\n\nEl chip\n\nPor su importancia, y para brindar seguridad en compras y en cuentas de los tarjetahabientes, las entidades que tramitan estos pagos deben garantizar su protección. Esto lo hacen por medio de los estándares de PCI DSS, que se encarga de validar los controles para proteger todos los elementos involucrados en el ecosistema de pagos."
  },
  {
    letter: "D",
    word: "Defect rate",
    definition: "Es un indicador clave en calidad de software que mide el porcentaje de errores reportados en relación al total de tests realizados. Esta métrica se utiliza para mejorar y evaluar la calidad de software. \n\nEjemplo: Kushki realizó 100 despliegues en un sprint y reportó 5 incidentes en funcionalidades. Usando la fórmula sería:\n\nDefect rate = # de incidentes reportados \/ total de QA test \n\nDefect rate = 5\/100\n\nDefect rate = 0.05 o 5%\n\nPor lo tanto, el defect rate de ese sprint sería del 5%\n\nFuente\n\n[1] Isixsigma. (20 de marzo del 2023). The benefits of tracking population defect rate for efficient quality control. iSixSigma . Recuperado el 16 de mayo del 2023. <a href=\"https:\/\/www.isixsigma.com\/dictionary\/population-defect-rate\/ \">The Benefits of Tracking Population Defect Rate for Efficient Quality Control<\/a> \n\n[2] Genevieve, M. (02 de diciembre del 2022). What is Supplier Defect Rate? Definition and Examples of the Important KPI. Thomasnet® - Product Sourcing and Supplier Discovery Platform - Find North American Manufacturers, Suppliers and Industrial Companies . <a href=\"https:\/\/www.thomasnet.com\/insights\/supplier-defect-rate\/\">What Is Supplier Defect Rate? Definition and Examples of the Important KPI<\/a>\n"
  },
  {
    letter: "D",
    word: "Detekta (servicio de Certifikado)",
    definition: "Detekta es un servicio exclusivo de Kushki disponible desde el sitio electrónico de <a href=\"https:\/\/www.certifikado.com\/ \">Certifikado<\/a> el cual ofrece un análisis diagnóstico automatizado y detallado del estado jurídico de un inmueble que se identifica  como un <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3005448880\/Certificado+de+Estado+Jur+dico+EJ \">Certificado de Estado Jurídico<\/a.. Este servicio solo puede ser adquirido ya sea mediante la compra de un combo con un <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3006726308\/Certificado+de+Tradici+n+y+Libertad+CTL \">Certificado de Tradición y Libertad<\/a> o a través de la compra previa de un CTL con el que se proporciona un número de ticket que será requerido para la adquisición del servicio Detekta.\n"
  },
  {
    letter: "D",
    word: "DevOps",
    definition: "DevOps es un servicio ofrecido por Microsoft para la plataforma virtual Azure; esta es la evolución de VSTS (Visual Studio Team Services). Esta plataforma se puede definir como “un conjunto de herramientas y servicios que ayudan a la administración del ciclo de vida de proyectos de desarrollo de software” (1).  \n\nDevOps funciona en la nube o de manera local y soporta cualquier lenguaje de programación y cualquier plataforma de desarrollo. Además de esto posee servicios clave tales como: tableros de control (planificación, monitoreo y comunicación de equipos), pipelines (herramienta de CI\/CD) y planes de prueba de software.\n\nFuente:\n\nGlosario. Centrosur. (septiembre 26 de 2018). Recuperado en noviembre 8 de 2022, de <a href=\"https:\/\/www.centrosur.gob.ec\/glosario\/#1537974641852-628cb02a-7422 \">GLOSARIO<\/a> . \n\nTrámites Ecuador. (s.f.). Recuperado en noviembre 8 de 2022, de <a herf=\"https:\/\/www.tramitesbasicos.com\/ \">Trámites Ecuador<\/a> . \n\nQué es azure DevOps. OpenWebinars.net. (octubre 6 de 2021). Recuperado en noviembre 24 de 2022, de <a href=\"https:\/\/openwebinars.net\/blog\/que-es-azure-devops\/ \">Qué es Azure DevOps<\/a> .  \n\n¿Qué es azure devops? Sentrio. Sentrio. (noviembre 3 de 2022). Recuperado en noviembre 24 de 2022, de <a href=\"https:\/\/sentrio.io\/blog\/que-es-azure-devops\/ \">¿Qué es Azure DevOps? - Sentrio<\/a> .  \n\nAzure Devops Services: Microsoft Azure. Services Microsoft Azure. (s.f). Recuperado en noviembre 24 de 2022, de <a href=\"https:\/\/azure.microsoft.com\/en-us\/products\/devops\/#overvie \">Azure DevOps Services | Microsoft Azure<\/a>."
  },
  {
    letter: "D",
    word: "Diferidos con interés",
    definition: "Es la división del costo total de una compra en montos mensuales más un porcentaje de interés. Por ejemplo, una compra de $900 se podría dividir en 3 pagos de $300, más un porcentaje que varía según el emisor de la tarjeta. Esta modalidad se usa en pagos con tarjeta de crédito.\n\nSinónimos: Meses parcelados. En México :flag_mx:  se le conoce como meses con intereses."
  },
  {
    letter: "D",
    word: "Diferidos sin interés\n",
    definition: "Es la división del costo total de una compra con tarjeta de crédito en montos fijos mensuales sin que se le sume el porcentaje de los intereses aplicables a la tarjeta usada. Por ejemplo, una compra de $900 se podría dividir en 3 pagos de $300. Es decir, es una manera de fraccionar el pago del valor total de un bien o servicio en partes más pequeñas.\n\nNota: en este tipo de pagos, el excedente de la comisión lo asume el comercio.\n\nSinónimos: Meses parcelados. En México :flag_mx: se le conoce como meses sin intereses."
  },
  {
    letter: "D",
    word: "Dimensionamiento de las aplicaciones",
    definition: "Actividad responsable de entender los requerimientos de recursos necesarios para apoyar una nueva aplicación o un cambio mayor de una aplicación existente. El dimensionado de las aplicaciones ayuda a asegurar que los servicios de TI cumplen con los objetivos de nivel de servicio acordados para la capacidad y el rendimiento."
  },
  {
    letter: "D",
    word: "Dirección de Impuestos y Aduanas Nacionales (DIAN)\n",
    definition: "Es una entidad colombiana que garantiza la seguridad fiscal y la protección del orden público económico nacional, encargándose de la administración y control al debido cumplimiento de las obligaciones tributarias, aduaneras, cambiarias, los derechos de explotación, los gastos de administración sobre los juegos de suerte y azar y la facilitación de las operaciones de comercio exterior en condiciones de equidad, transparencia y legalidad.\n\nFuente: Dirección de impuestos y aduanas nacionales (s.f.). La entidad. DIAN. Recuperado el 19 de diciembre de 2022, de <a href=\"https:\/\/www.dian.gov.co\/dian\/entidad\/Paginas\/Presentacion.aspx#:~:text=de%20la%20Entidad%3F-,La%20Unidad%20Administrativa%20Especial%20Direcci%C3%B3n%20de%20Impuestos%20y%20Aduanas%20Nacionales,cumplimiento%20de%20las%20obligaciones%20tributarias%2C\">Presentación<\/a>.  \n"
  },
  {
    letter: "D",
    word: "Dispersión de dinero",
    definition: "También conocido en inglés como Payout. Un payout es una suma de dinero que se le paga en una sola expedición a uno o varios individuos o entidades.\n\nEsta dispersión puede realizarse mediante transferencias o a través de las redes de recaudo de efectivo afiliadas.\n\nEjemplos de payouts:  El dinero que se le entrega a personas como resultado de premios, o bienes, como el cobro de un seguro.\n\nEn la industria de los pagos, un payout puede referirse al dinero que dispersa un comercio en línea a sus sub-comerciantes, por los productos o servicios que vendieron en determinado periodo de tiempo.\n\nEn Kushki conocemos como payouts a todas las transacciones en las que los comercios realizan pagos a terceros, desde una cuenta de dispersión de recursos en Kushki."
  },
  {
    letter: "D",
    word: "Dispersión de recursos",
    definition: "Consiste en realizar un abono de recursos en una cuenta concentradora para procesar su envío a múltiples destinatarios en un solo proceso. Con esta acción se puede ejecutar la transferencia de dinero en casos en que deba pagarse a los empleados, a los colaboradores o a los proveedores de servicio en una empresa.\n\nNota:  es un proceso completamente desacoplado a la recepción de pagos porque es una salida de dinero."
  },
  {
    letter: "D",
    word: "Dispositivo de duplicación",
    definition: "Es un dispositivo físico que en la mayoría de veces es integrado junto con el dispositivo de lectura de tarjetas, cuyo fin es el de captar, almacenar y manipular ilegalmente la información del pago de una tarjeta. Es también conocido como un “dispositivo de robo de tarjeta”. "
  },
  {
    letter: "D",
    word: "Dispositivo de entrada de PIN",
    definition: "También conocido como Point-of-sale PIN entry device (POS PED) en inglés. El PED es un dispositivo electrónico que se utiliza al hacer transacciones con tarjetas de débito, tarjetas de crédito o tarjetas inteligentes. Su función es la de procesar, aceptar y cifrar de manera segura y automática la información del número de identificación personal (PIN) que posee el tarjetahabiente y que debe suministrar al momento de hacer un pago en una terminal de punto de venta (TPV), un cajero electrónico o en un dispositivo de punto de venta que se encuentra integrado en una caja registradora. \n\nPor lo general, este dispositivo consta de los siguientes componentes: \n\nTeclado para la entrada del PIN: Se encarga de leer la tarjeta, permitiendo el ingreso del PIN para que este se encripte de manera segura previo a que sea enviado al banco. Los teclados de los PED deben ceñirse a las reglas establecidas por la <a href=\"https:\/\/listings.pcisecuritystandards.org\/documents\/PCI_DSS_v3-2_AOC_Merchant_3_es-LA.pdf \">industria de las tarjetas de pago<\/a>.  \n\nNota: Existe una excepción con las tarjetas inteligentes, ya que, al hacer transacciones con este tipo de tarjetas, el PIN se transfiere del teclado de PIN a la tarjeta y es verificado por la tarjeta con chip. En este caso, el PIN no es enviado al banco o al esquema de la tarjeta para su verificación (Concepto conocido como Verificación de PIN sin conexión). [1] \n\nProcesador: Los PED cuentan con funciones a nivel de software y hardware, las cuales garantizan que las claves de cifrado y el PIN no sean visibles para quien intente manipular inoficiosamente el dispositivo. Una vez el tarjetahabiente ingresa el PIN, este es cifrado de manera inmediata y el sistema crea un bloqueo de PIN cifrado, el cual se elimina tan pronto como el teclado para la entrada del PIN envía la información al punto de venta.[2] \n\nEn la imagen a continuación, encontrarás los tipos de PED más comunes en la industria: \n\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/c22ad31a-8f89-4744-842e-69adafc998ae#media-blob-url=true&id=f549832e-bef5-4f17-9131-a17345e0fb36&collection=contentId-2927198332&contextId=2927198332&height=196&width=442&alt=\">Imagen 1<\/a>. PIN Entry Devices: (1) PED externo, (2) PED conectado a un lector de tarjetas, y (3) PED integrado con el lector de tarjetas (datáfono). \nFuentes: \n\n[1] Teclado de PIN. (s\/f). Hmn.Wiki. Recuperado el 4 de agosto de 2022, de Teclado de PIN . \n\n[2](S\/f). Pcihispano.com. Recuperado el 4 de agosto de 2022, de <a href=\"https:\/\/www.pcihispano.com\/ahora-podras-ingresar-de-forma-segura-tu-pin-por-software-en-telefonos-moviles-y-tabletas-gracias-al-estandar-pci-spoc\/ \">Pcihispano<\/a>."
  },
  {
    letter: "D",
    word: "Disputa",
    definition: "Si el comercio recibe un contracargo y no está de acuerdo, puede iniciar en algunos casos un proceso de disputa sobre este. Si se permite una disputa, el comerciante debe proporcionar todos los <a href=\"https:\/\/kushki.zendesk.com\/hc\/es\/articles\/1500002189222--Qu%C3%A9-documentos-debo-proveer-en-caso-de-tener-una-disputa- \">documentos necesarios<\/a> ya sea al banco adquirente o al procesador de pagos. \n\nNota: este proceso puede tardar al menos 45 días y varía dependiendo del país.\n"
  },
  {
    letter: "D",
    word: "Documento de Requisitos del Producto",
    definition: "También conocido como Product Requirement Document (PRD) en inglés. \n\nSe trata de un requerimiento funcional detallado para la elaboración de desarrollo, puede tratarse de una nueva funcionalidad o puede ser la mejora de la misma. Se deben realizar las pruebas exitosas de funcionamiento antes de su implementación final. Para más información, consulta <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/EDP\/pages\/2457895205\/Product+Requirement+Documents+PRD \">aquí<\/a> los PRDs creados por el equipo de Estrategia de Producto.\n\n"
  },
  {
    letter: "D",
    word: "Documento Nacional de Identidad (DNI)",
    definition: "El DNI es un documento emitido por el Registro Nacional de Identificación y Estado Civil (RENIEC) de Perú, con la finalidad de identificar a los peruanos. \n\nEste documento se emite a todos los ciudadanos desde su nacimiento. Hasta que el ciudadano cumple la mayoría de edad (a los 18 años), se actualiza su DNI para que pueda ejercer su derecho al sufragio.\n\nEn las credenciales actuales, el número de DNI se muestra en el costado superior derecho y en las anteriores se encuentra del lado izquierdo. Sin importar donde se encuentre, el DNI consta de 8 dígitos y está separado por un “-” del dígito verificador. \n\nImportante: para ingresarlo como Tax ID en Kushki no se debe poner el “-”, ya que es un campo alfanumérico. \n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/7d812f20-6647-4d14-9bd6-e411b46256d0#media-blob-url=true&id=49a2bccc-38ff-4bed-b91d-0075cd1cd3b0&collection=contentId-2781479533&contextId=2781479533&height=341&width=650&alt=\">Imagen 1<\/a>. Documento Nacional de Identidad Perú\nFuente de imagen:\nRevista WAPA. (2022), Documento Nacional de Identidad Perú.  <a href=\"<a href=\"https:\/\/tramitesyrequisitos.com\/venezuela\/emigrar-a-peru\/ \">Imagen<\/a>, ¿Qué significa el número que aparece a un lado del DNI? ¿Y por qué es importante?."
  },
  {
    letter: "D",
    word: "Documento Personal de Identificación (DPI)\n",
    definition: "Es un documento oficial emitido por la RENAP (Registro Nacional de las Personas) en Guatemala :flag_gt: . Este documento sirve de identificación al momento de efectuar trámites, así como ejercer su derecho al sufragio. El DPI lo pueden solicitar  los guatemaltecos y extranjeros que radican en el país. Este documento también puede ser tramitado por menores de edad con apoyo de un tutor.\n\nEl número de DPI es el mismo que el CUI (Código Único de Identificación), el cual es asignado a los guatemaltecos desde su nacimiento. El CUI consta de 13 dígitos.\n\n<a href=\"blob:https:\/\/kushki.atlassian.net\/aa677565-ab17-4411-8a8a-86a8214f528f#media-blob-url=true&id=7d97aadb-e6ff-4ad2-8d37-ae3a29aede37&collection=contentId-2781479499&contextId=2781479499&height=500&width=800&alt=\">Imagen 1<\/a>. Documento Personal de Identificación Guatemala\nFuente de imagen:\nGobierno de Guatemala. (2022). Documento Personal de Identificación Guatemala. <a href=\"https:\/\/prensa.gob.gt\/comunicado\/cui-o-dpi-para-que-sirve \">Imagen<\/a>. ¿CUI O DPI, PARA QUÉ SIRVE? ¿CUI O DPI, PARA QUÉ SIRVE?  | Recursos para Prensa - Gobierno de Guatemala.\n\n"
  },
  {
    letter: "D",
    word: "Documento Único de Identidad (DUI)",
    definition: "Es el documento único de identificación oficial en El Salvador :flag_sv: , emitido por el Registro Nacional de Personas Naturales (RNPN). Este documento lo deben tramitar todas las personas naturales mayores de edad y es opcional para los menores. \n\nCon este documento los salvadoreños se pueden identificar dentro y fuera del país. También es la identificación solicitada al momento de ejercer su derecho al sufragio. \n\nEl DUI está conformado por 8 dígitos y un número verificador separado por un guion, dando un total de 9 dígitos siguiendo el formato XXXXXXXX-X. \n\nImportante: para ingresarlo como Tax ID en Kushki no se debe poner el “-”, ya que es un campo alfanumérico. \n<a href=\"blob:https:\/\/kushki.atlassian.net\/901fef59-f6a1-4dd0-bd79-341f7feed388#media-blob-url=true&id=3e496e61-9ce6-41c8-a6cf-2f5e23fb9960&collection=contentId-2781872675&contextId=2781872675&height=253&width=765&alt=\">Imagen 1<\/a>. Documento Único de Identidad El Salvador\n\nFuente de imagen:\nWikimedia Commons. (s.f.). Documento único de Identidad El Salvador. [Imagen]. Documento Único de Identidad. CC BY-SA 3.0. <a href=\"https:\/\/commons.wikimedia.org\/w\/index.php?curid=19729693\">File:Unique Identity Document (DUI by its acronym in Spanish), official identification in El Salvador for natural persons.jpg - Wikimedia Commons<\/a>.\n\n"
  },
  {
    letter: "D",
    word: "Detekta plus",
    definition: "<strong>Detekta plus<\/strong> es una versión complementaria del servicio de <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3008954452\/Detekta+servicio+de+Certifikado?src=search \">Detekta<\/a>, el cual, además de generar un análisis diagnóstico detallado de la situación jurídica de un inmueble conocido como <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3008954452 \">Certificado de Estado Jurídico<\/a>, también ofrece un certificado con la calificación o score de las líneas de crédito, así como un certificado del histórico de tradentes y clientes para los inmuebles. \n\n<strong>Nota<\/strong>: al igual que para la solicitud del servicio básico de <strong>Detekta, Detekta plus<\/strong> requiere de un número de ticket de un <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3006726308\/Certificado+de+Tradici+n+y+Libertad+CTL \">Certificado de Tradición y Libertad<\/a> o <strong>CTL<\/strong> comprado previamente o adquirido en combo. "
  },
  {
    letter: "E",
    word: "Ecosistema de pagos",
    definition: "Es un conjunto interrelacionado de entidades y tecnologías que facilitan y procesan transacciones financieras seguras a través de internet.\n\nAlgunos de los principales actores de un ecosistema de pagos son:\n\nEl sitio web o ecommerce\n\nEl comprador\n\nLa pasarela de pagos\n\nLos procesadores\n\nEl banco emisor\n\nEl adquiriente\n\nProveedores de servicios antifraude\n\nRedes de tarjetas\n"
  },
  {
    letter: "E",
    word: "Emisor",
    definition: "Es la entidad encargada de emitir tarjetas de crédito o débito a las personas en nombre de las grandes franquicias o redes (Visa, Mastercard, etc.). Se trata de un intermediario entre los consumidores y estas redes.\n\nNota: Los emisores pueden ser bancos, instituciones financieras, asociaciones de ahorros y créditos, entidades gubernamentales o comercios minoristas."
  },
  {
    letter: "E",
    word: "End-point",
    definition: "Se refiere a las URLs que envían las API para responder a una petición. En el caso de Kushki, se refiere a los servicios que se habilitan con sus productos, ya sea para transaccionar pagos, anular una transacción, consultar un diferido, etc.\n\nUn ejemplo de un end-point podría ser:\n\n\n\/card\/v1\/bin\/{bin}\n Este se usa para consultar información de una tarjeta de crédito usando el BIN de la tarjeta."
  },
  {
    letter: "E",
    word: "Enrutamiento Inteligente",
    definition: "Se llama enrutamiento inteligente cuando se hace una combinación del hardware y del software para que se pueda asegurar que la administración de un determinado servicio sea más rápida y eficiente hacia el cliente. Actualmente hay sistemas de chats tales como emails y servicio de llamadas que utilizan esta tecnología. \n\nBeneficios:\n\nMejora la experiencia del cliente, ya que al programar el servicio, el sistema canaliza la necesidad del usuario y tiene mejores resultados evitando reprocesos.\n\nMejora los ingresos de la empresa.\n\nMinimiza el tiempo de resolución de problemas."
  },
  {
    letter: "E",
    word: "Estados financieros",
    definition: "Los estados financieros son los registros escritos que muestran las actividades comerciales y el desempeño financiero de una empresa.(1) \n\nEstos documentos incluyen el balance general de una empresa, el estado de resultados actualizado, el estado de flujo de efectivo y el estado de cambios en el patrimonio. Dicho esto, estos documentos contienen toda la información relevante sobre la empresa, su manejo y estado actual.\n\nLos estados financieros  sirven para dar una visión general de los activos, pasivos y patrimonio para accionistas, bancos y otras partes interesadas.\n\nFuente: \n\nMurphy, C. B. Financial statements: List of types and how to read them. Investopedia. <a href=\"https:\/\/www.investopedia.com\/terms\/f\/financial-statements.asp \">Financial Statements: List of Types and How to Read Them<\/a>. (Estrella, A, Trans.) (Trabajo original publicado el 3 de noviembre de 2022)"
  },
  {
    letter: "E",
    word: "Europay, MasterCard y Visa (EMV) CHIP Processing",
    definition: "EMV es un estándar que deben seguir los chips de las tarjetas bancarias, para poder ser leídos por cualquier terminal bancaria. Estos estándares están definidos por la organización EMVCo. El estándar dicta que los chips deben almacenar la información confidencial y debe poder procesar funciones de una forma segura. Todo esto con la finalidad de mejorar la seguridad de los pagos físicos. \n\nActualmente, existen dos formas de lectura de un chip mediante una terminal:\n\nTradicional: el chip debe realizar un contacto físico con la terminal para realizar la transacción \n\nContactless: la terminal utiliza una tecnología <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2836726499\/Europay+MasterCard+y+Visa+EMV+CHIP+Processing#:~:text=utiliza%20una%20tecnolog%C3%ADa-,NFC,-donde%20el%20chip \">NF<\/a>C donde el chip debe estar lo suficientemente cerca para ser leído por la terminal y que fluya la información.\n\nEn ambos casos la funcionalidad de la terminal es dar la energía suficiente al chip para procesar la transacción."
  },
  {
    letter: "E",
    word: "eWallet",
    definition: "También se conoce como billetera digital, ya que con ella puedes realizar transacciones virtuales. La eWallet, es una aplicación web o móvil que permite efectuar pagos en línea o en terminales físicas. Para poder aceptar este tipo de pagos, las máquinas deben contar con la tecnología <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2659549497 \">Comunicación de Campo Cercano<\/a> , que genera la conexión entre dispositivos móviles.\n\nPara este tipo de billeteras no siempre es necesario tener una cuenta bancaria para poder utilizarlas. Lo anterior se debe a que algunas eWallet además de efectuar una transferencia a partir de una cuenta de banco, también permiten pagar un boleto bancario que direcciona el dinero."
  },
  {
    letter: "E",
    word: "Experian",
    definition: "Es un software que provee servicios de análisis, recolección y procesamiento de información. Los usos de Experian son: reducir riesgos crediticios, prevenir fraudes y validación de identidad de los clientes finales.\n\nEn Kushki se genera una conexión con Experian, para validar las tarjetas bancarias y así ampliar la aceptación con otros Bancos y mejorar la tasa de aprobación. Este es un servicio adicional y se debe configurar desde la consola interna en el módulo de Reglas de Seguridad.\n"
  },
  {
    letter: "F",
    word: "Feature Flag",
    definition: "También conocido en español como marcadores de funcionalidades, los feature flags permiten activar o desactivar una funcionalidad específica en un software sin actualizar el código en sí. [1] Dichos marcadores pueden habilitarse en diversos entornos, y deshabilitarse en otros, con el objetivo de que se puedan implementar funcionalidades desde el entorno de pruebas o entorno maestro, sin que estas aparezcan en el entorno público."
  },
  {
    letter: "F",
    word: "Firewall"
  }, {
    letter: "F"
  }, {
    letter: "F"
  }, {
    letter: "F"
  }, {
    letter: "F"
  }, {
    letter: "F"
  } //], // GlosarioNG": [
  //   {
  //     letter: 3,
  //     word: "3DS 1.0",
  //     definition: "Acronym of Three-Domain Secure, an anti-fraud communication protocol developed by Visa and currently used by other international debit and credit card brands for virtual payments.\n\nWhen the customer completes a transaction, the issuing bank requests at least one authentication detail in addition to the CVV, such as:\n\nOne Time Password (OTP)\n\nCode sent by SMS\n\nPassword"
  //   },
  //   {
  //     letter: 3,
  //     word: "3DS 2.0",
  //     definition: "To improve the 3DS 1.0 protocol, EMVCo launched in 2016 the 3DS 2.0 protocol in, with a view to maintaining a healthy balance between transaction acceptance rate and low risk of fraud.\n\nIn the 3DS 2.0 protocol more contextual information about the paid customer is submitted for evaluation, and authentication is only required when there is a high risk of fraud. Unlike the previous protocol, the payer is not redirected to an external page.\n\nIn this version, unlike the previous version, issuers can customize their authentication rules and have different acceptance criteria for each account type.\n\n \n\nAt Kushki we are implementing Cybersource as a 3DS 1.0 and 2.0 validation provider, depending on the version implemented by the issuer."
  //   },
  //   {
  //     letter: "A",
  //     word: "ACH Colombia",
  //     definition: "It is a payment service provider in Colombia . It is made up of at least 35 financial entities and is regulated by the Financial Superintendence of Colombia. The service established between ACH Colombia and Kushki is interbank transfers (transfer in and transfer out). For more information, visit this link."
  //   },
  //   {
  //     letter: "A",
  //     word: "Automatic Billing Updater (ABU)",
  //     definition: "It is a service offered by card issuers to merchants in order to reduce declined transactions by the merchant's customers (cardholders). ABU is used when a customer makes a recurring payment to a merchant with their debit or credit card. After a period of time, it is possible that the customer's card information, such as expiration date, may be changed. If the customer fails to notify the merchant of the change in information, the next transaction will be declined. The ABU service is responsible for updating the information to the merchant to prevent the next transaction from being declined."
  //   },
  //   {
  //     letter: "A",
  //     word: "Acquirer",
  //     definition: "Bank or financial institution authorized by international franchises – such as Diners, Mastercard, or Visa–, to process the credit and debit cards that are used in a country. \n\nIt is responsible for affiliations and commercial relations with establishments that want to sell online or offline and receive credit or debit card payments by managing them."
  //   },
  //   {
  //     letter: "A",
  //     word: "Aggregator",
  //     definition: "It is a part of the payment ecosystem of each country that provides the services and technological infrastructure required for a merchant to accept card payments. The aggregator processes card payments in present and non-present models on behalf of an acquirer; this process is known as the Aggregator model.\n\nThe aggregator model provides greater security to a merchant's customers due to its strategies to avoid fraud or suspicious movements. In addition, it manages and streamlines account opening processes for merchants and improves chargeback and refund processing times."
  //   },
  //   {
  //     letter: "A",
  //     word: "Answered Surveys ",
  //     definition: "It is a type of customer satisfaction survey to determine the CSAT score in order to assess customer needs.Depending on the survey to be developed for the metric, actions to improve customer satisfaction can be evaluated. It is a quick way to contact the customer and can be conducted at any time during the product or service process.\n\nThe following types of questions are available:\n\nLiker scale questions: lead the customer to decide between two extreme options (i.e., satisfied or dissatisfied).\n\nBinary questions: questions with quick yes\/no answers (equivalent to true\/false).\n\nMultiple chise questions: questions with more response information, giving the customer more alternatives.\n\nOpen-ended questions: customers’ own answers.\n\nIn turn, there may be questions on frequency of use, as an alternative to a survey."
  //   },
  //   {
  //     letter: "A",
  //     word: "Application\n",
  //     definition: "Software that provides functions that are required by an IT service. Each application may be part of more than one IT service. An application runs on one or more servers or clients. \n\nSee also Gestión de aplicaciones ; Portafolio de aplicaciones ."
  //   },
  //   {
  //     letter: "A",
  //     word: "Apple Pay",
  //     definition: "It is a digital payment service, designed to replace the use of physical cards and be able to make payments online and even in physical store terminals and ATMs with Contactless technology- It can be used nationally and internationally.\n\nThe way it is used is through a Safari application or browser, where you must generate an account and register your compatible bank cards. With the above settings, payments can be made by bringing the device close to the bank terminal, due to NFC technology. The transaction authentication can be done by Touch ID, Face ID, PIN, or password. Apple Pay is only available for Apple-branded devices."
  //   },
  //   {
  //     letter: "A",
  //     word: "Architecture",
  //     definition: "The structure of a system or IT service, including the relationships of components to each other and to the environment they are in. Architecture also includes the standards and guidelines that guide the design and evolution of the system."
  //   },
  //   {
  //     letter: "A",
  //     word: "Attribute",
  //     definition: "A piece of information about a configuration item. Examples are name, location, version number and cost. Attributes of CIs are recorded in a configuration management database (CMDB) and maintained as part of a configuration management system (CMS).\n"
  //   },
  //   {
  //     letter: "A",
  //     word: "Authorization",
  //     definition: "The process in which the card issuer -AMEX, Diners, Mastercard or Visa- verifies the payment details and reserves the funds in the account for later capture, such as when making hotel bookings or car leasing processes. \n\nThe authorization has a limited lifetime; if an authorized payment has not been captured or canceled during this time, the authorization expires."
  //   },
  //   {
  //     letter: "A",
  //     word: "Authorization and capture",
  //     definition: "Also known as the fund reserve, check-in \/ check-out, or two-step payment. \n\nIt allows merchants to verify the availability of funds on a card and capture or debit the funds at a later time.\n\nIn Chile and Peru 🇨🇱 the maximum time allowed to perform a capture is 7 days after the authorization.\n\nIn Mexico 🇲🇽 the maximum time allowed to perform a capture is 30 days after the authorization.\n\n \n\nSynonyms: pre-authorization and capture, check-in\/check-out, or two-step payments."
  //   },
  //   {
  //     letter: "A",
  //     word: "Azure",
  //     definition: "It is a Microsoft package of products designed to solve and manage storage needs, processing, and data analysis through cloud computing services. Azure offers more than 200 tools, some of its categories are: security, networking, mixed reality, multimedia, migration, IoT (Internet of Things), identity, DevOps, developer tools, storage, and analytics. \n\nIn Kushki, we use My Access, one of the Azure services, to log in to the Console. An advantage of this service is that it allows authorization management by generating an access package and provides a higher level of security by using double authentication."
  //   },
  //   {
  //     letter: "B",
  //     word: "Back-end",
  //     definition: "In web development, it is the part that communicates with servers and databases, through programming languages, and is not accessible by users. \n\nFrom the back-end, fundamental actions are carried out for the operation of any page or application, such as:\n\nExecution of logical actions.\n\nExecution of functions.\n\nSecurity management.\n\nUpload and download of images.\n\nConnection with databases.\n\nAPI consumption.\n\nUse of web server libraries.\n\nResource Optimization."
  //   },
  //   {
  //     letter: "B",
  //     word: "Backlog",
  //     definition: "Refers to the section or section within either a work console or a task management program, such as Jira or Asana, in which all those tasks, activities, or work items that must be completed by a work team as part of the strategic planning of a product development process are \"stored\" and listed by priority criteria.\n"
  //   },
  //   {
  //     letter: "B",
  //     word: "Benchmark",
  //     definition: "It is a strategic tool where the analysis of products, services, and internal processes of the leading companies is performed and compared with those established in your company. With this information, you can have a reference to implement improvements in the processes or products of your company.\n\nTo consult the Benchmark of our competitors, click here."
  //   },
  //   {
  //     letter: "B",
  //     word: "Payment button\n",
  //     definition: "It is a payment solution of Kushki in which the business redirects their customer to a payment experience controlled by Kushki. The advantage of WebCheckout is that it allows merchants to receive payments without any integration\n\nSynonyms: Webcheckout"
  //   },
  //   {
  //     letter: "B",
  //     word: "Breaking Change",
  //     definition: "It is a change in the code of one of the products, for which it is necessary to release a new version. This type of change requires the customer to make updates to its integration code in order to continue operating. When this type of change is made, the customer is notified at least 4 months prior to its release to production, so that the customer is ready.\n\nSome examples of changes that produce a breaking change are:\n\nChange the existing permits.\n\nRemove a previously allowed parameter, response, or request field.\n\nAdd a new parameter or request field that is required and will not have default values. This could change the interaction when calling a function, since by not having the required number of fields in the request, we will not get a response or we will get an error as a response.\n\nChange to the final functionality of an endpoint.\n\nAdd a new validation.\n\nRemove or rename an endpoint, field, or enum value.\n\nChange the type of field.\n\nChange the URL format in the HTTP definition.\n\nChange to an optional field to be required in the request.\n\nIn contrast, non-breaking changes are changes that can occur without prior notification and which the consumer must support by default. Some examples of these changes are:\n\nAdd a new endpoint.\n\nAdd a new method to an existing endpoint.\n\nAdd new fields in the next scenarios:\n\nNew fields in responses. \n\nNew request field or optional parameters.\n\nNew required request field that will have default values.\n\nAdd a new value returned by an existing text field.\n\nChange the order in which the response fields are returned.\n\nAdd an optional request header.\n\nRemove redundant header fields.\n\nChange the length of the information returned by a field.\n\nChange the average response size.\n\nChange the error messages. (You should not read the error message directly in the integration, but you can read from the response or error codes).\n\nChange the response or error codes from an incorrect value to a correct value.\n\nAdd a new value to an enum."
  //   },
  //   {
  //     letter: "B",
  //     word: "Branch",
  //     definition: "Branches are identified as a branch category, i.e. they are secondary trades that are subordinate to a main trade. It is the third transactional level of the new hierarchical structure of the 3.0 console (owners > customers > branches) and it is at this level where the respective credentials are created.\n\nBranches can be of two types: \n\nCentralized branch\nIt is the one that inherits the data configured by the parent business (customer), that is, it cannot modify the information from its level. Therefore, it will have the same information configured by the customer. \n\nDecentralized Branch\nIt is the one that does not inherit the data configured by the parent business (customer), because they can configure their own information."
  //   },
  //   {
  //     letter: "C",
  //     word: "Chamber of Commerce\n",
  //     definition: "“A chamber of commerce is an association or network of entrepreneurs designed to promote and protect the interests of its members.” (1). In general, a chamber of commerce corresponds to the union of several business owners who come together under a leadership to be able to debate about policies that they defend or which they are against, promote competitiveness and formalization, in addition to promoting regional development. \n\nChambers of commerce do not have a direct role in creating laws or regulating the country in which they are located, but they do exert pressure on legislators with their organized efforts.\n\nSource:\n\nHayes, A. Chamber of Commerce: What it is, what it does, how it makes money. Investopedia. <a herf=\"https:\/\/www.investopedia.com\/terms\/c\/chamber-of-commerce.asp \">Chamber of Commerce: What It Is, What It Does, How It Makes Money .  (Estrella, A, Trans.)(Original work published on November 2, 2022)."
  //   },
  //   {
  //     letter: "C",
  //     word: "Automated Clearing House (ACH) ",
  //     definition: "It is a system that processes transactions through the use of a digital electronic network. It is considered one of the largest payment systems worldwide since, for the most part, the transactions carried out through this system correspond to low-value payment batches, with cheap rates and through which multiple transactions can be carried out at the same time.\n\nThis system guarantees the security and speed of the transactions carried out, through a variety of services, such as: credit transfers, direct deposits, payroll, tax refunds, invoices, tax payments, among other services"
  //   },
  //   {
  //     letter: "C",
  //     word: "Cancelación de un cargo",
  //     definition: "See  <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2651262430\/Anulaci+n#Voi \">Anulación | Void<\/a>   "
  //   },
  //   {
  //     letter: "C",
  //     word: "Capture",
  //     definition: "This is the collection of money by financial institutions from the resources that individuals or organizations keep in the institution. Depending on the type of account the customer has, it is likely that they will be assigned a percentage of interest as a benefit for keeping their money in the institution. Financial institutions grant this type of reward because it is in their interest to place the money captured.\n\nNote: the use of this term is not recommended because in Ecuador :flag_ec: and Colombia :flag_co: ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      it is associated with the crime of “resource capture”."
  //   },
  //   {
  //     letter: "C",
  //     word: "Capture",
  //     definition: "It is a payment already authorized by the payment processor. Reserved funds are transferred from the shopper to the merchant.\n\nKushki allows delayed captures or automatic captures. It is also possible to perform a partial capture or to cancel a payment. Captures, cancellations, and refunds are named modifications, as they modify the status of an authorized payment request.\n\n \n\nSynonyms: compensation and liquidation.\n"
  //   },
  //   {
  //     letter: "C",
  //     word: "Card not present (CNP)",
  //     definition: "It is a transaction in which neither the customer nor the customer's card is physically present. \n\nThe process works as shown below:\n\nThe customer enters the card number, the expiry date, and the CVV and the payment gateway processes those details in order to generate a token. \n\nThe token is sent to the acquirer, verified by the card issuer, and authenticated by the issuing bank.\n\nThe merchant receives a notification indicating whether the payment process was successful or declined.\n"
  //   },
  //   {
  //     letter: "C",
  //     word: "CVV (Card Verification Value)\n\n",
  //     definition: "It is the unique verification code of a credit or debit card and is used to validate its ownership. Consists of 3 to 4 digits It has different names: CVD (Card Verification Data), CCV (Card Code Verification), CVN (Card Verification Number), CSC (Card Security Code), CVVC (Card Verification Value Code, but all of them refer to the same type of code. \n\nA CVV is important because it prevents fraud and allows safer online purchases, as it can be used to verify that the person making the purchase is indeed the cardholder. \n\nSynonyms: Visual Cryptogram, CSC.\n\nCVVs can be of two types:\n\nStatic: in some types of cards, such as Visa and Mastercard, the CVV is found at the back, and consists of three digits. In others, such as the American Express, it is located at the front of the card and consists of four digits.\n\nDynamic: they are not printed on the physical card. In these cases, the CVV is variable and is retrieved through an application developed by the card issuer.\n"
  //   },
  //   {
  //     letter: "C",
  //     word: "Charge",
  //     definition: "It is the process that allows making a collection transaction to the customer. It involves the outflow of funds from their account to pay for a product or service."
  //   },
  //   {
  //     letter: "C",
  //     word: "Recurring Charges",
  //     definition: "It is a type of charge in which the buyer authorizes the merchant to automatically withdraw funds from their card, also known as One-Click Charges, in exchange for certain goods or services.\n\nNote: in Kushki, the recurring charge goes through a tokenization process beforehand.\n\nRecurring charges can be of two types:\n<a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2651193540\/Cargos+Calendarizados#Scheduled-Charges\">Cargos Calendarizados | Scheduled Charges <\/a> \n<a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2652012560\/Cargos+One+Click#One-click-Charges\">Cargos One Click<\/a>"
  //   },
  //   {
  //     letter: "C",
  //     word: "Scheduled Charges",
  //     definition: "Once the buyer accepts a recurring charge, withdrawals will be made automatically to his account at agreed intervals, until the buyer decides to cancel the service. For this purpose, there is usually a scheme that defines the dates and amount of payments to be made.\n\nScheduled payments in Kushki work like this:\n\nThe merchant captures the card information and sends it to Kushki for tokenization. In this step, the collection frequency is defined and whether it will be open or for a defined period.\n\nKushki tokenizes the information and creates a recurring charge identified by a subscription ID.\n\nPayments are made automatically with the defined periodicity."
  //   },
  //   {
  //     letter: "C",
  //     word: "One-click Charges",
  //     definition: "The cardholder’s information is authenticated the first time and then tokenized for future purchases so that shoppers can purchase goods or services without having to enter their data again since they can pay with the previously saved information with a single click.\n\nThis form of processing can be triggered by the merchant or by the cardholder. Click here for further information.\n\nSynonyms: on-demand charge.\n<a href=\"https:\/\/docs.kushki.com\/co\/en\/one-time-payments\/card\/on-demand\">here<\/a>\n"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CasesystemId",
  //     "definition ": "It refers to the unique identifier of the people consulted in the World Check One (WC1) validation process. This data is provided by the Refinitiv tool."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cashback",
  //     "definition ": "This is the word used to refer to the function of making a cash withdrawal from an authorized non-bank establishment, instead of doing it at an ATM or teller window.\n\nAn example of cashback is when you shop at the supermarket. When paying for your merchandise, many establishments give you the option of requesting a cash withdrawal. The amount you request is added to the total amount to be paid and the cashier gives you the cash requested."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cash in (Cash Payment Reception)",
  //     "definition ": "It is the option that Kushki offers to accept payments from users that prefer to make cash payments.\n\nCustomers must only have the payment reference, go to some collection point, and deposit cash. The collecting merchant automatically notifies Kushki and Kushki notifies its customer to deliver the good or service to the end customer. \nFind more information <a href=\"https:\/\/docs.kushki.com\/mx\/en\/one-time-payments\/cash\/overview\">here<\/a>."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cash out (Cash Withdrawal)",
  //     "definition ": "Kushki also allows its customers in Colombia :flag_co: to make payments to third parties either in cash or through wire transfers. \n\nThrough the API, Kushki tokenizes the user's information (name and surname) and generates a voucher, with which the end customer goes to the payment point closest to the customer’s location, shows the voucher, and withdraws the cash. This cash withdrawal process is known as cash out.\n\n To know the status of this cash out transaction, the merchant can set up a <a href=\"https:\/\/docs.kushki.com\/co\/notifications\/webhooks\/webhook-cash-out \">webhook<\/a> or check directly in the <a href=\"https:\/\/api-docs.kushkipagos.com\/api\/cash-out\/cashoutstatus \">API method<\/a>.\n"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Service catalog",
  //     "definition ": "A database or structured document with information about all live IT services, including those available for deployment. The service catalog is part of the service portfolio and contains information about two types of IT service: customer-facing services that are visible to the business; and supporting services required by the service provider to deliver customer-facing services.\n\n See also customer agreement portfolio, <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2659748303 \">Gestión del catálogo de servicios<\/a>."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Identity Card (ID)",
  //     "definition ": "It is a card with which citizens identify themselves inside and outside the country, and it is also used to exercise their right to vote.\n\nThe ID applies as a TAX ID type within the Kushki console for the following countries:\n\nCosta Rica :flag_cr: \nThe ID is issued by the Supreme Electoral Court. This ID card has a number, which is designed to identify the citizen numerically. It consists of three parts: the first corresponds to the province where the person was born, the second indicates the volume in which the citizen is registered in the Registry, and the third indicates the entry of the citizen´s birth record.\n\nNicaragua :flag_ni: \nThe ID cards are issued by the Supreme Electoral Council (CSE) to citizens of 16 years of age and older. The ID has a number, which is designed to identify the citizen numerically, and it is located at the top of the ID card."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Personal Identification Card (CIP)",
  //     "definition ": "It is a document, with which citizens of legal age are identified inside and outside the country. The ID cards are issued by the Electoral Tribunal of Panama :flag_pa: .\n\nWith this document, citizens can identify themselves in order to carry out proceedings and exercise their right to vote. The ID card has a number, which is designed to identify the citizen numerically and is located below the photograph.\nFuente de imagen."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cost center",
  //     "definition ": "A cost center serves as a transactional label whose sole purpose is to serve to organize and group transactions from the issuance of individual or bulk certificates more efficiently within the reseller console; therefore, the assignment of a transaction to any cost center does not affect it in areas such as pricing, issuance procedures or billing."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Certificate of Legal Status",
  //     "definition ": "The CEJ or EJ for its acronym in spanish, is a document that contains the conclusions of the analysis of a Certificate of Tradition and Freedom regarding the legal history of a property, but without comparing its results with title deeds or other supports. This instrument allows to generate a qualification of the legal status of the property on a scale that Kushki establishes in terms of Ideal, Acceptable and On alert, based on which the most appropriate suggestions to follow are issued according to the result obtained from the analysis of a CTL."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Certificate of Vehicle History",
  //     "definition ": "The Vehicle History (or CHV for its acronym in spanish) is an official informative document issued by the Unique National Registry of Transit (RUNT) in which the most relevant and updated information about the vehicle is detailed in order to know exhaustively all its background (among them: the history of owners, the technical-mechanical condition, the existence of judicial limitations, the physical characteristics, the existence of debts for infractions, etc.). In this way, the CHV becomes an essential, but not mandatory, document in the process of sale and purchase between private individuals."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Certificate of Tradition and Freedom ",
  //     "definition ": "The CTL for its acronym in spanish, is a public document that contains the official record of the legal life of a property. That is, it is a document that details, on the one hand, the history of the legal owners of a property, the information about its construction, its geographic location and all relevant data since the property in question was registered in the Public Registry Office. This certificate is issued only by the Superintendence of Notaries and Registry (SNR)."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "LACPI Certifier ",
  //     "definition ": "It is the person responsible for ensuring the secure and complete flow of information generated by transactions between bank cards under the standard Magnetic Stripe, EMV, Kushki Point of Sale Devices up to PROSA. It is also responsible for querying transactions made from MPOS or Smartpos devices."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Certifikado (Formerly EDD)",
  //     "definition ": "Certifikado is an original Kushki platform whose function is the issuance and management of different documents from official sources within companies, aimed only for customers and businesses in Colombia. The features of this product consist of:\n\nConsultation and individual or massive download of official documents.\n\nDelivery of data in different formats to be integrated to the companies' management systems.\n\nManagement by cost center.\n\nThis platform replaces the Document Issuance Console, better known as EDD for its acronym in Spanish."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Chargeback rate",
  //     "definition ": "This is the number of chargebacks compared to all sales made over a given period.\n\nChargeback rate = Chargeback Transactions \/ Total Approved Transactions * 100\n\nExample: Let’s suppose Kushki processes 50,000 transactions in a month, of which 250 result in a chargeback rate of 0.5% (250\/50,000*100)."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Checkout Lending (Checkout Financing) ",
  //     "definition ": "This is the possibility offered by merchants to their customers to open a line of credit at the time of purchase. Usually, a button is displayed at Checkout for the user to apply for financing for their purchase, and they are redirected to the financing platform."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Clabe (Interbank Clabe)",
  //     "definition ": " The Standardized Bank Code (Clabe) is an 18-digit number that identifies a bank account for transfers between accounts in Mexico :flag_mx: . The entity in charge of the standardization of Clabes is Banco de México.\n\nNote: sharing an interbank Clabe is 100% secure, since it is only used to receive deposits and not to make purchases.\n\nSynonyms: clabe Account"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Base Derivation Key (BDK)",
  //     "definition ": "It is a cryptographic key that is used for generated another key, and it is generally associated with the key management technique to  encrypt DUKPT (Derived Unique Key Per Transaction) transactions, since the BDK process is the one that initializes the DUKPT process.\n\nSource: \n\nPCI Security Standards Council & PIN Assessment Working Group. Information Supplement: PIN Security Requirement 18-3 - Key Blocks. PCI Security Standards Council. https:\/\/listings.pcisecuritystandards.org\/documents\/PIN_Security_Rqmt_18-3_Key_Blocks_2019.pdf (Martin, P, Trans.) (Original work published on June 1, 2019). "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Unique Population Registry Code (CURP)\n",
  //     "definition ": "It is a unique code issued by RENAPO (National Population Registry), which identifies Mexicans inside and outside the country, as well as foreigners living in Mexico.\n\nThe CURP is assigned to a Mexican from the moment of birth and consists of 18 alphanumeric characters, composed as follows:\n\nFirst letter of the first surname.\n\nFirst vowel of the first surname.\n\nFirst letter of the second last name.\n\nFirst letter of the first name.\n\nYear of birth (two digits).\n\nMonth of birth (two digits).\n\nDay of birth (two digits).\n\nGender letter (H for Male and M for Female).\n\nTwo letters corresponding to the State where the person was born.\n\nFirst inside consonant of the first surname, in case the first letter of the surname is a consonant, the second letter is taken.\n\nFirst inside consonant of the second surname, in case the first letter of the surname is a consonant, the second letter is taken.\n\nFirst inside consonant of the first name, in case the first letter of the name is a consonant, the second letter is taken.\n\nDigit or letter to avoid identical entries.\n\nCheck digit.\n\nNote: there are some exceptions where the code is adjusted to avoid high-flown words and duplicity."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Derived Unique Key Per Transaction (DUKPT)\n",
  //     "definition ": "Scheduled collections or payments are payment methods that allow you to make a payment in various installments that are defined by the company, bank or processor that offers this system. The main difference between scheduled charges and installments is that, in the case of having accepted a scheduled charge, it is necessary to pay the money or give permission for said collection to be made in the agreed period and on a specific day. It is not possible to pay a partial amount; instead, the payment must be complete.\n\nSource:\n\nPagos programados. Epayments-support.ingenico (n.d). Retrieved on November 24, 2022, from <a href=\"https:\/\/epayments-support.ingenico.com\/es\/integration-solutions\/recurring-payments\/scheduled-payments#\">Pagos programados<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CLP (Chilean Peso)\n",
  //     "definition ": "CLP is the ISO code assigned to the Chilean Peso. For more information on this currency, see the following chart:\n\nCountry using it in Kushki\n\nChile :flag_cl:\n\nExchange rate (8 abr 2022)\n\n1 USD = 815.50 CLP\n\nIssuing bank\n\nBanco Central de Chile\n\nSymbol\n\n$\n\n \n\nCoin denominations \n\n10 pesos\n\n50 pesos\n\n100 pesos\n\n500 pesos\n\n \n\n \n\nBanknote denominations\n\n1 000 pesos\n\n2 000 pesos\n\n5 000 pesos\n\n10 000 pesos\n\n20 000 pesos"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CoDi",
  //     "definition ": "It is a payment platform developed by Banco de Mexico that operates through the Interbank Electronic Payment System (SPEI, for its acronym in Spanish). CoDi specializes in <a href=\"https:\/\/docs.google.com\/document\/d\/1tcDb7EmXl2M7KqW7c2OQczcnbVnKOrC20xQRR_5ibqM\/edit#heading=h.2vupftttictv \"> QR<\/a> and <a href=\"https:\/\/docs.google.com\/document\/d\/1tcDb7EmXl2M7KqW7c2OQczcnbVnKOrC20xQRR_5ibqM\/edit#heading=h.2z524naodcsp \">NFC<\/a> (contacless). \nMás información sobre CoDi <a href=\"https:\/\/www.banxico.org.mx\/sistemas-de-pago\/codi-cobro-digital-banco-me.html \">here<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Scheduled charge ",
  //     "definition ": "Scheduled collections or payments are payment methods that allow you to make a payment in various installments that are defined by the company, bank or processor that offers this system. The main difference between scheduled charges and installments is that, in the case of having accepted a scheduled charge, it is necessary to pay the money or give permission for said collection to be made in the agreed period and on a specific day. It is not possible to pay a partial amount; instead, the payment must be complete.\n\nSource:\n\nPagos programados. Epayments-support.ingenico (n.d). Retrieved on November 24, 2022, from <a href=\"https:\/\/epayments-support.ingenico.com\/es\/integration-solutions\/recurring-payments\/scheduled-payments#:~:text=Pagos%20programados%20permite%20a%20los,programaci \">Pagos programados<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "IBAN code",
  //     "definition ": "IBAN is the acronym for International Bank Account Number [1]. It consists of a country code comprised of two letters followed by two other verification digits, to which up to thirty alphanumeric characters are added, representing the bank account number. Although a uniform length has not been established for SEPA countries, the IBAN code cannot exceed 34 characters [2].\n\nSource:\n\n[1] Liñán, E. C. (n.d.). Código IBAN y código BIC o SWIFT: qué son y para qué sirven. BBVA. Retrieved on December 27th, 2022, from <a href=\"ttps:\/\/www.bbva.com\/es\/salud-financiera\/swift-e-iban\/\">bbva<\/a> .\n\n[2] Santander, B. (n.d.). Calcular IBAN. Banco Santander. Retrieved on December 27th, from <a href=\"https:\/\/www.bancosantander.es\/particulares\/cuentas-tarjetas\/cuentas-corrientes\/calcular-iban \">Calcular IBAN<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "SWIFT code",
  //     "definition ": "The SWIFT code (Society for Worldwide Interbank Financial Telecommunication) or also called BIC code (Bank Identifier Code) is an alphanumeric series of 8 or 11 digits that identifies the receiving bank when making an international transfer [1].\n\nThis code helps make international transactions safer, faster, with fewer errors and avoids additional costs.\nSource:\n\n[1] España, B. (2019, July 11). Qué es el código SWIFT \/ BIC. BBVA School. <a href=\"https:\/\/www.bbva.es\/finanzas-vistazo\/ef\/cuentas\/codigo-swift-bic.html \">¿Qué es el código SWIFT BIC y cómo encontrarlo?<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Placement",
  //     "definition ": "This is when financial institutions put money into circulation within the economy. They do this through the money they collect through capture. This money is given to customers through credit loans and the financial institutions make a profit through the percentage of interest they charge on the loan."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Merchant on Record (MoR)",
  //     "definition ": "It is an entity responsible for managing the legal and financial aspects of an e-merchant. It is useful for merchants that for some reason cannot manage taxation themselves nor invoice customers directly. The MoR acts as an intermediary between the sellers and the end customer and is responsible for:\n\nLegal matters.\n\nPurchase conditions.\n\nRecruitment.\n\nAccounting actions.\n\nMonitor the authenticity and legality of the products being marketed."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Merchant",
  //     "definition ": "A company or individual that trades goods or services in exchange for an economic profit. A merchant uses the services of a payment gateway, such as Kushki, to process payments with credit cards securely and avoid fraud. \n\nPayment gateways encrypt the payment details - such as PAN, expiry date, CVV -, send those details to the acquirer and respond to the merchant whether the transaction is successful or not."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Settlement",
  //     "definition ": "It is an agreement made between two or more parties, where all participants are debtors and creditors at the same time, in other words, everyone has money owed and borrowed. Therefore, the settlement is made to pay off the total debts.\n\nSettlement is a common activity between banking institutions to make payments to each other or pay off debts."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Shopper",
  //     "definition ": "It is the customer of a merchant, who acquires goods or services in exchange for payment.\n\nIn Kushki, the shopper is a natural or legal person who makes a payment to one of the merchants in exchange for a good or service rendered by them."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "VAT Voucher ",
  //     "definition ": "A voucher is a document that serves as proof of the completion of an economic transaction, delivery of a good, collection, purchase, or expense, among others. [1] In the case of VAT (Value Added Tax) vouchers, it refers to the support that certifies the transactions had this tax applied to them.\n\nSource:\n\n[1] López, J. F. (April 30th, 2019). Voucher. <a href=\"https:\/\/economipedia.com\/definiciones\/proof.html \">Economipedia<\/a>. "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Near-field Communication (NFC)",
  //     "definition ": "NFC or Near Field Communication is a communication technology that allows data to be exchanged between nearby devices without any physical contact.\n\nIt allows sharing files, links or even making payments by bringing the mobile device close to a payment terminal."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Reconciliation",
  //     "definition ": "It is the process by which a merchant verifies the financial information of his\/her business. In the aggregator model, Kushki is responsible for the customer's value reconciliation, as the resource enters Kushki's accounts and then liquidates the remaining amount to the customer after applying bank fees, Kushki's fees, and taxes, depending on the country. \n\nIn the gateway model, the customer performs the process directly with the bank and can compare the authorized transactions of the bank versus those reflected in Kushki. Here is the detail of what was paid versus the bank movement."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Know Your Customer (KYC)",
  //     "definition ": "It is a set of tools, which through rules, profiles, analysis and scoring, serve to analyze a potential risk in the processing of a payment. Filtering-out the high-risk transactions allows the merchant to minimize the number of fraudulent payments and therefore, maximize the revenues. Performing an accurate risk management is extremely complex and involves a lot of data analysis.   "
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Console",
  //     "definition ": "This is Kushki's administrative portal that allows merchants to operate in general, in which they can set up different functionalities, according to the roles that have been assigned during the affiliation process. \n\nIt is made up of nine modules, through which merchants can:\n\nManage transactions\n\nSet up their businesses\n\nDefine user roles\n\nActivate and manage subscriptions\n\nSet up Smartlinks\n\nPrepare and download reports\n\nSet up payment methods\n\nDownload information to integrate Kushki into their online stores\n\nGet help from Support\n\nNote: there is also an <a href=\" https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/1093894251 \">internal console<\/a> from which we manage the creation, editing and maintenance of trades.\n\nSynonyms: backoffice.\n"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Consortium",
  //     "definition ": "Contractual economic association between two or more companies seeking to participate actively, directly, and jointly in a specific business. This new association does not give rise to the creation of a legal entity (legal person) independent of its members, so that the consortium members retain their autonomy."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Chargeback",
  //     "definition ": "A chargeback is a mechanism created to settle those charges made to a credit or debit card that are not recognized. It is a way to protect the cardholder from charges made without the cardholder’s consent. It is generated when a cardholder contacts this person’s bank directly to notify that this person does not recognize a charge made to the cardholder’s credit or debit card by a merchant. At that moment, the issuing bank of the cardholder sends the chargeback request to the bank of the merchant.\n\nThe reasons that cause the chargebacks include:\n\nCard or payment duplication.\n\nFailure to acknowledge: The customer does not remember or does not recognize the transaction.\n\nNon-delivery: The customer did not receive the goods or services for which this person paid.\n\nMisleading and dishonest behavior.\n\nFraud: The customer did not authorize or did not participate in the transaction.\n\nNote: chargebacks apply only to payments made with credit and debit cards. In Chile :flag_cl: , it only applies to payments with credit cards."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Dynamic Currency Conversion",
  //     "definition ": "A service that is provided by both acquirers and businesses so that cardholders decide whether to pay in the invoice currency (which is different from that of card) or in the card's currency of origin. It is usually provided when the cardholder is abroad or is going to transfer a payment that is not in its local currency.\n\nPayments with this service can also be converted to the preferred currency of the cardholder. For this type of payment, merchants and acquirers must provide transparency, so that they generate trust in cardholders when deciding whether to take the DCC service or not. They are also known as multi-currency payments.\n\n📚 Synonyms: multi-currency payments."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "COP (Colombian Peso)\n",
  //     "definition ": "COP is the ISO code assigned to the Colombian Peso currency. For more information on this currency, see the following chart:\n\nCountry using it in Kushki\n\nColombia :flag_co:\n\nExchange rate (8 abr 2022 )\n\n1 USD = 3782.20 COP\n\nIssuing bank\n\nBanco de la República (Central Bank of Colombia)\n\nSymbol\n\n$\n\n \n\n \n\n \n\n \n\nCoin denominations\n\n5 pesos\n\n10 pesos\n\n20 pesos\n\n50 pesos\n\n100 pesos\n\n200 pesos\n\n500 pesos\n\n1 000 pesos\n\n \n\n \n\n \n\nBanknote denominations\n\n1 000 pesos\n\n2 000 pesos\n\n5 000 pesos\n\n10 000 pesos\n\n20 000 pesos\n\n50 000 pesos\n\n100 000 pesos"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Customer Acquisition Cost (CAC)",
  //     "definition ": "Customer Acquisition Cost (CAC) represents the financial expenditure or investment required to attract a new customer to Kushki."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CRC (Costa Rican Colon)\n",
  //     "definition ": "CRC is the ISO code assigned to the Costa Rican Colon currency. For more information on this currency, see the following chart:\n\nCountry using it in Kushki\n\nCosta Rica :flag_cr: \n\nExchange rate (8 abr 2022)\n\n1 USD = 656.54 CRC\n\nIssuing bank\n\nBanco Central de Costa Rica\n\nSymbol\n\n₡\n\n \n\n \n\nCoin denominations\n\n5 colones\n\n10 colones\n\n25 colones\n\n50 colones\n\n100 colones\n\n500 colones\n\n \n\n \n\nBanknote denominations\n\n1 000 colones\n\n2 000 colones\n\n5 000 colones\n\n10 000 colones\n\n20 000 colones\n\n"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Authorization Request Cryptogram (ARQC)",
  //     "definition ": "It refers to a cryptogram generated by cards when making transactions. This cryptogram is sent to the card issuer with the transaction date, the issuer validates the data, creates its own cryptogram, and compares the results to verify if the card is authentic.\n\nSource: \n\nBoza Velez, P. E. (2018). Implantación de tecnología EMV en la Red ATM Banbif. Universidad San Ignacio de Loyola. Retrieved on November 17, 2022, from <a href=\"https:\/\/repositorio.usil.edu.pe\/server\/api\/core\/bitstreams\/89087529-5a36-4fbe-8593-b95a0076ab9f\/content \">repositorio.usil.edu<\/a>."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Authorization Response Processing Cryptogram (ARPC)",
  //     "definition ": "ENG: It is the acronym for the English term Authorization Response Processing Cryptogram, which refers to the response produced by the EMV card issuer (Europay, Mastercard, Visa) once it generates a cryptogram authorization request (or ARQC for its acronym in English). This process is carried out according to the requirement of the point of sale terminal of the merchant that requests a payment."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cross-selling",
  //     "definition ": "Cross-selling is a marketing term which implies suggesting to the customer additional or complementary products to the one they are going to buy in order to increase the volume of the sale.\n\nFor example, a customer buys a laptop in an online store. Once the purchase is completed, or while filling the shopping cart, they are shown an advertisement such as “You may also be interested in”."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CRUD",
  //     "definition ": "It is the acronym of the words Create, Read or Retrieve, Update and Delete or Destroy, which together summarize the four basic concepts or operations that a user programmer must know and execute to efficiently generate and manage databases or applications."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Payment Card Industry Compliance (PCI compliance)",
  //     "definition ": "It is a standard for payment card companies to ensure data security during transactions. Technical and operational standards are defined by the PCI Security Standards Council. \n\nThis compliance standard applies to any company that requires, stores, processes or transfers payment card data. Despite being considered mandatory, not all companies in the payment industry comply with the PCI Compliance standard."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Cybersource",
  //     "definition ": "Cybersource is a company that provides security and fraud management services for electronic businesses that have cards as a means of payment; in addition to their processing.\n\nA PCI DSS Level 1 certified service provider and a wholly owned subsidiary of VISA, Cybersource is not an acquirer; however, it works globally in more than 190 countries with around 150 acquiring processors.\n\nIt currently works with the following currencies:\n\nAUD Australian Dollar\n\nCAD Canadian Dollar\n\nCHF Swiss Franc\n\nCNY Chinese Yuan Renminbi\n\nCZK Czech Koruna\n\nDKK Danish Krone\n\nEUR Euro\n\nGBP British Pound Sterling\n\nHKD Hong Kong dollar\n\nHUF Hungarian Forint\n\nJPY Japanese Yen\n\nNOK Norwegian Krone\n\nNZD New Zealand Dollar\n\nPLN Polish Zloty\n\nSEK Swedish Krona\n\nSGD Singapore Dollar\n\nUSD (default) United States dollar\n"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Certificate of Non-Property (CNP)",
  //     "definition ": "The Certificate of Non-Property or CNP is a certificate issued by the Superintendence of Notaries and Registry (SNR) of Colombia in which it is stated that the person in whose name it is issued does not own real estate property at the national level. Thus, a CNP is a document required to obtain government subsidies or to access to housing programs."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Customer",
  //     "definition ": "The term customer refers to the trade which concentrates the company's information that is under contract with a Kushki financial entity (owner). At the customer level, the company's data, financial information, rates and discounts, processing, services, developers (Webhooks), among others, are configured."
  //   },
  //   {
  //     "letter": "C",
  //     "word": "Climate & Culture",
  //     "definition ": "It refers to an employee satisfaction survey at Kushki conducted by the Human Resources HRR area.\n\nClimate and Culture impact employee satisfaction and performance. This refers to how people within an organization feel and behave. Culture is what employees believe and value, along with how they are expected to act within the organization. The climate is how they perceive their work environment and how they feel about the company's direction and value practices.\n\nSource:\n\n1] Siddharth B. (07 de abril del 2023). Understanding the importance of organizational culture and climate: Implications for employee performance and engagement. Linkedin. Understanding the Importance of Organizational Culture and Climate: Implications for Employee Performance and Engagement  \n<a href=\"https:\/\/www.linkedin.com\/pulse\/understanding-importance-organizational-culture-bhattacharya-ph-d\/\">Understanding the Importance of Organizational Culture and Climate: Implications for Employee Performance and Engagement<\/a>"
  //   },
  //   {
  //     "letter": "C",
  //     "word": "CSAT",
  //     "definition ": "Customer Satisfaction Score(CSAT) is a metric to calculate the percentage of customer satisfaction with your product or service. The measurement can be done at any point during the process, although it is recommended to conduct it after the process has been completed, with a survey with simple and direct questions, such as:”How satisfied were you with [company\/product\/service]?”.This Survey is a quantitative metric that also provides qualitative results, in this way, identified problems can be addressed effectively and strategically, strengthening the relationship between the consumer and the company.\n\nRatings can be numerical with a scale of 1 to 10, for example, where 1 might be “totally dissatisfied” and 10 “totally satisfied”. Satisfaction level alternatives can aslo be used in terms rather than numbers.\n\nTo perform a CSAT score calculation, take the number of satisfied clients and divided by the total number of responses.\n\n(Total number of satisfied responses\/Total number of responses)*100"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Sensitive Authentication Data",
  //     "definition ": "It is the cardholder information to verify its authenticity at the time of making a card payment. These data include:\n\nCard number\n\nCVV\n\nThe identity details of the holder\n\nPIN\n\nChip\n\nBecause of their importance, and in order to provide security for purchases and cardholders' accounts, the entities that process these payments must guarantee their protection. This is achieved through the PCI DSS standards, which validate controls to protect all elements involved in the payment ecosystem."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Defect rate",
  //     "definition ": "It is a key indicator in software quality that measures the percentage of errors reported in relation to the total number of tests performed. This metric is used to improve and evaluate software quality.\n\nExample: Kushki performed 100 deployments in one sprint and reported 5 functionality incidents. Using the formula would be:\n\nDefect rate = # of reported incidents \/ total QA tests \n\nDefect rate = 5\/100 \n\nDefect rate = 0.05 or 0.5%\n\nTherefore, the defect rate for the sprint would be 5%.\n\nSource\n\n[1] Isixsigma. (20 de marzo del 2023). The benefits of tracking population defect rate for efficient quality control. iSixSigma . Recuperado el 16 de mayo del 2023. <a href=\"https:\/\/www.isixsigma.com\/dictionary\/population-defect-rate\/ \">The Benefits of Tracking Population Defect Rate for Efficient Quality Control<\/a> \n\n[2] Genevieve, M. (02 de diciembre del 2022). What is Supplier Defect Rate? Definition and Examples of the Important KPI. Thomasnet® - Product Sourcing and Supplier Discovery Platform - Find North American Manufacturers, Suppliers and Industrial Companies . <a href=\"https:\/\/www.thomasnet.com\/insights\/supplier-defect-rate\/ \">What Is Supplier Defect Rate? Definition and Examples of the Important KPI<\/a>"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Detekta (Certifikado service)",
  //     "definition ": "Detekta is an exclusive Kushki service available from the <a href=\"https:\/\/www.certifikado.com\/ \">Certifikado<\/a> website which offers an automated and detailed diagnostic analysis of the legal status of a property that is identified as a <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3005448880\/Certificado+de+Estado+Jur+dico+EJ \">Certificate of Legal Status<\/a>. This service can only be acquired either through the purchase of a combo with a <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/3006726308\/Certificado+de+Tradici+n+y+Libertad+CT \">Certificate of Tradition and Freedom<\/a> or through the prior purchase of a CTL which provides a ticket number that will be required for the acquisition of the Detekta service.\n"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "DevOps",
  //     "definition ": "DevOps is a service offered by Microsoft for the Azure virtual platform; this is the evolution of VSTS (Visual Studio Team Services). This platform can be defined as \"a set of tools and services that help manage the life cycle of software development projects\" (1).\n\nDevOps works in the cloud or locally and supports any programming language and any development platform. In addition to that, it has key services such as: dashboards (team planning, monitoring and communication), pipelines (CI\/CD tool), and software test plans.\n\nSource:\n\nGlosario. Centrosur. (September 26, 2018). Retrieved on November 8, 2022, from <a href=\"https:\/\/www.centrosur.gob.ec\/glosario\/#1537974641852-628cb02a-742 \">GLOSARIO<\/a> . \n\nTrámites Ecuador. (n.d.). Retrieved on November 8, 2022, from <a href=\"https:\/\/www.tramitesbasicos.com\/ \">Trámites Ecuador<\/a> . \n\nQué es azure DevOps. OpenWebinars.net. (October 6, 2021). Retrieved on November 24, 2022, from <a href=\"https:\/\/openwebinars.net\/blog\/que-es-azure-devops \">Qué es Azure DevOps<\/a> .  \n\n¿Qué es azure devops? Sentrio. Sentrio. (November 3, 2022). Retrieved on November 24, 2022, from <a href=\"https:\/\/sentrio.io\/blog\/que-es-azure-devops \">¿Qué es Azure DevOps? - Sentrio<\/a> .  \n\nAzure Devops Services: Microsoft Azure. Services Microsoft Azure. (n.d). Retrieved on November 24, 2022, from <a href=\"https:\/\/azure.microsoft.com\/en-us\/products\/devops\/#overview \">Azure DevOps Services | Microsoft Azure<\/a> .  "
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Interest-bearing deferred payments",
  //     "definition ": "It is the division of the total cost of purchase into monthly amounts plus an interest percentage. For example, a purchase of $900 could be divided into 3 payments of $300, plus a percentage that varies according to the card issuer. This modality is used in credit card payments.\n\nSynonyms: Deferred payment months. In Mexico :flag_mx: , they are known as interest-bearing monthly payments. "
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Interest-free deferred payments",
  //     "definition ": "It is the division of the total cost of a credit card purchase into fixed monthly amounts without the interest percentage applicable to the card used. For example, a purchase of $900 could be divided into 3 payments of $300. In other words, it is a way of fractioning the payment of the total value of a good or service into smaller parts. \n\nNote: In this type of payment, the excess fee is borne by the merchant.\n\nSynonyms: Deferred payment months. In Mexico :flag_mx: , they are known as interest-free monthly payments."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Application sizing",
  //     "definition ": "The process responsible for understanding the resource requirements needed to support a new application or a major change to an existing application. Application sizing helps to ensure that the IT service can meet its agreed service level targets for capacity and performance."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "The National Directorate of Taxes and Customs ",
  //     "definition ": "Known in Spanish as Dirección de Impuestos y Aduanas Nacionales (DIAN). It is a Colombian entity that guarantees fiscal security and the protection of the national economic public order, overseeing the administration and control of due compliance with taxes, customs, exchange obligations, exploitation rights, administration expenses on games of luck and chance, and the facilitation of foreign trade operations under conditions of equity, transparency, and legality.\n\nSource: Dirección de Impuestos y Aduanas Nacionales (n.d.). La entidad. DIAN. Retrieved on December 19, 2022, from <a href=\"https:\/\/www.dian.gov.co\/dian\/entidad\/Paginas\/Presentacion.aspx#:~:text=de%20la%20Entidad%3F-,La%20Unidad%20Administrativa%20Especial%20Direcci%C3%B3n%20de%20Impuestos%20y%20Aduanas%20Nacionales,cumplimiento%20de%20las%20obligaciones%20tributarias%2C\">Presentación<\/a>  "
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Payout",
  //     "definition ": "A payout is a sum of money — normally large— that is paid in a single transaction to an individual or entity.\n\nThis dispersion can be done through transfers or through affiliated cash collection networks.\n\nSome examples of payouts include the money given to a person as a result of a prize, or as an insurance payment. \n\nIn the payments industry, a payout can refer to the money that an online merchant transfers to its sub-merchants for the products or services they sold in a certain period of time.\n\nIn Kushki payouts are all transactions in which merchants make payments to third parties from a Kushki payout account."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Payouts",
  //     "definition ": "It consists of making a deposit of funds in a concentration account in order to process their delivery to multiple recipients in a single process. This action can be used to transfer money in cases where employees, collaborators, or service providers in a company need to be paid. \n\nNote:  it is a process that is completely decoupled from the receipt of payments because it is an outflow of money."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Credit Card Skimmer",
  //     "definition ": "It is a physical device that in most cases is integrated together with the card reading device, whose purpose is to capture, store, and illegally manipulate card payment information. It is also known as a “card theft device.”"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Point-of-sale PIN entry device (POS PED)",
  //     "definition ": "The PED is an electronic device used when making debit card, credit card, or smart card transactions. Its function is to process, accept, and encrypt in a secure and automatic way the information of the Personal Identification Number (PIN) that the cardholder has and that must be provided when making a payment at a point of sale terminal (POS), an ATM, or point-of-sale device that is integrated into a cash register.\n\nTypically, this device consists of the following components:\n\nKeyboard for PIN entry: It is responsible for reading the card, allowing the entry of the PIN so that it is securely encrypted before it is sent to the bank. PED keyboards must adhere to the rules established by the payment card industry.\n\nNote: There is an exception with smart cards. When making smart card transactions, the PIN is transferred from the PIN pad to the card and verified by the chip in the card. In this case, the PIN is not sent to the bank or card scheme for verification (Concept known as Offline PIN Verification). [1]\n\nProcessor: PEDs have functions at the software and hardware level, which ensure that the encryption keys and PIN are not visible to anyone who tries to uselessly manipulate the device. Once the cardholder enters the PIN, it is immediately encrypted and the system creates an encrypted PIN lock, which is removed as soon as the PIN pad sends the information to the point of sale.[2]"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Dispute",
  //     "definition ": "If the merchant receives a chargeback and does not agree with it, it may in some cases initiate a dispute process over the chargeback. If a dispute is allowed, the merchant must provide all necessary documents, either to the acquiring bank or to the payment processor. \n\nNote: this process can take at least 45 days and varies depending on the country. "
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Product Requirement Documents (PRD)",
  //     "definition ": "It is a detailed functional requirement for the elaboration of development, it can be a new functionality or it can be an improvement of it. Successful performance tests should be performed before final implementation. For more information, check here the PRDs created by the Product Strategy team."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "National Identification Card",
  //     "definition ": "The DNI is a document issued by the National Registry of Identification and Civil Status (RENIEC) of Peru, with the purpose of identifying Peruvians.\n\nThis document is issued to all citizens from birth. Until the citizen reaches the legal age (at 18 years of age), his or her DNI is updated so that he or she can exercise his or her right to vote.\n\nIn the current credentials, the DNI number is shown on the upper right side and in the previous ones it is on the left side. Regardless of where it is located, the DNI consists of 8 digits and is separated by a “-” from the check digit.\n\nImportant: to enter it as Tax ID in Kushki, you should not type the “-”, since it is an alphanumeric field."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "DPI (Personal Identification Document)",
  //     "definition ": "It is an official document issued by the RENAP (National Registry of Persons) in Guatemala. This document serves as identification at the moment of carrying out proceedings, as well as exercising the right to vote. The DPI can be requested by Guatemalans and foreigners living in the country. This document can also be processed by minors with the support of a guardian.\n\nThe DPI number is the same as the CUI (Unique Identification Code), which is assigned to Guatemalans from birth. The CUI consists of 13 digits.\n\nFuente de imagen:\nGobierno de Guatemala. (2022). Documento Personal de Identificación Guatemala. [Imagen]. ¿CUI O DPI, PARA QUÉ SIRVE? ¿CUI O DPI, PARA QUÉ SIRVE?  | Recursos para Prensa - Gobierno de Guatemala.\nhttps:\/\/prensa.gob.gt\/comunicado\/cui-o-dpi-para-que-sirve"
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Unique Identity Document (DUI)",
  //     "definition ": "It is the only official identification document in El Salvador, issued by the National Registry of Natural Persons (RNPN). This document must be processed by all natural persons of legal age and is optional for minors.\n\nWith this document Salvadorans can identify themselves inside and outside the country. It is also the identification requested when exercising their right to vote.\n\nThe DUI consists of 8 digits and a check digit separated by a hyphen, giving a total of 9 digits following the XXXXXXXX-X format.\n\nImportant: to enter it as Tax ID in Kushki, you should not type the “-”, since it is an alphanumeric field."
  //   },
  //   {
  //     "letter": "D",
  //     "word": "Detekta plus",
  //     "definition ": "Detekta plus is a complementary version of the Detekta service, which, in addition in addition to generating a detailed diagnostic analysis of the legal situation of a property known as Certificate of Legal Status, also offers a certificate with the rating or score of the credit lines, as well as a certificate of the history of traders and clients for the properties. \n\nNote: as for Detekta's basic service request, Detekta plus requires a ticket number from a previously purchased or combo purchased Certificate of Tradition and Liberty or CTL."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Payment Ecosystem  ",
  //     "definition ": "Is an interrelated set of entities and technologies that facilitate and process secure financial transactions over the Internet.\n\nSome of the main players in a payment ecosystem are:\n\nThe website or e-commerce\n\nThe buyer\n\nThe payment gateway\n\nThe processors\n\nThe issuing bank\n\nThe acquirer\n\nAnti-fraud service providers\n\nCard networks"
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Issuer",
  //     "definition ": "It is the entity responsible for issuing credit or debit cards to individuals on behalf of the big franchises or networks (Visa, Mastercard, etc.). It is an intermediary between consumers and these networks.\n\nNote:  Issuers may be banks, financial institutions, savings and loan associations, government entities, or retailers."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "End-point",
  //     "definition ": "It refers to the URLs sent by the API to respond to a request. In the case of Kushki, it refers to services that are enabled with its products, either to make payments, cancel a transaction, check a delayed payment, etc. \n\nAn example of an end-point might be: \n\n\n\/card\/v1\/bin\/{bin}\nThis is used to query credit card information using the card's BIN."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Intelligent Routing",
  //     "definition ": "It is defined as intelligent routing when a combination of hardware and software is made to ensure that the administration of a certain service is faster and more efficient for the client. Currently there are chat systems such as emails and calling services that use this technology.\n\nBenefits:\n\nImproves the customer experience because, when scheduling the service, the system routes the user's needs and leads to better results, avoiding reprocessing.\n\nImproves the income of the company.\n\nMinimizes problem resolution time."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Financial statements",
  //     "definition ": "Financial statements are the written records showing the business activities and financial performance of a company. (1) \n\nThese documents include a company's balance sheet, updated income statement, cash flow statement, and statement of changes in equity. That said, these documents contain all the relevant information about the company, its management, and current status.\n\nFinancial statements serve to give an overview of assets, liabilities, and equity for shareholders, banks, and other interested parties.\n\nSource:\n\nMurphy, C. B. Financial statements: List of types and how to read them. Investopedia. <a href=\"https:\/\/www.investopedia.com\/terms\/f\/financial-statements.asp \">Financial Statements: List of Types and How to Read Them<\/a> . (Estrella, A, Trans.) (Original work published on November 3, 2022)"
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Europay, MasterCard, and Visa (EMV) CHIP Processing",
  //     "definition ": "EMV is a standard that bank card chips must follow in order to be read by any bank terminal. These standards are defined by the EMVCo organization. The standard dictates that the chips must store confidential information and must be able to process functions securely. All this in order to improve the security of physical payments.\n\nCurrently, there are two ways to read a chip using a terminal:\n\nTraditional: the chip must make physical contact with the terminal to perform the transaction.\n\nContactless: the terminal uses <a href=\"https:\/\/kushki.atlassian.net\/wiki\/spaces\/DI\/pages\/2659549497\/Comunicaci+n+de+Campo+Cercano \">NFC<a\/> technology where the chip must be close enough to be read by the terminal for the information to flow.\n\nIn both cases the purpose of the terminal is to provide sufficient power to the chip to process the transaction."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "eWallet",
  //     "definition ": "It is also known as a digital wallet since you can make virtual transactions with it. The eWallet is a web or mobile application that allows you to make payments online or at physical terminals. In order to accept this type of payment, the machines must have NFC technology that generates the connection between mobile devices.\n\nFor this type of wallets, it is not always necessary to have a bank account to use them. This is because some eWallets, in addition to making a transfer from a bank account, also allow you to pay a bank slip that directs the money."
  //   },
  //   {
  //     "letter": "E",
  //     "word": "Experian",
  //     "definition ": "It is a software that provides information analysis, collection, and processing services. Experian's uses are: credit risk reduction, fraud prevention, and identity validation of end customers.\n\nKushki generates a connection with Experian, to validate bank cards and thus expand the acceptance with other Banks and improve the approval rate. This is an additional service and must be set up from the internal console in the Security Rules module."
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "F"
  //   },
  //   {
  //     "letter": "S",
  //     "word": "Service Level Agreement (SLA)",
  //     "definition ": "It is a contract between the customer and the service provider where the agreements of the service to be provided are established, including metrics, scope, and limitations. It is important to consider the possible risks and the penalties of the non-compliance of the commitments that could arise, as well as the responsibilities of each party to the agreement. The SLA can be reviewed and updated periodically according to the needs of the customer and service provider, always reaching an agreement and authorization from both parties."
  //   },
  //   {
  //     "word": "Strong Customer Authentication (SCA)",
  //     "definition ": "It is an authentication of two or more independent elements, classified into:\n\nKnowledge: something that only the user knows, for example, a unique password or a personal question.\n\nPossession: something that only the user possesses. An example that is commonly used is the mobile phone. ​​\n\nInherence: something inherent to the user, for example, a fingerprint or facial recognition.\n\nNote: the SCA is mandatory under the PSD2, which seeks to increase the security of online payments and bank transactions."
  //   },
  //   {
  //     "word": "Void",
  //     "definition ": "It is the action by which a successful charge is reversed. In Kushki this process is automatic if it is done before the cut-off time, which varies from country to country.\n\nChile :flag_cl: \n\nColombia :flag_co: \n\nEcuador :flag_ec: \n\nMexico :flag_mx: \n\nPeru :flag_pe: \n\nUp to 3 hours after the transaction is approved.\n\n20:59 on the day of the transaction.\n\n21:00 on the day of the transaction.\n\n23:59 on the day of the transaction.\n\nIt depends on the local aggregator; it can be at 20:59 or at 23:00.\n\nIf the cancellation occurs after that time, the process turns into a refund. Learn more about cancellations here.\n"
  //   }
  // ]
]
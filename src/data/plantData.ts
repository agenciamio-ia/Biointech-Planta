/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ClientBrand {
  id: string;
  name: string;
  sector: string;
  logoType: 'ecopetrol' | 'repsol' | 'oxy' | 'perenco' | 'frontera' | 'canacol' | 'qmax' | 'equion' | 'pacific' | 'veolia' | 'cerrejon' | 'serviambiental' | 'ccenergia' | 'geoingenieria' | 'omega';
}

export interface PlantCapacity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'dna' | 'droplet' | 'factory' | 'recycle';
  tag: string;
}

export interface PlantProcess {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: 'dna' | 'water' | 'sprout' | 'layers' | 'settings' | 'refresh';
  serviceUrl: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  entity: string;
  scope: string;
  type: 'iso' | 'ccs' | 'ruc';
}

export const CLIENT_BRANDS: ClientBrand[] = [
  { id: '1', name: 'Ecopetrol', sector: 'Petróleo & Gas', logoType: 'ecopetrol' },
  { id: '2', name: 'Repsol', sector: 'Energía & Upstream', logoType: 'repsol' },
  { id: '3', name: 'OXY', sector: 'Occidental Petroleum', logoType: 'oxy' },
  { id: '4', name: 'Perenco', sector: 'Oil & Gas Exploration', logoType: 'perenco' },
  { id: '5', name: 'Frontera Energy', sector: 'Exploración y Producción', logoType: 'frontera' },
  { id: '6', name: 'Canacol Energy', sector: 'Gas Natural & Energía', logoType: 'canacol' },
  { id: '7', name: 'Qmax', sector: 'Fluidos de Perforación', logoType: 'qmax' },
  { id: '8', name: 'Equión Energía', sector: 'Operaciones Llanos', logoType: 'equion' },
  { id: '9', name: 'Pacific Rubiales Energy', sector: 'Infraestructura Petrolera', logoType: 'pacific' },
  { id: '10', name: 'Veolia', sector: 'Servicios Ambientales', logoType: 'veolia' },
  { id: '11', name: 'Cerrejón', sector: 'Minería Responsable', logoType: 'cerrejon' },
  { id: '12', name: 'Serviambiental', sector: 'Gestión de Residuos', logoType: 'serviambiental' },
  { id: '13', name: 'C&C Energía', sector: 'Cuenca Llanos', logoType: 'ccenergia' },
  { id: '14', name: 'GeoIngeniería', sector: 'Geotecnia & Ambiente', logoType: 'geoingenieria' },
  { id: '15', name: 'Omega Energy', sector: 'Servicios de Campo', logoType: 'omega' },
];

export const PLANT_CAPACITIES: PlantCapacity[] = [
  {
    id: 'cap-1',
    title: 'Ingeniería Ambiental Aplicada',
    subtitle: 'Soluciones integrales in situ y ex situ',
    description: 'Diagnóstico técnico, diseño operativo y ejecución de sistemas de tratamiento para fluidos de perforación y corrientes industriales complejas.',
    icon: 'droplet',
    tag: 'Operación Casanare'
  },
  {
    id: 'cap-2',
    title: 'Procesos Biotecnológicos Especializados',
    subtitle: 'Consorcios microbianos autóctonos',
    description: 'Biorremediación asistida y biotransformación acelerada de sustratos con hidrocarburos y sales, avalados por laboratorio propio de control analítico.',
    icon: 'dna',
    tag: 'Biotecnología Propia'
  },
  {
    id: 'cap-3',
    title: 'Infraestructura Industrial',
    subtitle: 'Instalaciones de alta capacidad',
    description: 'Piscinas impermeabilizadas con geomembrana de alta densidad, sistemas de aireación forzada, unidades UTC y baterías de geocontenedores.',
    icon: 'factory',
    tag: 'Capacidad de Escala'
  },
  {
    id: 'cap-4',
    title: 'Recuperación y Gestión Ambiental',
    subtitle: 'Enfoque de economía circular',
    description: 'Tratamiento de efluentes hasta condiciones aptas para vertimiento o reúso, y estabilización de matrices sólidas para recuperación de cobertura vegetal.',
    icon: 'recycle',
    tag: 'Compromiso Sostenible'
  }
];

export const PLANT_PROCESSES: PlantProcess[] = [
  {
    id: 'proc-1',
    title: 'Biorremediación',
    subtitle: 'Biotratamiento de lodos y suelos',
    shortDescription: 'Degradación biológica acelerada de hidrocarburos totales en biopilas y celdas de tratamiento con monitoreo permanente.',
    fullDescription: 'Proceso biotecnológico especializado que aprovecha la capacidad metabólica de microorganismos degradadores de hidrocarburos para transformar contaminantes en subproductos inocuos (agua, dióxido de carbono y biomasa). En Planta Guayacán se opera bajo estrictos protocolos de aireación, balance de nutrientes (N:P) y control periódico de TPH.',
    image: 'https://biointech.co/2026/1-serv/foto-1.jpg',
    icon: 'dna',
    serviceUrl: 'https://biointech.co/2026/servicios.html#biorremediacion',
    highlights: [
      'Disminución comprobada de TPH hasta límites de cumplimiento legal',
      'Bioaumentación con cepas nativas aclimatadas a la cuenca de Casanare',
      'Monitoreo analítico periódico de humedad, temperatura, pH y conductividad'
    ],
    specs: [
      { label: 'Matriz tratada', value: 'Suelos, cortes y lodos de perforación' },
      { label: 'Mecanismo', value: 'Biopilas aireadas y biotransformación celular' },
      { label: 'Destino final', value: 'Suelos estabilizados para recuperación edáfica' }
    ]
  },
  {
    id: 'proc-2',
    title: 'Tratamiento de Aguas Industriales',
    subtitle: 'Clarificación, floculación y desinfección',
    shortDescription: 'Depuración fisicoquímica y biológica de aguas de producción y efluentes industriales para cumplir con estándares de vertimiento y reúso.',
    fullDescription: 'Tren de tratamiento multietapa concebido para efluentes complejos de origen hidrocarburífero y agroindustrial. Incluye etapas de coagulación-floculación, flotación por aire disuelto (DAF), filtración por lecho mixto y pulimento biológico, garantizando parámetros óptimos de turbidez, grasas/aceites y DQO.',
    image: 'https://biointech.co/2026/5-serv/foto-1.jpg',
    icon: 'water',
    serviceUrl: 'https://biointech.co/2026/servicios.html#aguas',
    highlights: [
      'Remoción superior al 95% de grasas, aceites e hidrocarburos libres',
      'Sistemas automatizados de dosificación química y control de pH',
      'Apto para vertimiento regulado o reincorporación en riego forestal'
    ],
    specs: [
      { label: 'Caudal operativo', value: 'Tratamiento continuo y por lotes' },
      { label: 'Tecnología', value: 'Tren fisicoquímico + pulimento en lagunas' },
      { label: 'Cumplimiento', value: 'Resolución 0631 de 2015 y normatividad vigente' }
    ]
  },
  {
    id: 'proc-3',
    title: 'Dilución Bureal o Fitoremediación',
    subtitle: 'Absorción vegetal y biofiltros',
    shortDescription: 'Implementación de humedales artificiales y macrófitas para la retención y degradación biológica de compuestos recalcitrantes.',
    fullDescription: 'Técnica fitotecnológica basada en la capacidad de especies vegetales nativas y biofiltros naturales para extraer, inmovilizar y transformar sales disueltas y trazas orgánicas en el efluente. Diseñado para integrarse armónicamente con el bioma de los Llanos Orientales y brindar una etapa pasiva de máxima seguridad ambiental.',
    image: 'https://biointech.co/2026/2-serv/foto-2.jpg',
    icon: 'sprout',
    serviceUrl: 'https://biointech.co/2026/servicios.html#fitoremediacion',
    highlights: [
      'Especies nativas adaptadas a altas cargas de electrolitos',
      'Cero consumo energético auxiliar en fase pasiva',
      'Generación de hábitats secundarios y captura de carbono'
    ],
    specs: [
      { label: 'Sistema', value: 'Humedales de flujo subsuperficial y superficial' },
      { label: 'Vegetación', value: 'Macrófitas y gramíneas nativas seleccionadas' },
      { label: 'Función', value: 'Pulimento final y estabilización de efluente' }
    ]
  },
  {
    id: 'proc-4',
    title: 'Deshidratación de Lodos y Geocontenedores',
    subtitle: 'Separación acelerada y confinamiento',
    shortDescription: 'Acondicionamiento y deshidratación de lodos industriales en tubos geotextiles de alta tenacidad con recuperación de líquido clarificado.',
    fullDescription: 'Solución de alto rendimiento para el manejo de grandes volúmenes de lodos acuosos y cortes de perforación. Mediante la inyección en línea de polímeros floculantes, los sólidos se consolidan dentro del geocontenedor mientras el agua limpia percola por los poros del textil, reduciendo radicalmente el volumen de disposición.',
    image: 'https://biointech.co/2026/3-serv/foto-2.jpg',
    icon: 'layers',
    serviceUrl: 'https://biointech.co/2026/servicios.html#geocontenedores',
    highlights: [
      'Reducción de volumen de lodo superior al 70% en tiempos breves',
      'Plataformas estancas con recolección total del percolado',
      'Económicamente eficiente y escalable para campañas de perforación'
    ],
    specs: [
      { label: 'Estructura', value: 'Tubos geotextiles de polipropileno tejido' },
      { label: 'Monitoreo', value: 'Puntas de drenaje y ensayos jar test continuos' },
      { label: 'Producto', value: 'Torta semisólida consolidada + agua clarificada' }
    ]
  },
  {
    id: 'proc-5',
    title: 'Unidad de Termocentrifugado (UTC)',
    subtitle: 'Recuperación de hidrocarburos valorizables',
    shortDescription: 'Separación mecánica y térmica trifásica (aceite, agua y sólidos) para la recuperación de crudo y minimización de pasivos.',
    fullDescription: 'Tecnología industrial de punta consistente en centrifugación de alta velocidad acoplada a un sistema de precalentamiento indirecto de vapor. Permite romper emulsiones estables de petróleo, recuperando hidrocarburo con especificación comercial y dejando una torta sólida seca lista para biotratamiento o estabilización.',
    image: 'https://biointech.co/2026/4-serv/foto-1.jpg',
    icon: 'settings',
    serviceUrl: 'https://biointech.co/2026/servicios.html#termocentrifugado',
    highlights: [
      'Recuperación de hasta el 98% de hidrocarburo libre en fondo de tanque',
      'Reducción extrema del costo de transporte y disposición final',
      'Operación industrial certificada con manifold de control de presión'
    ],
    specs: [
      { label: 'Configuración', value: 'Decanter tricanter centrífugo con caldera de vapor' },
      { label: 'Fases resultantes', value: 'Aceite recuperable / Agua para tren / Sólidos secos' },
      { label: 'Aplicación', value: 'Fondos de tanques (BSW alto) y slops petroleros' }
    ]
  },
  {
    id: 'proc-6',
    title: 'Gestión Integral y Valorización de Residuos',
    subtitle: 'Economía circular y cumplimiento legal',
    shortDescription: 'Clasificación físico-química, acondicionamiento y reincorporación de materiales industriales a ciclos productivos secundarios.',
    fullDescription: 'Gestión integral autorizada por la autoridad ambiental regional de Casanare (Corporinoquia). Abarca la recepción, muestreo estandarizado, custodia técnica y tratamiento de residuos industriales y peligrosos (RESPEL) con trazabilidad certificada de principio a fin.',
    image: 'https://biointech.co/2026/6-serv/foto-1.jpg',
    icon: 'refresh',
    serviceUrl: 'https://biointech.co/2026/servicios.html#residuos',
    highlights: [
      'Certificados oficiales de disposición y valorización ambiental',
      'Trazabilidad documental total ante autoridades ambientales',
      'Compromiso cero desvío y optimización de huella ecológica'
    ],
    specs: [
      { label: 'Licenciamiento', value: 'Resolución de operación ambiental Corporinoquia' },
      { label: 'Control', value: 'Cadena de custodia y manifiesto único de carga' },
      { label: 'Modalidades', value: 'Valorización energética, enmienda de suelos y coprocesamiento' }
    ]
  }
];

export const PLANT_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vista Aérea General de Planta Guayacán',
    category: 'Infraestructura',
    description: 'Instalación industrial estratégica en Casanare con piscinas de confinamiento, lagunas de aireación forzada y naves operativas.',
    image: 'https://biointech.co/2026/3-serv/foto-3.jpg',
    colSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'gal-2',
    title: 'Tren de Tratamiento y Piscinas de Aireación',
    category: 'Tratamiento de Fluidos',
    description: 'Manejo de aguas industriales y efluentes de producción en sistemas estancos.',
    image: 'https://biointech.co/2026/1-serv/foto-4.jpg',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'gal-3',
    title: 'Operación en Celdas de Biorremediación',
    category: 'Biotratamiento',
    description: 'Bioaumentación y oxigenación mecánica de biopilas en suelo llanero.',
    image: 'https://biointech.co/2026/1-serv/foto-6.jpg',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'gal-4',
    title: 'Infografía Técnica y Capacidad de Planta',
    category: 'Ingeniería de Procesos',
    description: 'Esquema de operaciones unitarias integradas en Planta Guayacán.',
    image: 'https://biointech.co/2026/4-serv/foto-5.jpg',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'gal-5',
    title: 'Gestión Integral y Abonos Enmendadores',
    category: 'Valorización Circular',
    description: 'Transformación de sustratos orgánicos tratados en abonos y enmiendas edáficas.',
    image: 'https://biointech.co/2026/wp-content/uploads/banner-servicios-biointech-abonos-agenciamio-v12b-1.jpg',
    colSpan: 'md:col-span-1'
  },
  {
    id: 'gal-6',
    title: 'Supervisión Técnica y Monitoreo Analítico',
    category: 'Control Operativo',
    description: 'Personal de campo e ingenieros en maniobras continuas de supervisión de calidad.',
    image: 'https://biointech.co/2026/images/biointech-galeria-v1.jpg',
    colSpan: 'md:col-span-2'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    code: 'ISO 9001:2015',
    title: 'Sistema de Gestión de la Calidad',
    entity: 'Norma Internacional de Gestión',
    scope: 'Prestación de servicios de ingeniería ambiental, biorremediación, tratamiento de fluidos y manejo integral de residuos industriales.',
    type: 'iso'
  },
  {
    id: 'cert-2',
    code: 'ISO 14001:2015',
    title: 'Sistema de Gestión Ambiental',
    entity: 'Gestión y Desempeño Ecológico',
    scope: 'Control de impactos ambientales, prevención de la contaminación y uso eficiente de los recursos en la operación de Planta Guayacán.',
    type: 'iso'
  },
  {
    id: 'cert-3',
    code: 'ISO 45001:2018',
    title: 'Seguridad y Salud en el Trabajo',
    entity: 'Estándar Internacional SST',
    scope: 'Condiciones seguras para colaboradores y contratistas, mitigación sistemática de riesgos y cultura de cero accidentes en campo.',
    type: 'iso'
  },
  {
    id: 'cert-4',
    code: 'RUC',
    title: 'Registro Uniforme para Contratistas',
    entity: 'Consejo Colombiano de Seguridad (CCS)',
    scope: 'Evaluación y calificación superior en el Sistema de Gestión en Seguridad, Salud Ocupacional y Ambiente para el sector de hidrocarburos.',
    type: 'ruc'
  },
  {
    id: 'cert-5',
    code: 'CCS',
    title: 'Consejo Colombiano de Seguridad',
    entity: 'Empresa Afiliada Activa',
    scope: 'Respaldo técnico, actualización normativa y auditoría permanente de estándares de seguridad industrial y protección ambiental en Colombia.',
    type: 'ccs'
  }
];

export const CORPORATE_CONTACT = {
  plantName: 'Planta Guayacán',
  operator: 'BIOINTECH S.A.S.',
  nit: 'NIT 900.228.182-4',
  logoUrl: 'https://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png',
  heroBannerUrl: 'https://biointech.co/2026/wp-content/uploads/biointech-banner-principal-v2-e1793204476886.png',
  clientsInfographicUrl: 'https://biointech.co/2026/wp-content/uploads/infografia-Mas-de-20-anos-de-confianza.png',
  teamBannerUrl: 'https://biointech.co/2026/wp-content/uploads/banner-biointech-horiz-22.jpg',
  officeBogota: 'Bogotá Sabana Norte, Colombia',
  plantLocation: 'Planta Guayacán • Casanare, Colombia',
  email: 'analista.administrativo@biointech.co',
  phone: '+57 311 288 8995',
  whatsappUrl: 'https://api.whatsapp.com/send?phone=+573112888995&text=Vengo%20de%20la%20Web%20Biointech%20y%20deseo%20asesor%C3%ADa!',
  navLinks: [
    { name: 'Inicio', href: 'https://biointech.co/2026/biointech.html', active: false },
    { name: 'Nosotros', href: 'https://biointech.co/2026/nosotros.html', active: false },
    { name: 'Servicios', href: 'https://biointech.co/2026/servicios.html', active: false },
    { name: 'Planta', href: 'https://biointech.co/2026/planta.html', active: true },
    { name: 'Certificados', href: 'https://biointech.co/2026/certificados.html', active: false },
    { name: 'Contacto', href: 'https://biointech.co/2026/biointech.html#contacto', active: false }
  ]
};


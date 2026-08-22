const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const langButtons = document.querySelectorAll('.lang-btn');

const translationCatalog = {
  metaDescription: ['NOVART WOODWORK crea muebles y soluciones de carpintería fina hechas a medida para espacios elegantes, funcionales y con personalidad.', 'NOVART WOODWORK creates custom furniture and fine woodworking solutions designed for elegant, functional, and distinctive spaces.'],
  pageTitle: ['NOVART WOODWORK | Carpintería fina', 'NOVART WOODWORK | Fine woodworking'],
  nav: {
    home: ['Inicio', 'Home'],
    about: ['Nosotros', 'About'],
    services: ['Servicios', 'Services'],
    projects: ['Proyectos', 'Projects'],
    contact: ['Contacto', 'Contact']
  },
  hero: {
    eyebrow: ['Carpintería fina · diseño artesanal', 'Fine woodworking · handcrafted design'],
    title: ['Espacios que respiran madera, arte y precisión.', 'Spaces that breathe wood, art and precision.'],
    lead: ['Diseñamos muebles a medida, carpintería arquitectónica y piezas exclusivas que elevan la identidad de cada proyecto.', 'We design custom furniture, architectural woodworking and exclusive pieces that elevate the identity of each project.'],
    ctaPrimary: ['Solicita una cotización', 'Request a quote'],
    ctaSecondary: ['Ver proyectos', 'View projects'],
    cardLabel: ['Diseño hecho a medida', 'Tailor-made design'],
    cardTitle: ['Más de 15 años creando piezas que perduran.', '15+ years crafting pieces that last.'],
    statProjects: ['proyectos entregados', 'projects delivered'],
    statMaterial: ['madera natural', 'natural wood']
  },
  about: {
    kicker: ['Nuestra esencia', 'Our essence'],
    title: ['La madera, trabajada con intención y detalle.', 'Wood, shaped with intention and detail.'],
    p1: ['En NOVART WOODWORK combinamos tradición artesanal y criterio contemporáneo para crear piezas funcionales, cálidas y de gran longevidad. Cada proyecto nace con una atención minuciosa al grain, la textura, la proporción y la experiencia de uso.', 'At NOVART WOODWORK we combine artisanal tradition with contemporary vision to create functional, warm and long-lasting pieces. Each project begins with careful attention to grain, texture, proportion and everyday experience.'],
    p2: ['Desde una mesa central de reunión hasta una solución arquitectónica a escala, cada línea está pensada para equilibrar belleza material, diseño racional y confort cotidiano.', 'From a central meeting table to a full architectural solution, every line is designed to balance material beauty, rational design and everyday comfort.'],
    feature1: ['Diseño a medida para viviendas y espacios comerciales.', 'Custom design for residential and commercial spaces.'],
    feature2: ['Selección cuidadosa de maderas nobles y acabados duraderos.', 'Careful selection of premium wood and durable finishes.'],
    feature3: ['Proceso artesanal con control de calidad en cada etapa.', 'Artisanal process with strict quality control at every stage.'],
    visual1: ['Materiales nobles', 'Noble materials'],
    visual2: ['Acabados impecables', 'Impeccable finishes']
  },
  services: {
    kicker: ['Servicios', 'Services'],
    title: ['Soluciones de carpintería para cada necesidad.', 'Woodworking solutions for every need.'],
    card1Title: ['Muebles a medida', 'Custom furniture'],
    card1Text: ['Cocinas, closets, desks, bibliotecas y piezas personalizadas para espacios únicos y funcionales.', 'Kitchens, closets, desks, libraries and tailored pieces for unique and functional spaces.'],
    card2Title: ['Carpintería arquitectónica', 'Architectural woodworking'],
    card2Text: ['Soluciones integradas para reformas, revestimientos, detalles y elementos estructurales con un acabado premium.', 'Integrated solutions for renovations, cladding, details and structural elements with a premium finish.'],
    card3Title: ['Diseños exclusivos', 'Exclusive designs'],
    card3Text: ['Proyectos pensados a partir de tu estilo, arquitectura y forma de vivir, con una impronta sofisticada y atemporal.', 'Projects created from your style, architecture and way of living, with a sophisticated and timeless character.']
  },
  projects: {
    kicker: ['Proyectos', 'Projects'],
    title: ['Una selección de trabajos que reflejan nuestra esencia.', 'A selection of works that reflect our essence.'],
    item1Type: ['Residencial', 'Residential'],
    item1Title: ['Living en roble natural', 'Natural oak living room'],
    item2Type: ['Arquitectura', 'Architecture'],
    item2Title: ['Paneles de pared y detalles interiores', 'Wall panels and interior details'],
    item3Type: ['Comercial', 'Commercial'],
    item3Title: ['Recepción boutique de madera', 'Boutique wood reception'],
    item4Type: ['Personalizado', 'Custom'],
    item4Title: ['Escritorio de trabajo de alto diseño', 'High-end work desk']
  },
  contact: {
    kicker: ['Contacto', 'Contact'],
    title: ['Hablemos sobre tu próximo proyecto.', 'Let’s talk about your next project.'],
    text: ['Ya sea una pieza única o una intervención integral, te acompañamos en cada etapa para convertir tus ideas en materialidad.', 'Whether it is a unique piece or a full-scale intervention, we guide you through every stage to bring your ideas to life in material form.'],
    phoneLabel: ['Teléfono:', 'Phone:'],
    emailLabel: ['Email:', 'Email:'],
    locationLabel: ['Ubicación:', 'Location:']
  },
  form: {
    name: ['Nombre', 'Name'],
    email: ['Email', 'Email'],
    project: ['Proyecto', 'Project'],
    message: ['Mensaje', 'Message'],
    namePlaceholder: ['Tu nombre', 'Your name'],
    emailPlaceholder: ['tu@email.com', 'you@email.com'],
    projectPlaceholder: ['Ej: Cocina a medida', 'e.g. Custom kitchen'],
    messagePlaceholder: ['Cuéntanos qué te gustaría crear...', 'Tell us what you would like to create...'],
    submit: ['Enviar consulta', 'Send inquiry']
  },
  footer: {
    about: ['Nosotros', 'About'],
    services: ['Servicios', 'Services'],
    contact: ['Contacto', 'Contact']
  },
  menuLabel: ['Abrir menú de navegación', 'Open navigation menu']
};

/**
 * Obtiene el índice de idioma correspondiente al catálogo de traducciones.
 *
 * @param {string} lang Código ISO del idioma.
 * @returns {number} Índice de idioma del array de traducciones.
 */
function getLocaleIndex(lang) {
  return lang === 'en' ? 1 : 0;
}

/**
 * Construye un bloque de traducciones a partir de un conjunto de textos por idioma.
 *
 * @param {{ [key: string]: string[] }} section Sección que contiene traducciones por idioma.
 * @param {number} localeIndex Índice de idioma activo.
 * @returns {{ [key: string]: string }} Objeto con la sección traducida.
 */
function buildSection(section, localeIndex) {
  return Object.fromEntries(
    Object.entries(section).map(([key, values]) => [key, values[localeIndex]])
  );
}

/**
 * Crea un conjunto de textos traducidos para un idioma concreto a partir del catálogo base.
 *
 * @param {string} lang Código ISO del idioma a resolver.
 * @returns {{[key: string]: any}} Objeto de traducciones del idioma solicitado.
 */
function buildTranslations(lang) {
  const localeIndex = getLocaleIndex(lang);

  return {
    metaDescription: translationCatalog.metaDescription[localeIndex],
    pageTitle: translationCatalog.pageTitle[localeIndex],
    nav: buildSection(translationCatalog.nav, localeIndex),
    hero: buildSection(translationCatalog.hero, localeIndex),
    about: buildSection(translationCatalog.about, localeIndex),
    services: buildSection(translationCatalog.services, localeIndex),
    projects: buildSection(translationCatalog.projects, localeIndex),
    contact: buildSection(translationCatalog.contact, localeIndex),
    form: buildSection(translationCatalog.form, localeIndex),
    footer: buildSection(translationCatalog.footer, localeIndex),
    menuLabel: translationCatalog.menuLabel[localeIndex]
  };
}

const translations = {
  es: buildTranslations('es'),
  en: buildTranslations('en')
};

/**
 * Obtiene el idioma actualmente activo en el documento.
 *
 * @returns {string} Código ISO del idioma activo o 'es' por defecto.
 */
function getCurrentLanguage() {
  return document.documentElement.lang || 'es';
}

/**
 * Actualiza el contenido visible, metadatos y estado del selector de idioma.
 *
 * @param {string} lang Código de idioma a activar, por ejemplo 'es' o 'en'.
 * @returns {void}
 */
function setLanguage(lang) {
  const selected = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', selected.metaDescription);
  }

  document.title = selected.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const keyPath = element.dataset.i18n.split('.');
    let value = selected;
    for (const key of keyPath) {
      value = value && value[key];
    }
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const keyPath = element.dataset.i18nPlaceholder.split('.');
    let value = selected;
    for (const key of keyPath) {
      value = value && value[key];
    }
    if (value) {
      element.placeholder = value;
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (navToggle) {
    navToggle.setAttribute('aria-label', selected.menuLabel);
  }
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    setLanguage(lang);
  });
});

const currentYear = document.getElementById('year');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button[type="submit"]');

    if (button) {
      const lang = getCurrentLanguage();
      const defaultText = translations[lang]?.form?.submit || 'Enviar consulta';
      const sentText = lang === 'en' ? 'Message sent' : 'Consulta enviada';
      button.dataset.defaultText = defaultText;
      button.textContent = sentText;
      button.disabled = true;

      setTimeout(() => {
        button.textContent = button.dataset.defaultText || defaultText;
        button.disabled = false;
        contactForm.reset();
      }, 1800);
    }
  });
}

setLanguage('es');

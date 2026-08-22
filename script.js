const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const langButtons = document.querySelectorAll('.lang-btn');

const translations = {
  es: {
    metaDescription: 'NOVART WOODWORK crea muebles y soluciones de carpintería fina hechas a medida para espacios elegantes, funcionales y con personalidad.',
    pageTitle: 'NOVART WOODWORK | Carpintería fina',
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      eyebrow: 'Carpintería fina · diseño artesanal',
      title: 'Espacios que respiran madera, arte y precisión.',
      lead: 'Diseñamos muebles a medida, carpintería arquitectónica y piezas exclusivas que elevan la identidad de cada proyecto.',
      ctaPrimary: 'Solicita una cotización',
      ctaSecondary: 'Ver proyectos',
      cardLabel: 'Diseño hecho a medida',
      cardTitle: 'Más de 15 años creando piezas que perduran.',
      statProjects: 'proyectos entregados',
      statMaterial: 'madera natural'
    },
    about: {
      kicker: 'Nuestra esencia',
      title: 'La madera, trabajada con intención y detalle.',
      p1: 'En NOVART WOODWORK combinamos tradición artesanal y criterio contemporáneo para crear piezas funcionales, cálidas y de gran longevidad. Cada proyecto nace con una atención minuciosa al grain, la textura, la proporción y la experiencia de uso.',
      p2: 'Desde una mesa central de reunión hasta una solución arquitectónica a escala, cada línea está pensada para equilibrar belleza material, diseño racional y confort cotidiano.',
      feature1: 'Diseño a medida para viviendas y espacios comerciales.',
      feature2: 'Selección cuidadosa de maderas nobles y acabados duraderos.',
      feature3: 'Proceso artesanal con control de calidad en cada etapa.',
      visual1: 'Materiales nobles',
      visual2: 'Acabados impecables'
    },
    services: {
      kicker: 'Servicios',
      title: 'Soluciones de carpintería para cada necesidad.',
      card1Title: 'Muebles a medida',
      card1Text: 'Cocinas, closets, desks, bibliotecas y piezas personalizadas para espacios únicos y funcionales.',
      card2Title: 'Carpintería arquitectónica',
      card2Text: 'Soluciones integradas para reformas, revestimientos, detalles y elementos estructurales con un acabado premium.',
      card3Title: 'Diseños exclusivos',
      card3Text: 'Proyectos pensados a partir de tu estilo, arquitectura y forma de vivir, con una impronta sofisticada y atemporal.'
    },
    projects: {
      kicker: 'Proyectos',
      title: 'Una selección de trabajos que reflejan nuestra esencia.',
      item1Type: 'Residencial',
      item1Title: 'Living en roble natural',
      item2Type: 'Arquitectura',
      item2Title: 'Paneles de pared y detalles interiores',
      item3Type: 'Comercial',
      item3Title: 'Recepción boutique de madera',
      item4Type: 'Personalizado',
      item4Title: 'Escritorio de trabajo de alto diseño'
    },
    contact: {
      kicker: 'Contacto',
      title: 'Hablemos sobre tu próximo proyecto.',
      text: 'Ya sea una pieza única o una intervención integral, te acompañamos en cada etapa para convertir tus ideas en materialidad.',
      phoneLabel: 'Teléfono:',
      emailLabel: 'Email:',
      locationLabel: 'Ubicación:'
    },
    form: {
      name: 'Nombre',
      email: 'Email',
      project: 'Proyecto',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      projectPlaceholder: 'Ej: Cocina a medida',
      messagePlaceholder: 'Cuéntanos qué te gustaría crear...',
      submit: 'Enviar consulta'
    },
    footer: {
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto'
    },
    menuLabel: 'Abrir menú de navegación'
  },
  en: {
    metaDescription: 'NOVART WOODWORK creates custom furniture and fine woodworking solutions designed for elegant, functional, and distinctive spaces.',
    pageTitle: 'NOVART WOODWORK | Fine woodworking',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Fine woodworking · handcrafted design',
      title: 'Spaces that breathe wood, art and precision.',
      lead: 'We design custom furniture, architectural woodworking and exclusive pieces that elevate the identity of each project.',
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'View projects',
      cardLabel: 'Tailor-made design',
      cardTitle: '15+ years crafting pieces that last.',
      statProjects: 'projects delivered',
      statMaterial: 'natural wood'
    },
    about: {
      kicker: 'Our essence',
      title: 'Wood, shaped with intention and detail.',
      p1: 'At NOVART WOODWORK we combine artisanal tradition with contemporary vision to create functional, warm and long-lasting pieces. Each project begins with careful attention to grain, texture, proportion and everyday experience.',
      p2: 'From a central meeting table to a full architectural solution, every line is designed to balance material beauty, rational design and everyday comfort.',
      feature1: 'Custom design for residential and commercial spaces.',
      feature2: 'Careful selection of premium wood and durable finishes.',
      feature3: 'Artisanal process with strict quality control at every stage.',
      visual1: 'Noble materials',
      visual2: 'Impeccable finishes'
    },
    services: {
      kicker: 'Services',
      title: 'Woodworking solutions for every need.',
      card1Title: 'Custom furniture',
      card1Text: 'Kitchens, closets, desks, libraries and tailored pieces for unique and functional spaces.',
      card2Title: 'Architectural woodworking',
      card2Text: 'Integrated solutions for renovations, cladding, details and structural elements with a premium finish.',
      card3Title: 'Exclusive designs',
      card3Text: 'Projects created from your style, architecture and way of living, with a sophisticated and timeless character.'
    },
    projects: {
      kicker: 'Projects',
      title: 'A selection of works that reflect our essence.',
      item1Type: 'Residential',
      item1Title: 'Natural oak living room',
      item2Type: 'Architecture',
      item2Title: 'Wall panels and interior details',
      item3Type: 'Commercial',
      item3Title: 'Boutique wood reception',
      item4Type: 'Custom',
      item4Title: 'High-end work desk'
    },
    contact: {
      kicker: 'Contact',
      title: 'Let’s talk about your next project.',
      text: 'Whether it is a unique piece or a full-scale intervention, we guide you through every stage to bring your ideas to life in material form.',
      phoneLabel: 'Phone:',
      emailLabel: 'Email:',
      locationLabel: 'Location:'
    },
    form: {
      name: 'Name',
      email: 'Email',
      project: 'Project',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      projectPlaceholder: 'e.g. Custom kitchen',
      messagePlaceholder: 'Tell us what you would like to create...',
      submit: 'Send inquiry'
    },
    footer: {
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },
    menuLabel: 'Open navigation menu'
  }
};

function getCurrentLanguage() {
  return document.documentElement.lang || 'es';
}

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

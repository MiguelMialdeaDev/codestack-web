import { getPermalink } from './utils/permalinks';

// ⚠️ SUSTITUIR cuando WhatsApp Business esté listo (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = '34600000000';
const WHATSAPP_DEFAULT_MSG_ES = 'Hola Codestack, me interesa hablar sobre un proyecto.';
const WHATSAPP_DEFAULT_MSG_EN = 'Hi Codestack, I would like to talk about a project.';

export const whatsappLink = (msg: string = WHATSAPP_DEFAULT_MSG_ES): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// =================================================
// ES (default locale, no prefix)
// =================================================
export const headerData = {
  links: [
    { text: 'Servicios', href: getPermalink('/services') },
    { text: 'Casos', href: getPermalink('/casos') },
    { text: 'Sobre', href: getPermalink('/about') },
    { text: 'Contacto', href: getPermalink('/contact') },
  ],
  actions: [
    {
      text: 'WhatsApp',
      href: whatsappLink('Hola Codestack, vengo de tu web y quiero hablar de un proyecto.'),
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Codestack',
      links: [
        { text: 'Servicios', href: getPermalink('/services') },
        { text: 'Casos', href: getPermalink('/casos') },
        { text: 'Sobre', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Qué hacemos',
      links: [
        { text: 'Webs a medida', href: getPermalink('/services#web') },
        { text: 'Apps móviles', href: getPermalink('/services#movil') },
        { text: 'Automatización', href: getPermalink('/services#automation') },
        { text: 'SEO local', href: getPermalink('/services#seo') },
      ],
    },
    {
      title: 'Otros proyectos',
      links: [
        { text: 'WarrantyVault (app móvil)', href: getPermalink('/casos/warrantyvault') },
        { text: 'Compose Forms (OSS)', href: getPermalink('/casos/compose-forms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: whatsappLink() },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/MiguelMialdeaDev' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:miguelmialdeamonzo@gmail.com' },
  ],
  footNote: `
    <span class="font-bold">Codestack</span> · Hecho con Astro + Tailwind · © ${new Date().getFullYear()}
  `,
};

// =================================================
// EN (prefix /en/)
// =================================================
export const headerDataEn = {
  links: [
    { text: 'Services', href: getPermalink('/en/services') },
    { text: 'Cases', href: getPermalink('/en/cases') },
    { text: 'About', href: getPermalink('/en/about') },
    { text: 'Contact', href: getPermalink('/en/contact') },
  ],
  actions: [
    {
      text: 'WhatsApp',
      href: whatsappLink('Hi Codestack, I came from your website and would like to talk about a project.'),
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
      variant: 'primary',
    },
  ],
};

export const footerDataEn = {
  links: [
    {
      title: 'Codestack',
      links: [
        { text: 'Services', href: getPermalink('/en/services') },
        { text: 'Cases', href: getPermalink('/en/cases') },
        { text: 'About', href: getPermalink('/en/about') },
        { text: 'Contact', href: getPermalink('/en/contact') },
      ],
    },
    {
      title: 'What we do',
      links: [
        { text: 'Custom websites', href: getPermalink('/en/services#web') },
        { text: 'Mobile apps', href: getPermalink('/en/services#mobile') },
        { text: 'Automation', href: getPermalink('/en/services#automation') },
        { text: 'Local SEO', href: getPermalink('/en/services#seo') },
      ],
    },
    {
      title: 'Other projects',
      links: [
        { text: 'WarrantyVault (mobile app)', href: getPermalink('/en/cases/warrantyvault') },
        { text: 'Compose Forms (OSS)', href: getPermalink('/en/cases/compose-forms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/en/terms') },
    { text: 'Privacy policy', href: getPermalink('/en/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: whatsappLink(WHATSAPP_DEFAULT_MSG_EN) },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/MiguelMialdeaDev' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:miguelmialdeamonzo@gmail.com' },
  ],
  footNote: `
    <span class="font-bold">Codestack</span> · Built with Astro + Tailwind · © ${new Date().getFullYear()}
  `,
};

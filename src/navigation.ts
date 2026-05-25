import { getPermalink } from './utils/permalinks';

// ⚠️ SUSTITUIR cuando WhatsApp Business esté listo (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = '34600000000';
const WHATSAPP_DEFAULT_MSG = 'Hola Codestack, me interesa hablar sobre un proyecto.';

export const whatsappLink = (msg: string = WHATSAPP_DEFAULT_MSG): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const headerData = {
  links: [
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Casos',
      href: getPermalink('/casos'),
    },
    {
      text: 'Sobre',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
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
      title: 'Sectores',
      links: [
        { text: 'Hostelería', href: getPermalink('/casos') },
        { text: 'Comercio local', href: getPermalink('/casos') },
        { text: 'Servicios profesionales', href: getPermalink('/casos') },
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

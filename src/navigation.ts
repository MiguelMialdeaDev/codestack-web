import { getPermalink } from './utils/permalinks';

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
      text: 'Pide presupuesto',
      href: getPermalink('/contact'),
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
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/MiguelMialdeaDev' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:miguelmialdeamonzo@gmail.com' },
  ],
  footNote: `
    <span class="font-bold">Codestack</span> · Hecho con Astro + Tailwind · © ${new Date().getFullYear()}
  `,
};

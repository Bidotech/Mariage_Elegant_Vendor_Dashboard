// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mariage Élégant Vendor Guide',
  tagline: 'Vendor dashboard documentation',
  url: 'https://bidotech.github.io',
  baseUrl: '/Mariage_Elegant_Vendor_Dashboard/',
  organizationName: 'Bidotech',
  projectName: 'Mariage_Elegant_Vendor_Dashboard',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  future: {v4: true},

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-CA'},
      fr: {label: 'Français', htmlLang: 'fr-CA'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Bidotech/Mariage_Elegant_Vendor_Dashboard/edit/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vendor Dashboard',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'vendorGuide',
          position: 'left',
          label: 'Guide',
        },
        {type: 'localeDropdown', position: 'right'},
        {
          href: 'https://github.com/Bidotech/Mariage_Elegant_Vendor_Dashboard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Leads', to: '/leads'},
            {label: 'Instagram', to: '/instagram'},
          ],
        },
        {
          title: 'Source',
          items: [
            {
              label: 'GitHub repository',
              href: 'https://github.com/Bidotech/Mariage_Elegant_Vendor_Dashboard',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mariage Élégant.`,
    },
    docs: {
      sidebar: {hideable: true, autoCollapseCategories: true},
    },
  },
};

export default config;

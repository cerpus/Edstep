const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Edstep',
  tagline: 'Edstep is the most versatile option for students, course instructors and course designers to take and create highly interactive online courses',
  url: 'https://docs.edstep.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cerpus',
  projectName: 'Edstep',
  themeConfig: {
    navbar: {
      title: 'Edstep',
      logo: {
        alt: 'Edlib Logo',
        src: 'img/edstep-logo.png',
      },
      items: [
        {to: '/docs/intro', label: 'Documentation', position: 'left'},
        {to: '/docs/tutorial-basics/intro', label: 'Tutorials', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/careers', label: 'Careers', position: 'left'},
        {to: '/contact-us', label: 'Contact Us', position: 'left'},
        {
          href: 'https://github.com/cerpus/Edstep',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Features',
              to: '/docs/product/features',
            },
            {
              label: 'Roadmap',
              to: '/docs/product/roadmap',
            },
            {
              label: 'Ecosystem',
              to: '/docs/product/ecosystem',
            },
            {
              label: 'Frequently asked questions',
              to: '/docs/product/faq',
            },
          ],
        },
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Create a course',
              to: '/docs/tutorials/create-course',
            },
            {
              label: 'Create a resource',
              to: '/docs/tutorials/create-resource',
            },
            {
              label: 'Configure a course',
              to: '/docs/tutorials/configure-course',
            },
            {
              label: 'Publish a course',
              to: '/docs/tutorials/publish-course',
            },
            {
              label: 'Set-up Course Payments',
              to: '/docs/tutorials/course-payments',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Getting started',
              to: '/docs/developers/getting-started',
            },
            {
              label: 'Architecture',
              to: '/docs/developers/architecture',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Contributing',
              to: '/docs/community/contributing',
            },
            {
              label: 'Support',
              to: '/docs/community/support',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Careers',
              to: '/careers',
            },
            {
              label: 'Contact us',
              to: '/contact-us',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cerpus/Edlib',
            },
          ],
        },
      ],
      copyright: `Copyright &copy; ${new Date().getFullYear()} Edstep &mdash; <a href="https://cerpus.com/">Cerpus</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

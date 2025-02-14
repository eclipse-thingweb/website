// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eclipse Thingweb | Leverage web standards for better interoperability',
  tagline: 'Eclipse Thingweb™ offers components for making protocol-agnostic IoT solutions at scale by leveraging the W3C WoT standards, no matter if improving an existing solution or building a new one.',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://thingweb.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eclipse-thingweb', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Mono:wght@400;500;700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700',
  ],
  scripts: [
    {
      src: 'https://api.eclipse.org/adopters/assets/js/eclipsefdn.adopters.js',
      async: false,
    },
    {
      src: '/js/consentBanner.js',
      async: false,
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/eclipse-thingweb/website',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/hands-on/articles',
            from: '/hands-on',
          },
          {
            to: '/hands-on/articles',
            from: '/hands-on.html',
          },
          {
            to: '/hands-on/articles/intro-raspberry',
            from: '/hands-on-intro-raspberry',
          },
          {
            to: '/hands-on/articles/intro-raspberry',
            from: '/hands-on-intro-raspberry.html',
          },
          {
            to: '/hands-on/articles/exposed-thing',
            from: '/hands-on-exposed-thing-guide',
          },
          {
            to: '/hands-on/articles/exposed-thing',
            from: '/hands-on-exposed-thing-guide.html',
          },
          {
            to: '/hands-on/articles/smart-coffee-machine',
            from: '/smart-coffee-machine',
          },
          {
            to: '/hands-on/articles/smart-coffee-machine',
            from: '/smart-coffee-machine.html',
          },
          {
            to: '/services/',
            from: '/services.html',
          },
          {
            to: '/get-involved/',
            from: '/get-involved.html',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hands-on',
        path: 'hands-on',
        routeBasePath: 'hands-on',
        sidebarPath: './sidebars-hands-on.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'services',
        path: 'services',
        routeBasePath: 'services',
        sidebarPath: './sidebars-services.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'get-involved',
        path: 'get-involved',
        routeBasePath: 'get-involved',
        sidebarPath: './sidebars-get-involved.js',
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://github.com/eclipse-thingweb/thingweb/blob/main/brand/logos/thingweb_social_preview.png?raw=true',
      metadata: [
        {property: 'og:description', content: 'Eclipse Thingweb™ offers components for making protocol-agnostic IoT solutions at scale by leveraging the W3C WoT standards, no matter if improving an existing solution or building a new one.'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'Eclipse Thingweb | Leverage web standards for better interoperability'},
        {name: 'twitter:description', content: 'Eclipse Thingweb™ offers components for making protocol-agnostic IoT solutions at scale by leveraging the W3C WoT standards, no matter if improving an existing solution or building a new one.'},
        {name: 'twitter:image', content: 'https://github.com/eclipse-thingweb/thingweb/blob/main/brand/logos/thingweb_social_preview.png?raw=true'},
        {name: 'keywords', content: 'thingweb, wot, iot, eclipse, open source, standards, interoperability, w3c, protocols'},
      ],
      navbar: {
        title: 'THINGWEB',
        logo: {
          alt: 'Eclipse Thingweb Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'services',
            sidebarId: 'servicesSidebar',
            position: 'left',
            label: 'Services',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'hands-on',
            sidebarId: 'handsOnSidebar',
            position: 'left',
            label: 'Hands-On',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'get-involved',
            sidebarId: 'getInvolvedSidebar',
            position: 'left',
            label: 'Get Involved',
          },
          {
            href: 'https://github.com/eclipse-thingweb/website',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'search',
            position: 'right',
            className: 'header-search',
          }
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                html: `
                  <div class="logos-wrapper">
                    <a href="https://www.eclipse.org" rel="noopener noreferrer" class="footer-logo foundation-logo">
                      <svg width="auto" height="auto" viewBox="0 0 120 39" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M113.346 35.8189L109.647 31.1266H108.491V38.6769H109.916V33.5581L113.887 38.6769H114.77V31.1309H113.346V35.8189ZM99.5205 32.2784C101.299 32.2784 102.012 33.7031 101.99 34.9785C101.969 36.254 101.299 37.5379 99.5205 37.5379C97.7417 37.5379 97.072 36.2113 97.0421 34.9785C97.0123 33.7457 97.7502 32.2784 99.5205 32.2784ZM99.5205 30.9987C96.9099 30.9987 95.6387 32.995 95.6387 34.9785C95.6387 36.9621 96.8672 38.8731 99.5205 38.8731C102.174 38.8731 103.36 36.9194 103.394 34.9657C103.428 33.0121 102.123 30.9987 99.5205 30.9987ZM90.4644 38.6769V31.1309H89.0482V38.6769H90.4644ZM80.4145 38.6769H81.8392V32.4234H84.2323V31.1437H78.0172V32.4234H80.4145V38.6769ZM72.3481 35.9298H69.5413L70.9447 32.7049L72.3481 35.9298ZM73.5553 38.6769H75.108L71.7296 31.1309H70.1769L66.7814 38.6769H68.317L68.9612 37.2564H72.9112L73.5553 38.6769ZM57.3457 32.466H58.8984C60.5407 32.466 61.2275 33.6434 61.2616 34.8207C61.2957 35.998 60.6132 37.3076 58.8984 37.3076H57.3457V32.466ZM58.8984 31.1181H55.9466V38.6769H58.9112C61.5559 38.6769 62.7205 36.7488 62.6864 34.8378C62.6522 32.9267 61.492 31.1309 58.8984 31.1309V31.1181ZM49.3561 35.8103L45.6578 31.1181H44.5018V38.6769H45.9265V33.5581L49.8936 38.6769H50.7808V31.1309H49.3561V35.8103ZM37.6426 31.1437V35.4776C37.6426 36.7573 36.9771 37.5593 35.7998 37.5593C34.6225 37.5593 33.8461 36.8384 33.8461 35.4776V31.1522H32.4342V35.4776C32.4342 37.7512 33.9783 38.8518 35.787 38.8518C37.6852 38.8518 39.0588 37.7086 39.0588 35.4776V31.1522L37.6426 31.1437ZM23.5658 32.2741C25.3446 32.2741 26.057 33.6988 26.0356 34.9743C26.0143 36.2497 25.3446 37.5337 23.5658 37.5337C21.787 37.5337 21.1173 36.207 21.0832 34.9743C21.0491 33.7415 21.7913 32.2784 23.5701 32.2784L23.5658 32.2741ZM23.5658 30.9944C20.9552 30.9944 19.684 32.9907 19.684 34.9743C19.684 36.9578 20.9126 38.8688 23.5658 38.8688C26.2191 38.8688 27.4049 36.9151 27.439 34.9615C27.4732 33.0078 26.1679 30.9987 23.5701 30.9987L23.5658 30.9944ZM10.8669 38.6769V35.8871H14.6505V34.5818H10.8669V32.5215H14.8681V31.1522H9.45068V38.6769H10.8669Z" fill="#F79422"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M114.911 23.2139H105.454V19.4131H114.574V16.4528H105.454V12.5539H114.911V9.4741H102.302V26.3406H114.911V23.2139ZM97.8483 12.2681C96.5686 9.66606 93.8557 8.92383 91.2323 8.92383C88.1269 8.92383 84.71 10.3656 84.71 13.8294C84.71 17.6087 87.888 18.5216 91.3261 18.9482C93.5656 19.1871 95.2249 19.8397 95.2249 21.4265C95.2249 23.2565 93.348 23.9518 91.3517 23.9518C89.3554 23.9518 87.359 23.1328 86.6125 21.2815L83.9636 22.655C85.2177 25.7349 87.8624 26.7928 91.3048 26.7928C95.0586 26.7928 98.3773 25.1803 98.3773 21.4265C98.3773 17.4083 95.1055 16.4954 91.5906 16.0603C89.5729 15.8214 87.8411 15.4119 87.8411 13.9275C87.8411 12.6776 88.9715 11.688 91.3261 11.688C93.1561 11.688 94.7387 12.6051 95.3231 13.5649L97.8483 12.2681ZM75.0952 9.4741C72.4462 9.45277 69.8015 9.4741 67.1525 9.4741V26.3406H70.3304V21.3839H75.0952C83.3536 21.3839 83.3322 9.4741 75.1037 9.4741H75.0952ZM70.3304 12.507H75.0952C79.1348 12.507 79.1604 18.4789 75.0952 18.4789H70.339L70.3304 12.507ZM62.6522 26.3406V9.4741H59.4999V26.3406H62.6522ZM43.8832 9.4741V26.3406H55.7205V23.4058H47.0825V9.4741H43.8832ZM38.6919 22.0408C37.5497 23.1269 36.0365 23.737 34.4604 23.7471C30.2971 23.7471 28.6846 20.8379 28.659 18.0438C28.6334 15.2498 30.3909 12.1999 34.4604 12.1999C35.9706 12.1778 37.4296 12.7473 38.5256 13.7867L40.6584 11.7434C39.0228 10.0988 36.7969 9.17711 34.4774 9.18403C28.3903 9.18403 25.5195 13.6587 25.5494 18.0609C25.5792 22.4631 28.2197 26.733 34.4604 26.733C36.8427 26.7902 39.1481 25.888 40.8589 24.2291L38.6919 22.0408ZM22.0558 23.2181H12.5945V19.4131H21.7145V16.4528H12.5945V12.5539H22.0515V9.4741H9.45068V26.3406H22.06L22.0558 23.2181Z" fill="var(--neutral-clr-900)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.18683 7.75934C8.02594 1.74473 15.7681 -0.345453 22.2093 2.53388L21.7828 2.23955C15.2064 -1.97746 6.45655 -0.0647844 2.23955 6.51163C-1.97746 13.088 -0.0647844 21.8378 6.51162 26.0548L6.95952 26.3236C1.64022 21.674 0.326391 13.7782 4.18683 7.75934Z" fill="#F79422"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M116.093 11.1248C116.093 10.0458 116.967 9.17114 118.046 9.17114C119.125 9.17114 120 10.0458 120 11.1248C120 12.2038 119.125 13.0785 118.046 13.0785C116.967 13.0785 116.093 12.2038 116.093 11.1248ZM119.774 11.1248C119.774 10.1707 119 9.39722 118.046 9.39722C117.092 9.39722 116.319 10.1707 116.319 11.1248C116.309 11.587 116.488 12.0331 116.814 12.3611C117.139 12.6892 117.584 12.8711 118.046 12.8652C118.511 12.8675 118.958 12.6833 119.286 12.3537C119.613 12.0242 119.796 11.5769 119.791 11.112L119.774 11.1248ZM117.24 10.0712H118.225C118.699 10.0712 119.044 10.2845 119.044 10.7452C119.058 11.039 118.864 11.3023 118.58 11.3765L119.079 12.0889H118.486L118.059 11.449H117.743V12.0889H117.253L117.24 10.0712ZM118.157 11.0566C118.383 11.0566 118.507 10.9457 118.507 10.7793C118.507 10.6129 118.371 10.4978 118.157 10.4978H117.731V11.0566H118.157Z" fill="var(--neutral-clr-900)"/>
                      </svg>
                    </a>

                    <a href="https://iot.eclipse.org" rel="noopener noreferrer" class="footer-logo iot-logo">
                      <svg width="auto" height="auto" viewBox="0 0 50 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M13.7954 4.89771H10.3256V8.74018H13.7954V4.89771Z" fill="var(--neutral-clr-900)"/>
                          <path d="M16.7573 25.4191H13.7934V12.0255C13.7934 11.5433 13.4089 11.1257 12.8936 11.1257H9.29053V14.7234H10.2273V25.4172H7.38287V28.9813H19.8219C18.4962 28.1091 17.4281 26.8737 16.7573 25.4191Z" fill="var(--neutral-clr-900)"/>
                          <path d="M50 14.7253V11.1276H43.7681V4.89771H40.2036V11.1281H34.1657C35.4988 12.0106 36.5728 13.2554 37.2456 14.7257H40.2036V21.8554C40.2036 25.7739 43.4152 28.9856 47.3337 28.9856H49.9995V25.421H47.3337C45.3747 25.421 43.7677 23.8139 43.7677 21.8549V14.7253H50Z" fill="var(--neutral-clr-900)"/>
                          <path d="M28.7808 11.1277H25.2167C21.2977 11.1277 18.0865 14.3389 18.0865 18.2889V21.853C18.0865 25.7715 21.2977 28.9832 25.2167 28.9832H27.7398H28.7808C32.6993 28.9832 35.9104 25.7715 35.9104 21.853V18.2889C35.9104 14.3389 32.6978 11.1277 28.7808 11.1277ZM32.3449 21.853C32.3449 23.812 30.7388 25.4191 28.7788 25.4191H25.2167C23.2562 25.4191 21.6526 23.812 21.6526 21.853V18.2889C21.6526 16.3304 23.2582 14.7249 25.2167 14.7249H28.7808C30.7413 14.7249 32.3468 16.3304 32.3468 18.2889V21.853H32.3449Z" fill="var(--neutral-clr-900)"/>
                          <path d="M1.44669 26.9053C1.44669 25.6916 2.06612 25.0854 3.30548 25.0854C3.46984 25.0854 3.6347 25.0973 3.79906 25.1185V27.773C4.36371 27.773 4.64406 27.3593 4.64406 26.5316C4.64406 26.1284 4.60704 25.7241 4.53053 25.3204H5.33013C5.40663 25.6738 5.44365 26.1027 5.44365 26.6066C5.44365 28.0553 4.76153 28.7803 3.39877 28.7803C2.09771 28.7833 1.44669 28.1579 1.44669 26.9053ZM3.09917 27.7739V26.0682H3.06808C2.51527 26.0682 2.23887 26.346 2.23887 26.9053C2.23838 27.4388 2.52662 27.7285 3.09917 27.7739Z" fill="#E47933"/>
                          <path d="M5.33011 21.3767C5.40662 21.7064 5.44363 22.049 5.44363 22.4038C5.44363 23.8253 4.75164 24.5366 3.36766 24.5366C2.08536 24.5366 1.4447 23.8268 1.4447 22.4038C1.4447 22.049 1.48221 21.7064 1.55822 21.3767H2.35831C2.2818 21.7064 2.24479 22.0238 2.24479 22.3293C2.24479 23.1294 2.61941 23.5297 3.36816 23.5297C4.21908 23.5297 4.64405 23.1294 4.64405 22.3293C4.64405 22.0258 4.60703 21.7084 4.53052 21.3767H5.33011Z" fill="#E47933"/>
                          <path d="M0 19.7024H5.44412V20.7122H0V19.7024Z" fill="#E47933"/>
                          <path d="M0 17.7405H0.800084V18.7498H0V17.7405ZM1.44666 17.7405H5.44412V18.7498H1.44666V17.7405Z" fill="#E47933"/>
                          <path d="M1.61103 16.7889C1.50146 16.2578 1.44815 15.6976 1.44815 15.1073C1.44815 13.749 2.08141 13.0703 3.34792 13.0703C4.74572 13.0703 5.44561 13.7016 5.44561 14.9661C5.44561 15.2351 5.38292 15.5076 5.25558 15.7815H6.89276V16.7914H1.61103V16.7889ZM4.4012 15.7795C4.53842 15.5288 4.60702 15.2578 4.60702 14.9676C4.60702 14.3659 4.18354 14.0658 3.33854 14.0658C2.62088 14.0658 2.26205 14.399 2.26205 15.0639C2.26205 15.3501 2.27982 15.589 2.31487 15.779L4.4012 15.7795Z" fill="#E47933"/>
                          <path d="M5.25362 12.3077H4.41651C4.59469 11.865 4.68304 11.3512 4.68304 10.7688C4.68304 10.3335 4.54386 10.1178 4.26351 10.1178C3.99698 10.1178 3.86371 10.2629 3.86371 10.5551V11.2786C3.86371 12.0901 3.46343 12.4978 2.66384 12.4978C1.82674 12.4978 1.4072 11.906 1.4072 10.7194C1.4072 10.2175 1.4837 9.74314 1.63671 9.29843H2.47381C2.29514 9.74314 2.20679 10.2254 2.20679 10.7451C2.20679 11.29 2.34597 11.5644 2.62632 11.5644C2.89285 11.5644 3.02612 11.4055 3.02612 11.0881V10.4411C3.02612 9.55311 3.42641 9.10791 4.226 9.10791C5.0631 9.10791 5.48264 9.67453 5.48264 10.8053C5.48313 11.363 5.40662 11.863 5.25362 12.3077Z" fill="#E47933"/>
                          <path d="M1.44669 6.71702C1.44669 5.50381 2.06612 4.89771 3.30548 4.89771C3.46984 4.89771 3.6347 4.90955 3.79906 4.93078V7.58521C4.36371 7.58521 4.64406 7.1716 4.64406 6.34437C4.64406 5.94063 4.60704 5.53688 4.53053 5.13265H5.33013C5.40663 5.48555 5.44365 5.91496 5.44365 6.41841C5.44365 7.86754 4.76153 8.5926 3.39877 8.5926C2.09771 8.59507 1.44669 7.96971 1.44669 6.71702ZM3.09917 7.58521V5.87992H3.06808C2.51527 5.87992 2.23887 6.15829 2.23887 6.71702C2.23838 7.25008 2.52662 7.5403 3.09917 7.58521Z" fill="#E47933"/>
                          <path d="M33.7125 0.0024684C31.8384 0.0024684 30.3192 1.52218 30.3192 3.39579C30.3192 3.77337 30.3834 4.13516 30.4969 4.47425L26.731 6.12624C26.4787 5.65191 25.9847 5.32467 25.4101 5.32467C25.1377 5.32467 24.886 5.40266 24.6658 5.52951L22.7004 3.18947C22.9936 2.85088 23.1772 2.41456 23.1772 1.93135C23.1772 0.864741 22.313 0 21.2464 0C20.1797 0 19.315 0.864741 19.315 1.93135C19.315 2.99797 20.1797 3.86221 21.2464 3.86221C21.6106 3.86221 21.9467 3.7556 22.2375 3.58038L24.2113 5.93078C24.0237 6.18152 23.9087 6.48901 23.9087 6.82612C23.9087 7.65582 24.5809 8.32757 25.4101 8.32757C26.2393 8.32757 26.9121 7.65533 26.9121 6.82612C26.9121 6.78713 26.9032 6.7511 26.9007 6.7131L30.7383 5.02952C31.3158 6.07836 32.4307 6.78911 33.7121 6.78911C35.5866 6.78911 37.1059 5.26989 37.1059 3.39579C37.1064 1.52169 35.5871 0.0024684 33.7125 0.0024684Z" fill="#E47933"/>
                        </g>
                      </svg>
                    </a>

                    <a href="https://www.w3.org" rel="noopener noreferrer" class="footer-logo w3c-logo">
                      <img src="https://www.w3.org/comm/assets/logos/w3c_on_white_gray_circle.svg" alt="w3c logo" />
                    </a>

                    <a href="https://www.w3.org/WoT/" rel="noopener noreferrer" class="footer-logo wot-logo">
                      <img src="https://www.w3.org/WoT/IG/wiki/images/8/8f/WOT-hz.svg" alt="wot logo" />
                    </a>
                  </div>
                `,
              },
            ],
          },
          {
            title: 'WoT Specifications',
            items: [
              {
                label: 'Thing Description',
                href: 'https://www.w3.org/TR/wot-thing-description11/',
              },
              {
                label: 'Bindings',
                href: 'https://www.w3.org/TR/wot-binding-templates/',
              },
              {
                label: 'Discovery',
                href: 'https://www.w3.org/TR/wot-discovery/',
              },
              {
                label: 'Architecture',
                href: 'https://www.w3.org/TR/wot-architecture11/',
              },
              {
                label: 'Scripting API',
                href: 'https://www.w3.org/TR/wot-scripting-api/',
              },
            ],
          },
          {
            title: 'Wide WoT Community',
            items: [
              {
                label: 'Thingweb Telegram Group',
                href: 'https://t.me/nodewot',
              },
              {
                label: 'WoT CG Discord',
                href: 'https://discord.com/invite/RJNYJsEgnb',
              },
              {
                label: 'WoT CG YouTube',
                href: 'https://www.youtube.com/@WoTCG',
              },
              {
                label: 'Official W3C WoT Twitter',
                href: 'https://twitter.com/W3C_WoT',
              },
              {
                label: 'Official W3C WoT Mastodon',
                href: 'https://w3c.social/@wot',
              },
              {
                label: 'Stack Overflow Tag for WoT',
                href: 'https://stackoverflow.com/questions/tagged/web-of-things',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Web of Things Homepage',
                href: 'https://www.w3.org/WoT/',
              },
              {
                label: 'Eclipse Project',
                href: 'https://projects.eclipse.org/projects/iot.thingweb',
              },
              {
                label: 'Manage Consent',
                href: '#',
                id: 'consent-link',
              },
            ],
          },
        ],
        copyright: `
          <svg width="auto" height="auto" viewBox="0 0 91 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="thingweb-footer-logo">
            <g>
              <path d="M9.15905 20C9.15288 19.5867 9.00484 19.2042 8.92464 18.8033C8.89997 18.6922 8.82594 18.6614 8.72725 18.6491C8.49284 18.6121 8.25226 18.5997 8.03636 18.5134C7.70325 18.3776 7.51202 18.4949 7.33313 18.7724C7.17892 19.013 7.04937 19.3523 6.79646 19.4201C6.54354 19.488 6.27829 19.2289 6.01921 19.1117C5.71695 18.9822 5.42702 18.8341 5.12476 18.6984C4.97671 18.6367 4.92736 18.5504 4.97671 18.39C5.05073 18.1371 5.08157 17.8656 5.16177 17.6189C5.23579 17.3968 5.19261 17.255 4.99521 17.1316C4.78548 17.002 4.58808 16.8478 4.41536 16.6751C4.24881 16.5147 4.10693 16.5147 3.92804 16.6319C3.92187 16.6381 3.90953 16.6443 3.90336 16.6443C3.59493 16.7738 3.28033 17.1192 3.00891 17.0329C2.73749 16.9465 2.5586 16.5517 2.34886 16.2926C2.16997 16.0767 2.00342 15.8547 1.82453 15.6449C1.72583 15.5277 1.72583 15.4414 1.82453 15.3242C1.99108 15.1391 2.12062 14.9294 2.29951 14.7566C2.50308 14.5593 2.54626 14.3742 2.3612 14.146C2.31185 14.0843 2.2625 14.0102 2.244 13.93C2.12679 13.3317 1.73817 13.2145 1.17682 13.2762C0.640148 13.3317 0.633979 13.2885 0.504438 12.7518C0.405739 12.3324 0.319378 11.9129 0.202174 11.4996C0.152825 11.3269 0.202174 11.2652 0.344053 11.2035C0.615473 11.0863 0.880725 10.9444 1.15215 10.8272C1.28169 10.7717 1.33721 10.6977 1.33104 10.5496C1.31253 10.2289 1.3187 9.91426 1.33104 9.59349C1.33721 9.44544 1.28786 9.37142 1.15215 9.32207C0.874557 9.21103 0.609305 9.07532 0.337884 8.95812C0.196005 8.89643 0.134319 8.82241 0.177499 8.65586C0.307041 8.13152 0.418076 7.60102 0.529112 7.07051C0.559955 6.9163 0.633979 6.84844 0.800533 6.85461C1.09046 6.86695 1.37422 6.84844 1.66414 6.86078C1.83687 6.86695 1.92323 6.81143 1.98491 6.65104C2.10212 6.36729 2.23783 6.0897 2.37354 5.81828C2.44139 5.68874 2.44139 5.60237 2.33653 5.49134C2.13296 5.26927 1.96641 5.02252 1.76284 4.80662C1.6333 4.67091 1.64564 4.58455 1.75667 4.44884C2.10212 4.02937 2.44139 3.60373 2.7745 3.17193C2.8732 3.04238 2.95956 3.01154 3.10761 3.0979C3.36669 3.23978 3.64428 3.35699 3.90336 3.49886C4.0329 3.56672 4.11927 3.56055 4.2303 3.46185C4.46471 3.25829 4.69912 3.06089 4.95203 2.88817C5.10008 2.7833 5.11859 2.67227 5.07541 2.51805C5.00138 2.24046 4.93353 1.96287 4.85333 1.68528C4.81015 1.53723 4.84717 1.43854 5.00138 1.37068C5.50104 1.13627 6.0007 0.895695 6.4942 0.648949C6.61757 0.587263 6.72243 0.574925 6.79646 0.716804C6.80263 0.722973 6.8088 0.73531 6.81497 0.741479C7.04937 1.0129 7.19125 1.4447 7.50585 1.53723C7.80195 1.6236 8.17207 1.42003 8.51751 1.35834C8.71491 1.3275 8.81977 1.23497 8.84445 1.03141C8.88763 0.759985 8.95549 0.488564 9.00484 0.217144C9.02951 0.0690963 9.0912 -0.0110962 9.26392 0.00124114C9.52917 0.0197471 9.80059 0.0135784 10.0658 0.00124114C10.2201 -0.00492751 10.2817 0.038253 10.2817 0.204807C10.2756 1.26581 10.2756 2.32065 10.2817 3.38166C10.2817 3.58523 10.1769 3.57906 10.035 3.58523C7.21593 3.69009 5.22962 5.0657 4.15011 7.6442C2.65113 11.2405 4.89035 15.4044 8.69023 16.231C9.13438 16.3297 9.57852 16.379 10.035 16.3728C10.1954 16.3728 10.2756 16.3975 10.2756 16.5887C10.2694 17.6497 10.2694 18.7046 10.2756 19.7656C10.2756 19.852 10.2509 19.926 10.2077 19.9938C9.85611 20 9.51066 20 9.15905 20Z" fill="#141414"/>
              <path d="M10.1584 11.8205C10.1584 12.9802 10.1584 14.1461 10.1584 15.3058C10.1584 15.3675 10.1584 15.4292 10.1584 15.4909C10.1522 15.5772 10.183 15.6821 10.035 15.6883C9.88695 15.6945 9.90545 15.5958 9.90545 15.5032C9.90545 15.2873 9.90545 15.0714 9.90545 14.8555C9.90545 14.0968 9.90545 13.3319 9.90545 12.5731C9.90545 12.055 9.60319 11.7527 9.09119 11.7342C8.67789 11.7218 8.61004 11.654 8.61004 11.2469C8.61004 10.8027 8.61621 10.3647 8.61004 9.9206C8.61004 9.78489 8.64088 9.7047 8.75808 9.61833C9.09736 9.35925 9.1282 8.96446 8.85678 8.6807C8.60387 8.41545 8.17823 8.42779 7.93149 8.71154C7.68474 9.00147 7.74026 9.4086 8.0857 9.63684C8.21524 9.7232 8.22758 9.81573 8.22758 9.94527C8.22758 10.3894 8.22141 10.8274 8.22758 11.2715C8.23375 11.8452 8.47433 12.0981 9.04184 12.1228C9.43047 12.1413 9.53534 12.2462 9.53534 12.6225C9.53534 13.5601 9.52917 14.4916 9.5415 15.4292C9.5415 15.6143 9.51683 15.6636 9.30709 15.6328C8.57303 15.5217 8.56686 15.5341 8.56686 14.8062C8.56686 14.4977 8.57302 14.1893 8.56686 13.8809C8.55452 13.4429 8.26459 13.153 7.82662 13.153C7.11722 13.1468 6.40783 13.1468 5.69844 13.153C5.53188 13.153 5.43935 13.1036 5.35299 12.9617C5.13709 12.5855 4.96437 12.1968 4.81632 11.7897C4.75463 11.6108 4.77314 11.5244 4.98904 11.5306C5.20494 11.5368 5.38383 11.5244 5.53805 11.7527C5.74162 12.055 6.16725 12.055 6.4325 11.7959C6.68542 11.5491 6.69159 11.1667 6.44484 10.9138C6.20426 10.6608 5.74778 10.6485 5.55039 10.9446C5.32215 11.2777 5.01988 11.1235 4.74846 11.1482C4.64976 11.1543 4.63126 11.0433 4.61892 10.9631C4.57574 10.5992 4.52639 10.229 4.53873 9.85891C4.5449 9.71703 4.60658 9.69236 4.72996 9.69236C5.42085 9.69853 6.10557 9.69236 6.79645 9.69236C7.01853 9.69236 7.1419 9.81573 7.1419 10.0378C7.14807 10.5128 7.1419 10.9816 7.14807 11.4566C7.14807 11.5861 7.06788 11.6293 6.98768 11.6972C6.68542 11.9563 6.66074 12.3881 6.93216 12.6471C7.19125 12.8939 7.60455 12.8692 7.83279 12.5978C8.09187 12.2955 8.03635 11.9007 7.67857 11.6725C7.53669 11.58 7.51819 11.4874 7.51819 11.3456C7.52435 10.9261 7.52435 10.5005 7.51819 10.081C7.51202 9.59366 7.2406 9.31607 6.75327 9.3099C6.1179 9.30373 5.47636 9.30373 4.84099 9.3099C4.6621 9.3099 4.56957 9.27906 4.61275 9.06933C5.0754 6.84244 6.37082 5.3558 8.51751 4.59089C8.80743 4.48602 8.87529 4.56621 8.84445 4.8438C8.82594 5.02886 8.83211 5.21392 8.84445 5.39898C8.85678 5.67657 8.85061 5.91098 8.56686 6.10221C8.2831 6.29343 8.32628 6.73141 8.57919 6.97199C8.83211 7.21256 9.22073 7.20022 9.46131 6.94731C9.69572 6.6944 9.70806 6.27493 9.43047 6.07136C9.23924 5.92948 9.2084 5.78144 9.21456 5.57787C9.22073 5.2571 9.22073 4.9425 9.21456 4.62173C9.2084 4.47368 9.25775 4.40583 9.41813 4.38732C10.1584 4.30096 10.1584 4.29479 10.1584 5.04737C10.1584 5.81845 10.1522 6.58953 10.1645 7.36061C10.1645 7.54567 10.1214 7.60736 9.92396 7.60736C9.19606 7.59502 8.46199 7.60119 7.73409 7.60736C7.61072 7.60736 7.53669 7.57034 7.4565 7.46548C7.19742 7.12003 6.82113 7.08302 6.5312 7.35444C6.25361 7.61969 6.25361 8.02682 6.53737 8.27357C6.82113 8.52032 7.24677 8.47097 7.46884 8.13169C7.56137 7.98981 7.66007 7.97131 7.79578 7.97131C8.49283 7.97747 9.19606 7.98364 9.89312 7.96514C10.1152 7.95897 10.1645 8.03299 10.1645 8.24273C10.1522 9.43944 10.1584 10.63 10.1584 11.8205Z" fill="#141414"/>
              <path d="M20.349 8.46472C21.2435 8.46472 22.1379 8.46472 23.0324 8.46472C23.1742 8.46472 23.2976 8.47089 23.4148 8.34135C23.5629 8.1748 23.7664 8.1748 23.933 8.34752C24.081 8.50174 24.081 8.69296 23.9577 8.85335C23.8158 9.03224 23.606 9.03841 23.4395 8.89653C23.3099 8.78549 23.1866 8.78549 23.0447 8.78549C21.1633 8.78549 19.2818 8.78549 17.4066 8.79783C17.1721 8.79783 17.0796 8.74848 17.0118 8.50791C16.2962 5.94792 14.6122 4.40575 12.0398 3.8074C11.6882 3.7272 11.3304 3.70253 10.9727 3.7087C10.7814 3.71487 10.7012 3.67169 10.7012 3.45578C10.7136 2.42562 10.7074 1.40162 10.7012 0.371458C10.7012 0.211073 10.7259 0.130881 10.9171 0.137049C13.2057 0.217242 15.3339 0.766252 17.129 2.2714C17.7026 2.75256 18.1468 3.33858 18.4922 4.00479C18.5601 4.1405 18.6341 4.25771 18.7883 4.3379C18.9796 4.43043 19.0289 4.61549 18.9364 4.81289C18.8438 5.01028 18.665 5.07197 18.4676 5.00411C18.2702 4.93626 18.1591 4.7512 18.2393 4.55997C18.3257 4.35641 18.2393 4.22686 18.1591 4.07265C17.2708 2.47497 15.8644 1.54967 14.1557 1.013C13.2365 0.723071 12.2989 0.519506 11.3304 0.451651C11.096 0.433145 10.985 0.482494 11.0097 0.747746C11.0282 0.982154 11.0282 1.22273 11.0097 1.45714C10.9973 1.66687 11.0714 1.72239 11.2811 1.75324C12.9775 1.98764 14.5875 2.45646 15.9508 3.55448C16.9192 4.33173 17.678 5.27553 18.1591 6.42907C18.264 6.68199 18.3935 6.75601 18.6526 6.74367C19.2386 6.72517 19.8247 6.7375 20.4107 6.7375C20.6389 6.7375 20.8672 6.76218 21.0769 6.59562C21.2311 6.47225 21.4162 6.55861 21.5334 6.71283C21.6568 6.87321 21.6321 7.04594 21.4964 7.18782C21.3422 7.34203 21.1386 7.36671 21.0029 7.21249C20.8548 7.0521 20.6883 7.0521 20.5032 7.0521C19.763 7.0521 19.0227 7.03977 18.2825 7.0521C18.1098 7.0521 18.0358 6.99042 17.9741 6.8362C17.0179 4.46127 15.2537 3.01164 12.7986 2.39477C12.2989 2.2714 11.7993 2.10485 11.2749 2.07401C11.0467 2.06167 11.0097 2.12335 11.0158 2.31458C11.022 2.54899 11.0405 2.78957 11.0097 3.02398C10.9727 3.32624 11.1207 3.38793 11.3736 3.40026C12.046 3.42494 12.6937 3.58532 13.3106 3.83824C15.303 4.65867 16.617 6.10213 17.2462 8.16246C17.3202 8.39687 17.4127 8.47706 17.6656 8.47089C18.5601 8.45239 19.4545 8.46472 20.349 8.46472Z" fill="#141414"/>
              <path d="M19.4175 9.9452C19.985 9.9452 20.5464 9.9452 21.1139 9.9452C21.3421 9.9452 21.5704 9.9637 21.7801 9.80332C21.9405 9.68611 22.1441 9.73546 22.2613 9.91435C22.3723 10.0747 22.3538 10.2598 22.2119 10.3955C22.0639 10.5374 21.8603 10.5744 21.7123 10.4264C21.5519 10.2721 21.373 10.2536 21.1756 10.2536C20.0344 10.2536 18.8932 10.2598 17.752 10.2475C17.5361 10.2475 17.4991 10.34 17.4867 10.5189C17.3325 13.1961 15.4449 15.5772 12.8541 16.3729C12.3112 16.5395 11.7622 16.6567 11.1947 16.6629C11.0528 16.6629 10.9911 16.6999 10.9973 16.8541C11.0035 17.181 11.0035 17.5141 10.9973 17.8411C10.9973 18.0015 11.0775 18.0261 11.2132 18.0076C11.608 17.9459 11.9966 17.8719 12.3853 17.7794C12.9528 17.6375 13.5203 17.5203 14.057 17.2859C15.9446 16.4655 17.2893 15.1207 18.0542 13.1961C18.2331 12.7519 18.3688 12.2955 18.5354 11.8513C18.5971 11.6909 18.6649 11.6539 18.8192 11.6601C19.0782 11.6724 19.3312 11.6601 19.5902 11.6539C19.7938 11.6539 19.9789 11.6663 20.1454 11.4874C20.2811 11.3393 20.4909 11.3825 20.6389 11.5429C20.7746 11.6909 20.7808 11.8636 20.6512 12.0179C20.5155 12.1721 20.3428 12.2214 20.1578 12.1042C19.7568 11.8513 19.3188 12.0117 18.9055 11.9994C18.776 11.9932 18.7636 12.2276 18.7266 12.3571C18.338 13.6279 17.7582 14.7876 16.839 15.7561C15.741 16.9219 14.4024 17.6683 12.8356 18.0323C12.2866 18.1557 11.7437 18.3161 11.1762 18.3407C11.0158 18.3469 10.9973 18.4394 10.9973 18.5628C11.0035 18.8404 11.0097 19.118 10.9911 19.3956C10.9788 19.593 11.0528 19.6423 11.2379 19.63C12.0275 19.5868 12.8047 19.4634 13.5696 19.2537C14.7355 18.9329 15.8459 18.5073 16.7897 17.7177C17.4065 17.2057 17.8939 16.5888 18.2763 15.8856C18.3318 15.7807 18.3503 15.6882 18.301 15.571C18.2146 15.3613 18.2887 15.17 18.4984 15.0837C18.702 15.0035 18.8932 15.0652 18.9857 15.2749C19.0782 15.4846 18.998 15.6574 18.8007 15.7622C18.7143 15.8054 18.6526 15.8548 18.6033 15.9411C17.6533 17.8164 16.0433 18.8466 14.094 19.4326C13.07 19.7348 12.0275 19.9507 10.9541 19.9384C10.7321 19.9384 10.6827 19.8767 10.6827 19.6608C10.6889 18.643 10.6889 17.6252 10.6765 16.6073C10.6765 16.4161 10.7197 16.3483 10.9295 16.3421C13.9829 16.2804 16.4997 14.1707 17.0858 11.1851C17.1536 10.852 17.1968 10.5189 17.166 10.1796C17.1475 9.99455 17.2091 9.93286 17.4004 9.93286C18.0789 9.95137 18.7513 9.9452 19.4175 9.9452Z" fill="#141414"/>
              <path d="M12.6443 10.2041C13.0761 10.2041 13.508 10.2103 13.9398 10.198C14.1125 10.1918 14.1618 10.2597 14.1433 10.4139C14.0693 11.0616 13.9521 11.6969 13.6992 12.3015C13.6622 12.394 13.6313 12.4619 13.4771 12.4063C12.8171 12.1719 12.1385 11.9869 11.423 12.0239C11.2379 12.0362 11.1269 11.956 11.133 11.734C11.1515 11.2898 11.1454 10.8518 11.133 10.4077C11.1269 10.2473 11.1824 10.1918 11.3428 10.198C11.7807 10.2103 12.2125 10.2041 12.6443 10.2041Z" fill="#141414"/>
              <path d="M12.632 9.74752C12.2002 9.74752 11.7684 9.74135 11.3428 9.74752C11.2009 9.74752 11.1454 9.71051 11.1454 9.55629C11.1515 9.0628 11.1515 8.57547 11.1454 8.08198C11.1454 7.9401 11.2132 7.89692 11.3304 7.9216C12.0336 8.07581 12.7245 7.9216 13.4031 7.77972C13.6498 7.7242 13.6992 7.81673 13.767 7.99562C13.9644 8.50762 14.0446 9.05046 14.131 9.58713C14.1557 9.74752 14.057 9.74752 13.9459 9.74135C13.5141 9.74752 13.07 9.74752 12.632 9.74752Z" fill="#141414"/>
              <path d="M16.2098 10.2842C16.1605 11.3452 15.7904 12.2705 15.1858 13.1156C15.0933 13.239 15.0131 13.276 14.8712 13.1526C14.6985 12.9984 14.4888 12.8874 14.2852 12.7763C14.1433 12.7023 14.1001 12.6468 14.168 12.4802C14.4086 11.8757 14.5998 11.265 14.606 10.5988C14.606 10.3582 14.6738 10.1608 15.0069 10.1978C15.3524 10.2349 15.704 10.204 16.0494 10.2102C16.1173 10.204 16.216 10.167 16.2098 10.2842Z" fill="#141414"/>
              <path d="M15.451 9.72918C15.1858 9.72918 14.8527 9.82788 14.6738 9.7045C14.4887 9.57496 14.5936 9.21101 14.5443 8.9581C14.4641 8.55714 14.3654 8.16234 14.2235 7.78605C14.1618 7.62567 14.168 7.55781 14.3345 7.48996C14.6183 7.37275 14.8897 7.23088 15.155 7.08283C15.2783 7.0088 15.3215 7.03965 15.3894 7.15068C15.8705 7.90326 16.1358 8.72986 16.2221 9.61197C16.2345 9.74768 16.1728 9.76619 16.0679 9.76002C15.8643 9.75385 15.6546 9.76002 15.451 9.76002C15.451 9.74152 15.451 9.73535 15.451 9.72918Z" fill="#141414"/>
              <path d="M11.1454 15.133C11.1454 14.2694 11.1454 13.4551 11.1454 12.6347C11.1454 12.5051 11.207 12.4743 11.3181 12.4866C11.9843 12.5421 12.6443 12.6285 13.2797 12.8629C13.3599 12.8938 13.4278 12.9246 13.3599 13.0356C12.8171 13.9301 12.1138 14.6333 11.1454 15.133Z" fill="#141414"/>
              <path d="M13.4216 7.25546C12.7739 7.44669 12.12 7.48987 11.46 7.4652C11.2626 7.45903 11.1268 7.39734 11.133 7.13826C11.1515 6.4412 11.1392 5.75031 11.1392 5.00391C12.1693 5.52824 12.8911 6.28699 13.4216 7.25546Z" fill="#141414"/>
              <path d="M8.17823 15.3302C7.19741 14.9539 6.42016 14.3679 5.73544 13.5228C6.22894 13.5228 6.66074 13.5228 7.09255 13.5228C7.32695 13.5228 7.56753 13.5166 7.80194 13.5228C8.00551 13.5289 8.17206 13.6215 8.17823 13.8497C8.1844 14.3309 8.17823 14.8058 8.17823 15.3302Z" fill="#141414"/>
              <path d="M11.9041 4.8252C12.8294 5.02259 13.6313 5.36804 14.3099 5.9664C14.5073 6.13912 14.7417 6.27483 14.8774 6.51541C14.9391 6.62027 14.9206 6.65728 14.8281 6.6943C14.7972 6.70663 14.7725 6.71897 14.7479 6.73131C14.5011 6.84851 14.2482 7.07058 14.0076 7.05825C13.7424 7.03974 13.693 6.65728 13.5326 6.44138C13.1378 5.91705 12.7184 5.42355 12.1694 5.04727C12.0892 4.99175 12.0151 4.91773 11.9041 4.8252Z" fill="#141414"/>
              <path d="M12.2804 15.0465C12.8911 14.516 13.3969 13.9238 13.7979 13.233C13.8534 13.1343 13.9151 13.1404 14.0014 13.1836C14.0755 13.2268 14.1433 13.2638 14.2112 13.307C14.8466 13.7203 14.828 13.5969 14.2729 14.0781C13.6992 14.5654 13.0391 14.9047 12.2804 15.0465Z" fill="#141414"/>
              <path d="M34.2354 5.31787V6.741H31.8465V14.5682H30.3726V6.741H28.0473V5.31787H34.2354Z" fill="#141414"/>
              <path d="M42.6913 14.5682H41.2047V10.6292H36.6558V14.5682H35.1691V5.31787H36.6558V9.21876H41.2047V5.31787H42.6913V14.5682Z" fill="#141414"/>
              <path d="M45.7724 5.31787V14.5682H44.2858V5.31787H45.7724Z" fill="#141414"/>
              <path d="M55.5371 5.31766V14.8983H55.499L48.8281 8.43075L48.8662 14.568H47.3669V5H47.4431L54.0886 11.5438L54.0632 5.31766H55.5371Z" fill="#141414"/>
              <path d="M64.5013 13.7167C64.2472 13.9539 63.8024 14.1741 63.1671 14.3774C62.5403 14.5723 61.9642 14.6697 61.439 14.6697C60.4649 14.6697 59.6093 14.4749 58.8723 14.0852C58.1353 13.6955 57.5678 13.1619 57.1697 12.4842C56.7715 11.798 56.5724 11.0229 56.5724 10.1589C56.5724 9.11695 56.7842 8.22327 57.2078 7.47782C57.6398 6.73237 58.2158 6.16905 58.9359 5.78786C59.6644 5.40666 60.4606 5.21606 61.3247 5.21606C61.8583 5.21606 62.3624 5.2796 62.8367 5.40666C63.3196 5.52526 63.7431 5.6862 64.1074 5.88951L63.6245 7.26181C63.3704 7.10933 63.0316 6.97803 62.608 6.86791C62.1929 6.75778 61.8287 6.70272 61.5153 6.70272C60.4564 6.70272 59.622 6.99497 59.0121 7.57947C58.4022 8.16397 58.0972 8.98142 58.0972 10.0318C58.0972 10.6587 58.237 11.2135 58.5165 11.6964C58.8046 12.1707 59.2027 12.5392 59.7109 12.8018C60.2277 13.0644 60.8164 13.1957 61.4771 13.1957C61.7736 13.1957 62.0574 13.1703 62.3285 13.1195C62.5996 13.0602 62.8283 12.9797 63.0146 12.8781V11.3406H61.2738V9.91746H64.5013V13.7167Z" fill="#141414"/>
              <path d="M72.8937 14.9748L70.7082 9.46014L68.2559 15.0002L64.5583 5.36865H66.2864L68.4465 11.544L69.984 7.60499L69.0945 5.36865H70.5557L72.9319 11.3661L74.9141 5.36865H76.5024L72.8937 14.9748Z" fill="#141414"/>
              <path d="M83.4336 5.31787V6.741H78.783V9.20606H82.9253V10.6292H78.783V13.1451H83.6114V14.5682H77.2963V5.31787H83.4336Z" fill="#141414"/>
              <path d="M89.0941 9.73973C89.6108 9.9515 90.0132 10.2438 90.3012 10.6165C90.5977 10.9892 90.7459 11.4212 90.7459 11.9125C90.7459 12.8105 90.441 13.4797 89.8311 13.9202C89.2296 14.3522 88.4842 14.5682 87.5947 14.5682H84.7104V5.31787H87.2389C88.2046 5.31787 88.9543 5.51694 89.488 5.91508C90.0217 6.30474 90.2885 6.88077 90.2885 7.64316C90.2885 8.126 90.1826 8.54532 89.9708 8.9011C89.7675 9.24841 89.4753 9.52795 89.0941 9.73973ZM86.197 9.25688H87.4804C87.9039 9.25688 88.2216 9.13405 88.4334 8.88839C88.6536 8.64274 88.7637 8.33354 88.7637 7.96082C88.7637 7.55421 88.6324 7.24926 88.3698 7.04595C88.1157 6.84265 87.7599 6.741 87.3025 6.741H86.197V9.25688ZM87.5312 13.1959C88.031 13.1959 88.4376 13.09 88.751 12.8782C89.0644 12.658 89.2212 12.3403 89.2212 11.9252C89.2212 11.4848 89.0475 11.1671 88.7002 10.9723C88.3613 10.7774 87.9378 10.68 87.4295 10.68H86.197V13.1959H87.5312Z" fill="#141414"/>
            </g>
          </svg>
          <p> Copyright © ${new Date().getFullYear()} Eclipse Thingweb. Built with Docusaurus. </p>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '1NS3BU5ITA',

        // Public API key: it is safe to commit it
        apiKey: 'fb9d7453a75b892d307c3a1d0f941b98',

        indexName: 'thingweb',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
      },
    }),
};

export default config;

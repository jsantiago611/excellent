const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Gospel Exploder',
  siteDescription:
    'Helping clarify the gospel so that people can be deeply changed.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Jonathan S.', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'santiagowriter@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Summaries of Tim Keller Sermons',
    description:
      'Im helping people understand the gospel by creating summaries of Tim Keller Sermons'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'santiagowriter at gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};

const withNextIntl = require('next-intl/plugin')(
  './i18n/request.ts'
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
});

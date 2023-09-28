module.exports = {
  sidebar: {
    'Getting Started': [
      'introduction',
      'installation',
      'configuration',
      'import',
      'authentication',
    ],
    Features: [
      'user',
      'config',
      'product',
      {
        type: 'category',
        label: 'Person',
        items: [
          'person/person-address',
          'person/person-config',
          'person/person-index',
        ],
      },
      {
        type: 'category',
        label: 'Organization',
        items: [
          'organization/organization-address',
          'organization/organization-background-image',
          'organization/organization-communication',
          'organization/organization-founder',
          'organization/organization-employee',
          'organization/organization-index',
          'organization/organization-kyc',
          'organization/organization-logo',
          'organization/organization-picture',
          'organization/organization-rib',
          'organization/organization-roaming',
        ],
      },
      'order',
      'discount',
      'place',
      'bug-report',
      'media',
      'iam',
      'contact',
      'opinion',
      'claim',
      'notification',
      'communication',
    ],
    Types: [
      'pagination',
      'claim-types',
      'opinion-types',
      'organization-types',
      'notification-types',
      'bug-report-types',
      'config-types',
      'place-types',
      'quotas-types',
      'calendar-types',
      'shop-types',
      'person-types',
      'communication-types',
    ],
  },
};

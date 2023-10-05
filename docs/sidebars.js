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
      'analytics',
      'user',
      'config',
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
      {
        type: 'category',
        label: 'Shop',
        items: [
          'shop/advertisement',
          'shop/basket',
          'shop/discount',
          'shop/invoice',
          'shop/loyalty',
          'shop/order',
          'shop/payment',
          'shop/payout',
          'shop/product-picture',
          {
            type: 'category',
            label: 'Product',
            items: ['shop/product-category', 'shop/product'],
          },
          'shop/subscription',
        ],
      },
      'place',
      'bug-report',
      'media',
      'iam',
      'contact',
      'opinion',
      'claim',
      'notification',
      'communication',
      'etl',
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
      'media-types',
      'analytics-types',
      'etl-types',
      'user-types',
    ],
  },
};

import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

export const analytics = Analytics({
  app: 'altiverr',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-D6D70ETZSV'],
      gtagConfig: {
        anonymize_ip: true,
        send_page_view: true,
      },
    }),
  ],
}); 
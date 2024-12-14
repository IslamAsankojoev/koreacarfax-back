export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('EMAIL_FROM'),
        defaultReplyTo: env('EMAIL_REPLY_TO'),
      },
    },
  },
  'free-mail-sender': {
    config: {
      provider: 'outlook',
    },
  },
})

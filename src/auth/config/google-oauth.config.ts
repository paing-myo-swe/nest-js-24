import { registerAs } from '@nestjs/config';
import { StrategyOptions } from 'passport-google-oauth20';

export default registerAs(
  'googleOAuth',
  (): StrategyOptions => ({
    clientID: process.env.GOOGLE_CLIENT_ID || 'clientId',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'secret',
    callbackURL: process.env.GOOGLE_REDIRECT_URL,
  }),
);

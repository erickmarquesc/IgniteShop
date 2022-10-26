import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_kEY, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: 'Ignite Shop',
  }
});
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export async function POST(request: any) {
  try {
    const data = await request.json();
    const amount = data.amount;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Amount is in cents
      currency: "usd", // Use lowercase 'usd'
    });

    return NextResponse.json(
      { client_secret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

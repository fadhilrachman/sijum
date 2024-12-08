import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: process.env.MIDTRANS_IS_PRODUCTION,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});
export async function POST(request) {
  const { id, productName, price, quantity } = await request.json();
}

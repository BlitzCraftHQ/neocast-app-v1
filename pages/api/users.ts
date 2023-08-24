import { db } from "@/utilities/mongo";

export default async function users(req: any, res: any) {
  if (req.method === "GET") {
    const data = await db
      .collection("users")
      .findOne({ walletAddress: req.query.walletAddress });
    console.log("Wallet Address", req.query.walletAddress);
    res.status(200).json({ userData: data });
  } else {
    // Handle any other HTTP method
  }
}

import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  console.log(req.body.walletAddress);
  if (req.method === "POST") {
    db.collection("users").insertOne({
      walletAddress: req.body.walletAddress,
      subscribedTopics: [],
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

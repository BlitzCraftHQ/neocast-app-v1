import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  if (req.method === "GET") {
    db.collection("users").insertOne({
      walletAddress: req.query.walletAddress,
      subscribedTopics: [],
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  if (req.method === "GET") {
    db.collection("topics").insertOne({
      name: req.query.name,
      description: req.query.description,
      websiteURL: req.query.websiteURL,
      logoURL: req.query.logoURL,
      webhookURL: req.query.webhookURL,
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

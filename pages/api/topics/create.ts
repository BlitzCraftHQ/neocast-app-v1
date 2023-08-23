import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  if (req.method === "POST") {
    db.collection("topics").insertOne({
      name: req.body.name,
      description: req.body.description,
      websiteURL: req.body.websiteURL,
      logoURL: req.body.logoURL,
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

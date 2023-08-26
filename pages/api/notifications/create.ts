import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  if (req.method === "GET") {
    db.collection("notifications").insertOne({
      topicID: req.query.topicID,
      name: req.query.name,
      description: req.query.description,
      mediaURL: req.query.mediaURL,
      websiteURL: req.query.websiteURL,
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

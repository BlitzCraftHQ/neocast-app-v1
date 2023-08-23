import { db } from "@/utilities/mongo";

export default function create(req: any, res: any) {
  if (req.method === "POST") {
    db.collection("notifications").insertOne({
      topicID: req.body.topicID,
      name: req.body.name,
      description: req.body.description,
      mediaURL: req.body.mediaURL,
      websiteURL: req.body.websiteURL,
    });
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

import { db } from "@/utilities/mongo";

export default async function topics(req: any, res: any) {
  if (req.method === "GET") {
    const data = await db
      .collection("topics")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ topics: data });
  } else {
    // Handle any other HTTP method
  }
}

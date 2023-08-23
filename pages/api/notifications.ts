import { db } from "@/utilities/mongo";

export default async function notifications(req: any, res: any) {
  if (req.method === "GET") {
    const walletAddress = req.query.walletAddress;
    const userData = await db
      .collection("users")
      .findOne({ walletAddress: walletAddress });
    if (userData) {
      const subscribedTopics = userData.subscribedTopics;
      console.log(subscribedTopics);

      let pipeline = [
        {
          $match: {
            topicID: {
              $in: subscribedTopics,
            },
          },
        },
        {
          $project: {
            topicID: {
              $toObjectId: "$topicID",
            },
            name: 1,
            description: 1,
            mediaURL: 1,
            websiteURL: 1,
          },
        },
        {
          $lookup: {
            from: "topics",
            localField: "topicID",
            foreignField: "_id",
            as: "topicData",
          },
        },
        {
          $unwind: {
            path: "$topicData",
          },
        },
      ];

      const result = await db
        .collection("notifications")
        // .find({ topicID: { $in: subscribedTopics } })
        .aggregate(pipeline)
        .toArray();
      res.status(200).json({ notifications: result });
    }
  } else {
    // Handle any other HTTP method
  }
}

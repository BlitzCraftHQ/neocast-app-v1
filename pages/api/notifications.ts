import { db } from "@/utilities/mongo";

export default async function notifications(req: any, res: any) {
  if (req.method === "GET") {
    const walletAddress = req.query.walletAddress;

    let pipeline = [
      {
        $match: {
          walletAddress: walletAddress,
        },
      },
      {
        $unwind: {
          path: "$subscribedTopics",
        },
      },
      {
        $lookup: {
          from: "notifications",
          localField: "subscribedTopics",
          foreignField: "topicID",
          as: "notification",
        },
      },
      {
        $unwind: {
          path: "$notification",
        },
      },
      {
        $project: {
          walletAddress: 1,
          notification: 1,
          subscribedTopic: {
            $toObjectId: "$subscribedTopics",
          },
        },
      },
      {
        $lookup: {
          from: "topics",
          localField: "subscribedTopic",
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
      .collection("users")
      // .find({ topicID: { $in: subscribedTopics } })
      .aggregate(pipeline)
      // .sort({ _id: 1 })
      .toArray();
    res.status(200).json({ notifications: result });
  } else {
    // Handle any other HTTP method
  }
}

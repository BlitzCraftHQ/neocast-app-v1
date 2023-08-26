import { db } from "@/utilities/mongo";

export default async function opt(req: any, res: any) {
  if (req.method === "GET") {
    const walletAddress = req.query.walletAddress;
    const topicID = req.query.topicID;
    const opt = req.query.action;
    console.log(walletAddress, topicID);
    opt === "in"
      ? db
          .collection("users")
          .updateMany(
            { walletAddress: walletAddress },
            { $push: { subscribedTopics: topicID } }
          )
      : db
          .collection("users")
          .updateMany(
            { walletAddress: walletAddress },
            { $pull: { subscribedTopics: topicID } }
          );
    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

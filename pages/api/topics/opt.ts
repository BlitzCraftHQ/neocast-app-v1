import { db } from "@/utilities/mongo";

export default async function opt(req: any, res: any) {
  if (req.method === "PUT") {
    const walletAddress = req.body.walletAddress;
    const topicID = req.body.topicID;
    const opt = req.body.action;
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

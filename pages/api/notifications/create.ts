import { db } from "@/utilities/mongo";
import { ObjectId } from "mongodb";

export default async function create(req: any, res: any) {
  if (req.method === "GET") {
    const notification = await db.collection("notifications").insertOne({
      topicID: req.query.topicID,
      name: req.query.name,
      description: req.query.description,
      mediaURL: req.query.mediaURL,
      websiteURL: req.query.websiteURL,
    });

    console.log("Inserted ID", notification.insertedId.toString());

    // Get topic ID by querying inserted notification's document
    const topic = await db
      .collection("notifications")
      .findOne({ _id: new ObjectId(notification.insertedId.toString()) });

    console.log("Inserted notification", topic.topicID);

    // Get webhook URL from topic document
    const webhookURL = await db
      .collection("topics")
      .findOne({ _id: new ObjectId(topic.topicID) });

    console.log("Webhook URL", webhookURL);

    // Send out a smexy Discord webhook notification
    fetch(webhookURL.webhookURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // the username to be displayed
        username: "NeoCast Notifications",
        // the avatar to be displayed
        avatar_url: "https://i.ibb.co/4t5vt7C/NEO-512-512.jpg",

        // contents of the message to be sent
        content: "",
        // enable mentioning of individual users or roles, but not @everyone/@here
        allowed_mentions: {
          parse: ["users", "roles"],
        },
        // embeds to be sent
        embeds: [
          {
            // decimal number colour of the side of the embed
            color: 11730954,
            // author
            // - icon next to text at top (text is a link)
            author: {
              name: "dragonwocky",
              url: "https://dragonwocky.me/",
              icon_url: "https://dragonwocky.me/assets/avatar.jpg",
            },
            // embed title
            // - link on 2nd row
            title: "title",
            url: "https://gist.github.com/dragonwocky/ea61c8d21db17913a43da92efe0de634",
            // thumbnail
            // - small image in top right corner.
            thumbnail: {
              url: "https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png",
            },
            // embed description
            // - text on 3rd row
            description: "description",
            // custom embed fields: bold title/name, normal content/value below title
            // - located below description, above image.
            fields: [
              {
                name: "field 1",
                value: "value",
              },
              {
                name: "field 2",
                value: "other value",
              },
            ],
            // image
            // - picture below description(and fields)
            image: {
              url: "http://tolkiengateway.net/w/images/thumb/7/75/J.R.R._Tolkien_-_Ring_verse.jpg/300px-J.R.R._Tolkien_-_Ring_verse.jpg",
            },
            // footer
            // - icon next to text at bottom
            footer: {
              text: "footer",
              icon_url:
                "https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png",
            },
          },
        ],
      }),
    });

    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}

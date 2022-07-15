import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("INSERT_EDITION_DROP_ADDRESS");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Ballet show",
        description: "This NFT will give you access to RoyalDAO!",
        image: readFileSync("scripts/assets/crown.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
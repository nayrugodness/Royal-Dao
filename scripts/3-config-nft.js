import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6BF3E193B7297a3eB7E79dDc2e693875c81A1895");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Ballet show",
        description: "This NFT will give you access to RoyalDAO!",
        image: readFileSync("scripts/assets/crown.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
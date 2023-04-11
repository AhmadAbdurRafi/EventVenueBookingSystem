import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "m89w81tl",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skcHB5YF0uqHrDiOyknVDduJ7zr4HZUxQQPEE8cCdm22lRGdx1NXNSgu6QM7ebRfrmsNY9CCifkbSzBa4IuRFqeFpaGDF83HsA7DBR392YuqqccgUp5mv8DoFRyDBXCFklnnYiFFLENyFMOR3nsoRhWPw5S0tLCChZvri2Y5FCm33xUjHVKt",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

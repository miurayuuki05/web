import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "eialkh2r",
  dataset: "production",
  apiVersion: "2023-09-03",
  useCdn: true,
};

const client = createClient(config);

export default client;
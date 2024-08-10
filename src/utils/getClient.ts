import { Client } from "pg";

export const getClient = async () => {
  const client = new Client(process.env.postgre_uri);

  client
    .connect()
    .then(() => console.log("connected"))
    .catch((e) => {
      console.log("got some errors " + e.message);
    });
  return client;
};

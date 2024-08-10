import { Client } from "pg";

export const getClient = async () => {
  const client = new Client(
    "postgresql://postgre_test_owner:uQSf4ixI7pec@ep-weathered-field-a7029hbe.ap-southeast-2.aws.neon.tech/postgre_test?sslmode=require"
  );

  client
    .connect()
    .then(() => console.log("connected"))
    .catch((e) => {
      console.log("got some errors " + e.message);
    });
  return client;
};

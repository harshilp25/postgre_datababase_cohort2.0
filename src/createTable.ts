import { getClient } from "./utils/getClient";

const createTable: () => void = async (): Promise<void> => {
  try {
    const client = await getClient();
    const createUserTable = `
          CREATE TABLE jetha (
           id SERIAL PRIMARY KEY,
           email VARCHAR(20) UNIQUE NOT NULL,
           password  VARCHAR(20) NOT NULL
          )`;

    await client.query(createUserTable);

    const createtodoTable = `
          CREATE TABLE champak (
           id SERIAL PRIMARY KEY,
           title VARCHAR(20) NOT NULL,
           description VARCHAR(20) NOT NULL,
           done BOOLEAN DEFAULT FALSE,
           user_id INTEGER REFERENCES users(id)    
          )`;

    await client.query(createtodoTable);
    console.log("created successfully");
  } catch (error: any) {
    console.error(error.message + " got error at table creating file");
    return;
  }
};

createTable();

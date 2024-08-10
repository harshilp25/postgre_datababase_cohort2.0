import { getClient } from "./utils/getClient";

const insertUser: () => Promise<void> = async (): Promise<void> => {
  try {
    const client = await getClient();

    const insertUser = `
     INSERT INTO jetha (email,password) VALUES ($1,$2) RETURNING id
    `;
    const insertedValues: string[] = ["dev@gmail.com", "123456789"];
    const response = await client.query(insertUser, insertedValues);
    console.log("user has been created" + response);
  } catch (error: any) {
    console.error("got some error at the inserting file " + error.message);
  }
};

const insertTodo = async (userID: number) => {
  try {
    const client = await getClient();
    const insertTodo =
      "INSERT INTO champak (title,description,done,user_id) VALUES ($1,$2,$3,$4) RETURNING user_id";

    const insertedValuesOfTodo = ["heyhey", "learningpglib", true, userID];

    const responseTodo = await client.query(insertTodo, insertedValuesOfTodo);
    console.log("todo" + responseTodo);
  } catch (error: any) {
    console.error("got some error at the inserting file " + error.message);
  }
};

insertUser();

insertTodo(1);

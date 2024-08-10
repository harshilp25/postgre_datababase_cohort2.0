import { getClient } from "./utils/getClient";

const updateUserAndTodo: (userID: number) => Promise<void> = async (
  userID: number
): Promise<void> => {
  try {
    const client = await getClient();
    const updateUserDetails = `
     UPDATE jetha
SET email = $1, password = $2
WHERE id = ${userID} RETURNING id
    `;
    const updateUserDetailsValues = ["harshil1@gmail.com", "123456"];
    const response = await client.query(
      updateUserDetails,
      updateUserDetailsValues
    );
    console.log(
      "updated userdeatils successfully " + JSON.stringify(response.rows[0])
    );

    const updateTodoDetils = `
    UPDATE champak SET done = $1 WHERE user_id = ${userID}
    `;
    const updateTodoDetailsValue = [true];
    await client.query(updateTodoDetils, updateTodoDetailsValue);
    console.log("updated todo deatils successfully");
  } catch (error: any) {
    console.error("got some error at updating file " + error);
    return;
  }
};

updateUserAndTodo(1);

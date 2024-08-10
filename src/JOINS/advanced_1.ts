import { getClient } from "../utils/getClient";

async function getUserAndTodoWithJoin(userID: number): Promise<void> {
  try {
    const client = await getClient();
    const userAndTodoQuery = `
         SELECT jetha.* , champak.title,champak.description,champak.done,champak.user_id
         FROM jetha LEFT JOIN champak ON jetha.id = champak.user_id
         WHERE jetha.id = $1 ;
        `;
    const userAndTodoQueryInputs = [userID];
    const response = await client.query(
      userAndTodoQuery,
      userAndTodoQueryInputs
    );
    console.log(response.rows);
    return;
  } catch (error: any) {
    console.error(error.message + " got error at table advanced_1 file");
    return;
  }
}

getUserAndTodoWithJoin(4);

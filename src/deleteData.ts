import { getClient } from "./utils/getClient";

const deleteTodo = async (userID: number) => {
  try {
    const client = await getClient();
    const deleteTodos = " DELETE FROM champak WHERE user_id = $1";
    const deleteTodosValues = [userID];

    client.query(deleteTodos, deleteTodosValues).then(() => {
      console.log(`todo of userID ${userID} deleted succesfully`);
    });
  } catch (error: any) {
    console.error("got some error at the delete file " + error.message);
    return;
  }
};

const deleteData = async (userID: number) => {
  try {
    const client = await getClient();
    const deleteQuery = "DELETE FROM jetha WHERE id = $1";
    const queryInput = [userID];
    client.query(deleteQuery, queryInput).then(() => {
      console.log("successfully deleted row ");
    });
  } catch (error: any) {
    console.error("got some error at the delete file " + error.message);
    return;
  }
};

deleteTodo(1); // first delete the whole todos otherwise it would throws an errors , if you first try to delete the user itself
deleteData(1);

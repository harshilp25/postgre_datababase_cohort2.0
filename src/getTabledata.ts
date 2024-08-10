import { getClient } from "./utils/getClient";

const getData: () => Promise<void> = async (): Promise<void> => {
  const client = await getClient();

  const usersData = `
     SELECT * FROM jetha ;
    `;
  const response = await client.query(usersData);

  for (let res of response.rows) {
    console.log(
      "usre id " +
        res.id +
        " user email " +
        res.email +
        " user password " +
        res.password
    );
  }
};

const getDataOnGivenId: (userID: number) => Promise<void> = async (
  userID: number
): Promise<void> => {
  const client = await getClient();

  const usersData = "SELECT * FROM jetha WHERE id = $1";
  const getUserValues = [userID];
  const response = await client.query(usersData, getUserValues);

  for (let res of response.rows) {
    console.log(
      "usre id " +
        res.id +
        " user email " +
        res.email +
        " user password " +
        res.password
    );
  }
};

const getUserDetailsFromEmail = async (email: string): Promise<void> => {
  try {
    const client = await getClient();
    const getUserDetails = `
     SELECT * FROM jetha WHERE email = $1
    `;
    const getdataValues = ["harshil1@gmail.com"];
    const response = await client.query(getUserDetails, getdataValues);

    for (let res of response.rows) {
      console.log(
        "usre id lya ae gandu" +
          res.id +
          " user email " +
          res.email +
          " user password " +
          res.password
      );
    }
  } catch (error: any) {
    console.error("got some errors at getTableData file " + error.message);
    return;
  }
};

const getUserTodosForUser = async (userID: number): Promise<void> => {
  try {
    const client = await getClient();
    const getTodos = `
       SELECT * FROM champak WHERE user_id = ${userID}
      `;
    const response = await client.query(getTodos);

    for (let res of response.rows) {
      console.log(
        res.id +
          res.title +
          " " +
          res.description +
          " " +
          res.done +
          " " +
          res.user_id
      );
    }
  } catch (error: any) {
    console.error("got some errors at getTableData file " + error.message);
    return;
  }
};

// getData();

// getUserDetailsFromEmail("harshil1@gmail.com");

getUserTodosForUser(7);

// getDataOnGivenId(1);

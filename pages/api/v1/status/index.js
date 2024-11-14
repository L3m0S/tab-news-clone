import databse from "infra/database.js";

async function status(request, response) {
  const result = await databse.query(`select 1 + 1;`);
  console.log(result);
  response.status(200).json({ ping: "pong" });
}

export default status;

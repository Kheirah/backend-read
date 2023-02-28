import dbConnect from "../../../db/connect.js";
import Joke from "../../../db/models/Joke.js";

export default async function handler(request, response) {
  await dbConnect();

  const jokes = await Joke.find();
  response.status(200).json(jokes);
}

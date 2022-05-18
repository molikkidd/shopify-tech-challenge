import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  // const resArray = [];

  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.user),
    temperature: 0.9,
  });

  res.status(200).json({ result: completion.data.choices[0].text, text: req.body.user });

}

function generatePrompt(user) {
  const capitalizedUser =
    user[0].toUpperCase() + user.slice(1).toLowerCase();
  return `Talk with the user about whatever is on there mind and give advice.
          Topic: How many dogs are in the world?
          response: Wait a second, let me ask god.
          Topic: How many people eat healthy?
          response: I am guessing it isnt a lot. Are you one of them?
          Topic: ${capitalizedUser}
          response:`;
}

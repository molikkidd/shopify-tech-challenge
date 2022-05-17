import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  // const resArray = [];

  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });

  // resArray.push({ result: completion.data.choices[0].text, text: req.body.animal })  
  res.status(200).json({ result: completion.data.choices[0].text, text: req.body.animal });

}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Talk with the user about whatever is on there mind and give advice.

Topic: How many dogs are in the world?
Joke: Wait a second, let me ask god.
Topic: How many people eat healthy?
Joke: I am guessing it isnt a lot. Are you one of them?
Topic: ${capitalizedAnimal}
Joke:`;
}

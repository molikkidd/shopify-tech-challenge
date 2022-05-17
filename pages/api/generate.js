import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text, text: req.body.animal });

  const response = await openai.listFiles();
  console.log('response', response.data)

}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Talk with the user about whatever is on there mind and give advice.

Topic: Cat
Joke: How many lives does a cat have?
Topic: Dog
Joke: What breed of dog goes after anything that is red?
Topic: ${capitalizedAnimal}
Joke:`;
}

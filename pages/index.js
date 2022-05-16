import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [oprompt, setOprompt] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setOprompt(data.text);
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className=' h-screen'>
        <div className="flex justify-center">
          <div className="xl:w-96">
          <h3 className="text-xl text-blue-400 mb-3 ">Name my pet</h3>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="animal"
              placeholder="Enter an animal"
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)} 
              className="w-96 h-40 rounded-md mb-3 border-zinc-900 border-2"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-md text-white" type="submit">Lets Go</button>
          </form>

          <div className='mt-4'>
            <h1 className="text-2xl font-semibold mb-2">Responses</h1>
            Prompt: {oprompt}
            Response: {result}
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

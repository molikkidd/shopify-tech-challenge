import Head from "next/head";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [oprompt, setOprompt] = useState();
  const [listOfResponses, setListOfResponses] = useState(Array);
 
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
    console.log('data', data)
    // push new data to list of responses
    // setListOfResponses(data)
    listOfResponses.push(data)
    setResult(data.result);
    setOprompt(data.text);
    // resets animal input to an empty string
    setAnimalInput("");
  }

  // listOfResponses.push({response:result, prompt: oprompt})

console.log('listOfResponses', listOfResponses)

  const responseList = listOfResponses.map((list, index) => {
    console.log('list', list, 'and index', index)
          return <div className='mt-4 bg-gray-300 rounded-md p-4' index={index}>
                  <div className="mb-3">
                    <h1>Prompt:{list.text}  </h1>  
                  </div>
                  <div>
                    <h1>Response: {list.result}</h1>
                  </div>
                </div>

  })

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className=' h-screen'>
        <div className="flex justify-center">
          <div className="xl:w-96">
          <h3 className="text-xl text-blue-400 mb-3 ">Lets Talk</h3>

          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="animal"
              placeholder=" Whats on your mind ..."
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)} 
              className="w-96 h-40 rounded-md mb-3 border-zinc-900 border-2"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-md text-white" type="submit">Lets Go</button>
          </form>
            <div className='mt-4 bg-gray-300 rounded-md p-4' >
              <h1 className="text-2xl font-semibold mb-2">Responses</h1>

              <div className="mb-3">
             <h1 >Prompt: {oprompt}</h1>  
              </div>
              <div>
                <h1>Response: {result}</h1>
              </div>
            </div>
            <div className='mt-4 bg-gray-300 rounded-md p-4'>
              {responseList}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

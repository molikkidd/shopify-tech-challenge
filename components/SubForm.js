import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function SubForm(props) {

  const {submit, responseList, setAnimalInput, animalInput, localData} = props;
  console.log('localData', localData)
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <meta name='shopify-challenge' content='PWA App' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <main className=' h-screen'>
        <div className="flex justify-center">
          <div className="xl:w-96">
          <h3 className="text-xl text-blue-400 mb-3 ">Lets Talk</h3>

          <form onSubmit={submit}>
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
            </div>
            <div className='mt-4 bg-gray-300 rounded-md p-4'>
              {localData ? localData : responseList}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

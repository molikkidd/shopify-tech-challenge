import React, { useState, useEffect } from "react";
import SubForm from "../components/SubForm";
import ChatBox from "../components/ChatBox";
export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [oprompt, setOprompt] = useState();
  const [listOfResponses, setListOfResponses] = useState(Array);
  const [newData, setNewData] = useState(null);

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
    listOfResponses.push(data)
    // store data in session storage
    window.localStorage.setItem('two', JSON.stringify(listOfResponses))
    // resets animal input to an empty string
    setAnimalInput("");
  }
  console.log('listOfResponses', listOfResponses)

  const responseList = listOfResponses.map((list, index) => {
          return <ul className='mt-4 bg-gray-300 rounded-md p-4' i={index}>
                    <li>
                      <div className="mb-3">
                        <h1>Prompt:{list.text}  </h1>  
                      </div>
                      <div>
                        <h1>Response: {list.result}</h1>
                      </div>
                    </li>
                </ul>

  })
  // access data in local storage to use when offline and throughout the local
  useEffect(() => {
    const localData = localStorage.getItem('two')
    console.log('localData', JSON.parse(localData))
    
    setNewData(JSON.parse(localData))
   
  }, [])
  
    if (newData === null ) {
      return <ChatBox 
       submit={onSubmit} 
       responseList={responseList}
       setAnimalInput={setAnimalInput} 
       animalInput={animalInput}
       />
    } else {
    const storedList = newData.map((list, index) => {
    console.log('storedlist', list)
          return <ul className='mt-4 bg-white rounded-md p-4 shadow-md' i={index}>
                    <li>
                      <div className="mb-3">
                        <h1>Prompt:{list.text}  </h1>  
                      </div>
                      <div>
                        <h1>Response: {list.result}</h1>
                      </div>
                    </li>
                </ul>

  })

  return <ChatBox 
  submit={onSubmit} 
  responseList={responseList} 
  setAnimalInput={setAnimalInput} 
  animalInput={animalInput}
  localData={storedList}
  />



} 
}

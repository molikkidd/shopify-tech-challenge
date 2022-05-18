import React, { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [listOfResponses, setListOfResponses] = useState(Array);
  const [newData, setNewData] = useState(null);

  async function onSubmit(event) {

    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInput }),
    });

    const data = await response.json();
    console.log('data', data)
    // push new data to list of responses
    listOfResponses.unshift(data)
    // store data in session storage
    window.sessionStorage.setItem('two', JSON.stringify(listOfResponses))
    // resets user input to an empty string
    setUserInput("");
  }
  const responseList = listOfResponses.map((list, index) => {
          return <ul className='mt-4 bg-gray-300 rounded-md p-4' i={index}>
                    <li>
                      <div className="mb-3">
                        <h1>You: {list.text}</h1>  
                      </div>
                      <div>
                        <h1>Me: {list.result}</h1>
                      </div>
                    </li>
                </ul>

  })
  // access data in session storage to use when offline and throughout the session
  useEffect(() => {
    const sessionData = sessionStorage.getItem('two')    
    setNewData(JSON.parse(sessionData))
  }, [])
    if (newData === null ) {
      return <ChatBox 
       submit={onSubmit} 
       responseList={responseList}
       setUserInput={setUserInput} 
       userInput={userInput}
       />
    } else {
      const storedList = newData.map((list, index) => {
      console.log('storedlist', list)
            return <ul className='mt-4 bg-white rounded-md p-4 shadow-md' i={index}>
                      <li>
                        <div className="mb-3">
                          <h1>You: {list.text}</h1>  
                        </div>
                        <div>
                          <h1>Me: {list.result}</h1>
                        </div>
                      </li>
                  </ul>

      })
      return <ChatBox 
      submit={onSubmit} 
      responseList={responseList} 
      setUserInput={setUserInput} 
      userInput={userInput}
      sessionData={storedList}
      />
} 
}

import React from 'react'
import Navbar from './Navbar';

export default function ChatBox(props) {
    const {submit, responseList, setAnimalInput, animalInput, sessionData} = props;

  return (
    <div className='bg-gradient-to-r from-sky-500 to-white h-screen'>
        <Navbar/>
    <div class="flex justify-center mx-20" >
        <div className='grid grid-cols-2 gap-20 my-8'>
          <div class="w-full col-span-1 bg-blue-100 rounded-md shadow-md"> 
            {/* INTRO */}
            <div class="relative w-full p-6 overflow-y-auto bg-blue-100 mt-10">
                <h2 className='mb-6 text-lg font-semibold'>This application is a chatbox, but instead of talking with other people, you will be talking to hopefully your favorite friend. Yourself.</h2>
              <ul class="space-y-2">
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-6 text-gray-700 bg-white rounded shadow">
                    <span class="block">Step 1: Start of by asking yourself a question</span>
                  </div>
                </li>
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-6 text-gray-700 bg-white rounded shadow">
                    <span class="block">Step 2: Reply to the response and keep the conversation going.</span>
                  </div>
                </li>
              </ul>

              <p className='text-md font-semibold my-2 mt-6'>
              Being able to communicate effectively is one of the most important life skills to learn. Communication itself is defined as transferring information to produce greater understanding.
              </p>

              <p className='text-md font-semibold my-2'>
              Good communication skills are essential to allow others and yourself to understand information more accurately and quickly.
                In contrast, poor communication skills lead to frequent misunderstandings and frustration.
              </p>

              <p className='text-md font-semibold my-2'>
              In situations where you disagree with what someone else has to say, whether it be with an employer, a co-worker, or a friend, it is important to sympathize with their point of view rather than simply try to get your message across.
              </p>
            
            <h2 className='text-lg font-bold text-gray-400'>Here is a Joke or Two</h2>
                
              <p className='text-md my-2'>
              "A programmer is a person who fixes a problem you don’t know you have in a way that you don’t understand."
              </p>

              <p className='text-md my-2'>
              "Debugging is like being the detective in a crime movie where you’re also the murderer."
              </p>
            </div>
          </div>
            {/* CHATBOX */}
          <div className='w-full col-span-1'>
          <div class="relative flex items-center p-3 border-b border-gray-300 bg-amber-300 rounded-md hover:bg-gradient-to-r from-amber-500 to-yellow-300">
              <img class="object-cover w-10 h-10 rounded-full"
                src="https://stealthoptional.com/wp-content/uploads/2021/12/1f356a16-4821-4e31-9578-189d51793065-mandalorian-babyyoda-sideshow-photo1-frontpage-700x319-1.jpg" alt="username" />
              <span class="block ml-2 font-bold text-gray-600">Chatter AI</span>

            </div>
            <div class="flex items-center justify-between w-full p-3 border-t bg-yellow-200 h-40 border-gray-300 shadow-md rounded-md">
            
            <form className='w-full px-4' onSubmit={submit} >
            <input
              type="text"
              name="animal"
              placeholder=" Whats on your mind ..."
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)} 
              class="block w-full py-2 pl-4 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              />
          </form>
              <button type="submit">
                <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            {/* THE CHATBOX */}
            <div class="relative w-full p-6 overflow-y-auto h-[40rem] mt-10 bg-blue-300 rounded-md shadow-md">
              <ul class="space-y-2">
                <li>
                {responseList.length === 0 ? sessionData : responseList.concat(sessionData)}
                </li>
              </ul>
            </div>
          </div>
          </div>
      </div>
    </div>

  )
}

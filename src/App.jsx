import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState()

  const handleChange = (e) => {
    const value = e.target.value

    const processedText = value
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')     // Títulos con #
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')  // Negrita con **
      .replace(/\*(.*?)\*/gim, '<em>$1</em>');  // Cursiva con *

    setText(processedText)
  }


  return (
    <div className='bg-yellow-100 flex flex-col content-center items-center'>
      <h1 className='text-4xl font-extrabold'>My Markdown</h1>
      <div className='flex h-screen justify-start p-10 bg-red-400 w-[1200px]'>
        <div className='flex-col bg-purple-300 w-[600px]'>
          <h1 className='text-black font-extrabold'>Preview box</h1>
          <textarea type="textarea" className='bg-blue-200 w-full h-full justify-start' onChange={handleChange} />
        </div>
        <div>
          <div className='flex-col items-start bg-red-200 h-full w-[600px]'>
            <h1 className='text-black  font-extrabold'>Markdown Result</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

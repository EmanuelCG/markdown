import { useState } from 'react'
import './App.css'
import { TbArrowsTransferDown } from "react-icons/tb";
import { BsMarkdownFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";


function App() {

  const [text, setText] = useState('') // Inicializa con una cadena vacía

  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const handleChange = (e) => {
    const value = e.target.value

    const processedText = value
      .replace(/^#\s+(.*)$/gm, '<h1 class="text-3xl font-bold">$1</h1>')  // Títulos con #
      .replace(/^##\s+(.*)$/gm, '<h2 class="text-xl font-bold">$1</h2>')  // Subtítulos con ##
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Negrita con **
      .replace(/\*(.*?)\*/g, '<em>$1</em>')  // Cursiva con *
      .replace(/```([^```]+)```/gs, (_, code) => `<pre class="my-2"><code>${escapeHtml(code.trim())}</code></pre>`)  // Bloques de código con ```
      .replace(/\n/g, '<br />');  // Convertir saltos de línea en <br />

    setText(processedText)
  }

  return (
    <div className='relative bg-black flex flex-col content-center items-center h-screen w-full'>
      <FaCat className='absolute text-white hover:text-[#bbff33] transition-all duration-300 h-24 w-24 top-[14%] right-[12%] transform scale-x-[-1] hover:w-32 hover:h-32' />
      <div className='flex text-4xl font-extrabold text-white items-center'>My Markdown <BsMarkdownFill className=' ml-4 w-10 text-white translate-y-1 hover:text-[#bbff33] transition-all duration-300' /></div>
      <div className='flex flex-col h-[30vh] justify-start p-5 w-[90vw] text-center pt-10'>
        <code>
          <h1 className='text-white text-3xl font-black'>Markdown Syntax Guide</h1>
          <h2 className='text-white py-4'>To create a main header (H1), start the line with # followed by a space:</h2>
          <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'># This is a Heading 1</span>
          <h2 className='text-white py-4'>For a secondary header (H2), use ## followed by a space:</h2>
          <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>## This is a Heading 2</span>
          <h2 className='text-white py-4'>To bold text, wrap the word or phrase with double asterisks **:</h2>
          <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>**This text is bold**</span>
          <h2 className='text-white py-4'>To italicize text, wrap the word or phrase with a single asterisk *:</h2>
          <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>*This text is italicized*</span>
        </code>
      </div>
      <div className='flex h-[65vh] justify-start p-5 mt-4 w-[90vw]'>
        <div className='relative flex-col bg-gray-400 w-[640px] mr-10 overflow-hidden rounded-md'>
          <h1 className='text-white font-extrabold text-2xl text-center'>Editor</h1>
          <textarea
            type="textarea"
            className='w-full h-screen justify-start p-2 border-none outline-none resize-none overflow-y-auto'
            onChange={handleChange}
            rows="10"
          />
        </div>
        <TbArrowsTransferDown className='absolute w-6 h-6 top-[60%] rotate-90 left-[48.5%] text-white ' />
        <div>
          <div className='flex-col items-start bg-white h-full w-[650px] overflow-hidden rounded-md'>
            <h1 className='text-black font-extrabold text-2xl bg-[#bbff33] text-center '>Markdown</h1>
            <div dangerouslySetInnerHTML={{ __html: text }} className='p-2'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

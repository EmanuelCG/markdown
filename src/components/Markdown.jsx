import { marked } from "marked";
import { useEffect, useState } from "react";
import { BsMarkdownFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { TbArrowsTransferDown } from "react-icons/tb";
import './MarkdownPreview.css'
export default function Markdown() {

    const [text, setText] = useState('') // Inicializa con una cadena vacía

    const handleChange = (e) => {
        const value = e.target.value
        setText(value)
    }
    useEffect(() => {
        // Texto inicial para el editor
        const initialText = `# Header 1
  ## Header 2
  [Link to Google](https://www.google.com)
  \`Inline code\`
  \`\`\`
  Code block
  \`\`\`
  - List item
  > Blockquote
  
  ![Alt text](https://via.placeholder.com/150)
  **Bold text**`;

        setText(initialText);
    }, []);
    const getMarkdownText = () => {
        const rawMarkup = marked(text, { breaks: true })
        return { __html: rawMarkup }
    }

    return (
        <div className='relative flex flex-col items-center content-center w-full h-screen bg-black'>
            <FaCat className='absolute text-white hover:text-[#bbff33] transition-all duration-300 h-24 w-24 top-[14%] right-[12%] transform scale-x-[-1] hover:w-32 hover:h-32' />
            <div className='flex items-center text-4xl font-extrabold text-white'>My Markdown <BsMarkdownFill className=' ml-4 w-10 text-white translate-y-1 hover:text-[#bbff33] transition-all duration-300' /></div>
            <div className='flex flex-col h-[30vh] justify-start p-5 w-[90vw] text-center pt-10'>
                <code>
                    <h1 className='text-3xl font-black text-white'>Markdown Syntax Guide</h1>
                    <h2 className='py-4 text-white'>To create a main header (H1), start the line with # followed by a space:</h2>
                    <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'># This is a Heading 1</span>
                    <h2 className='py-4 text-white'>For a secondary header (H2), use ## followed by a space:</h2>
                    <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>## This is a Heading 2</span>
                    <h2 className='py-4 text-white'>To bold text, wrap the word or phrase with double asterisks **:</h2>
                    <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>**This text is bold**</span>
                    <h2 className='py-4 text-white'>To italicize text, wrap the word or phrase with a single asterisk *:</h2>
                    <span className='bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300'>*This text is italicized*</span>
                </code>
            </div>
            <div className='flex h-[65vh] justify-start p-5 mt-4 w-[90vw]'>
                <div className='relative flex-col bg-gray-400 w-[640px] mr-10 overflow-hidden content-between rounded-md'>
                    <h1 className='text-2xl font-extrabold text-center text-white'>Editor</h1>
                    <textarea
                        type="textarea"
                        className='justify-start w-full p-2 overflow-y-auto border-none outline-none resize-none h-[100%]'
                        onChange={handleChange}
                        value={text}
                        id="editor"
                        rows="10"
                    />
                </div>
                <TbArrowsTransferDown className='absolute w-6 h-6 top-[60%] rotate-90 left-[48.5%] text-white ' />
                <div>
                    <div className='flex-col items-start bg-white h-full w-[650px] overflow-hidden rounded-md'>
                        <h1 className='text-black font-extrabold text-2xl bg-[#bbff33] text-center mb-4'>Markdown</h1>
                        <div dangerouslySetInnerHTML={getMarkdownText()} className='p-2 overflow-y-auto markdown-preview h-[100%]' id="preview"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
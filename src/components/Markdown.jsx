import { marked } from "marked";
import { useEffect, useState } from "react";
import { BsMarkdownFill } from "react-icons/bs";
import { FaCat } from "react-icons/fa";
import { TbArrowsTransferDown } from "react-icons/tb";
import './MarkdownPreview.css'
export default function Markdown() {

    const [text, setText] = useState('')
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen); // Alternar el estado del dropdown
    };

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
            <div className='flex items-center text-4xl font-extrabold text-white'>My Markdown <BsMarkdownFill className=' ml-4 w-10 text-white translate-y-1 hover:text-[#bbff33] transition-all duration-300' /></div>
            <div className="flex flex-col h-[10vh] justify-start p-5 w-[90vw] text-center pt-10">
                <div className="relative inline-block mt-4 text-left">
                    <button
                        type="button"
                        className={`flex content-center justify-center w-full px-4 py-2 text-4xl font-black text-black rounded-md shadow-sm  focus:outline-none  focus:ring-offset-2 focus:ring-black transition-all duration-300 ${isDropdownOpen ? 'bg-[#bbff33]' : 'bg-white'}`}
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        Click me for guide <FaCat className={`text-black hover:text-[#bbff33] transition-all duration-300 h-9 w-9 ml-4 transform scale-x-[-1] ${isDropdownOpen ? 'rotate-12' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute mt-2 w-full rounded-md shadow-lg bg-gray-500 ring-1 ring-black ring-opacity-5 z-10 overflow-auto max-h-[40vh]">
                            <code className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create a main header (H1), start the line with # followed by a space:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300"># This is a Heading 1</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">For a secondary header (H2), use ## followed by a space:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">## This is a Heading 2</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To bold text, wrap the word or phrase with double asterisks **:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">**This text is bold**</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To italicize text, wrap the word or phrase with a single asterisk *:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">*This text is italicized*</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create a blockquote, start the line with &gt;:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">&gt; This is a blockquote</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create an unordered list, use dashes or asterisks:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">- Item 1<br />- Item 2<br />- Item 3</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create an ordered list, use numbers followed by periods:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">1. First item<br />2. Second item<br />3. Third item</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create a link, use square brackets followed by parentheses:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">[OpenAI](https://openai.com)</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To add an image, use an exclamation mark before the link syntax:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">![Alt text](https://example.com/image.jpg)</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To write inline code, wrap the text with backticks:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">`This is inline code`</span>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="py-4 text-white">To create a code block, wrap the text with triple backticks:</h2>
                                    <span className="bg-gray-300 p-2 hover:bg-[#bbff33] transition-all duration-300">```<br />This is a code block<br />```</span>
                                </div>
                            </code>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex h-[100%] justify-start p-5 mt-4 w-[90vw]'>
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
                <TbArrowsTransferDown className='absolute w-6 h-6 top-[60%] rotate-90 left-[48.5%] text-white hover:text-[#bbff33] ' />
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
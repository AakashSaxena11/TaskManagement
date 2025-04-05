import React from 'react';
import { RxCross2 } from "react-icons/rx"; 

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>

      {/* Input Modal */}
      <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className='w-2/6 bg-gray-900 p-4 rounded'>
          
          {/* Close Button */}
          <div className='flex justify-end'>
            <button className='text-xl hover:bg-red-800 text-gray-200 p-1' onClick={() => setInputDiv("hidden")}>
              <RxCross2 />
            </button>
          </div>

          {/* Input Fields */}
          <input type="text" placeholder="Title" name="title" className='px-3 py-2 rounded w-full bg-gray-700 my-3' />
          <textarea 
            name="desc"
            cols="30"
            rows="10"
            placeholder='Description...'
            className='px-3 py-2 rounded w-full bg-gray-700 my-3'
          ></textarea>

          {/* Submit Button */}
          <button className='px-3 py-2 bg-blue-400 rounded text-xl w-full'>
            Submit
          </button>

        </div>
      </div>
    </>
  );
};

export default InputData;

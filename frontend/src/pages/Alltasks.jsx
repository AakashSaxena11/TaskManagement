import React, { useState } from 'react';
import Cards from '../components/Cards';
import { IoIosAddCircle } from "react-icons/io";
import InputData from '../components/InputData';

const Alltasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden");

  return (
    <>
      <div>
        <div className='flex justify-end'>
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircle className='text-4xl text-gray-300 hover:text-gray-100 transition-all duration-300'/>
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv}/>
      </div>
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  );
};

export default Alltasks;

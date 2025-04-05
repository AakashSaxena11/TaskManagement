import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Cards = ({home, setInputDiv}) => {
  const data = [
    {
      title: "Task Management project",
      desc: "This is my 1st MERN based project, I have to complete it as soon as possible.",
      status: "Incomplete",
    },
    {
      title: "DSA concepts",
      desc: "I need to have a good command on DSA concepts which will help me to get placed in a good org.",
      status: "Incomplete",
    },
    {
      title: "Assignment",
      desc: "I have multiple assignments, which are required to be completed as soon as possible.",
      status: "Completed",
    },
    {
      title: "Resume",
      desc: "I have to improve my resume in order to impress recruiting personals.",
      status: "Completed",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4"> 
      {data && data.map((items, i) => (
        <div className='flex flex-col justify-between bg-gray-800 rounded p-4'>
        <div>
          <h3 className='text-xl font-semibold'>{items.title}</h3>
          <p className='text-gray-300 my-2'>{items.desc}</p>
          </div>
          <div className='mt-4 w-full flex items-center gap-2'>
            <button className={`${
              items.status === "Incomplete" ? "bg-red-500" : "bg-green-700"
            }  rounded p-2 w-3/6`}>
            {items.status}
            </button>
            <div className='text-white text-xl flex justify-around p-2 w-3/6'>
              <button><CiHeart /></button>
              <button><FaEdit /></button>
              <button><MdDelete /></button>
            </div>
          </div>
          </div>
      ))}
      {home === "true" && (
        <button className='flex flex-col justify-center items-center 
    bg-gray-800 rounded p-4 hover:scale-105 cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed")}>
    <IoIosAddCircle className='text-5xl text-gray-300'/>
    <h2 className='text-2xl font-semibold text-gray-300 mt-4'>Add Task</h2>
    </button>
    )}
    </div>
  );
};

export default Cards;
import React from "react";
import { CgNotes } from "react-icons/cg";
import { GiAlliedStar } from "react-icons/gi";
import { MdIncompleteCircle } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <GiAlliedStar />,
      link: "/importanttasks",
    },
    {
      title: "Incomplete tasks",
      icon: <MdIncompleteCircle />,
      link: "/incompletetasks",
    },
    {
      title: "Completed tasks",
      icon: <IoMdDoneAll />,
      link: "/completedtasks",
    },
  ];
  return (<>
    <div>
    <h2 className="text-xl font-semibold">Aakash Saxena</h2>
    <h4 className="">aakashsaxena02102002</h4>
    <h4 className="mb-1">@gmail.com</h4>
    <hr className="mb-4"/>
    </div>
    <div>
      {
        data.map((items, i) => (
          <Link 
          to={items.link}
          key={i}
          className="mb-4 flex items-center hover:bg-gray-600 p-2 
          rounded transition-all duration-300">
            {items.icon}&nbsp;{items.title}
            </Link> 
        ))
      } 
    </div>
    <div>
      <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
    </div>
    </>
  );
};

export default Sidebar;
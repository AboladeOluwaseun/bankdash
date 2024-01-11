import React from 'react'
import { NavLink } from 'react-router-dom';
import { sideMenu } from './sidebarconstants';

const Sidebar = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className=" hidden lg:block bg-white  border-r-[1px] py-[1.6rem] px-6 border-r-solid border-r-border">
        <ul className=" flex flex-col gap-[0.75rem] ">
          {sideMenu.map((item, index) => {
            return (
              <a
                to={item.link}
                onClick={() => setActive(index)}
                className={`flex gap-[1.25rem] w-[13rem] rounded-[0.875rem] cursor-pointer transform active:scale-105 p-[0.75rem] ${
                  active === index
                    ? " hover:bg-navBarBg hover:rounded-[0.875rem]"
                    : "hover:bg-fiverockBackground3 hover:rounded-none"
                }   transition-transform ${
                  active === index && "bg-navBarBg  text-white  "
                } `}
                key={item.id}
              >
                <img
                  className=" w-[1.5rem] h-[1.5rem] text-white"
                  src={active === index ? item.icon2 : item.icon1}
                  alt={`${item.name}-image`}
                />
                <p
                  className={` text-[1rem] font-[700] leading-[1.5625rem] text-primaryGrey ${
                    active === index && " text-primaryBlue"
                  }`}
                >
                  {item.name}
                </p>
              </a>
            );
          })}
        </ul>
    </div>
  )
}

export default Sidebar
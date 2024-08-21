import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // aratılacak metni al
    const text = e.target[0].value;

    // metin boşsa durdur
    if (text.trim() ==="") return;

    navigate(`results?search_query=${text}`);


    
  };

  return (
    <header className='p-4 flex justify-between items-center'>
        <Link to={'/'} className='flex gap-2 items-center'>
          <img className="w-[50px]" src="/youtube.png" alt="logo" />
          <h1 className='text 2xl max-sm:hidden font-mono'>Youtube</h1>
        </Link>

      <form onSubmit={handleSubmit} className='group flex border border-gray-400 rounded-[20px] overflow-hidden'>
          <input className= 'group-hover:border-blue-500 bg-black border border-transparent px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500' type="text" placeholder='Ara...' />
          <button className='border-l px-4 bg-zinc-800 text-2xl'> <FaSearch />
          </button>
      </form>
      <div className='flex gap-3 text-xl cursor-pointer'>
        <FaBell className='hover:text-gray-400 duration-[250ms]'/>
        <IoVideocam className='hover:text-gray-400 duration-[250ms]'/>
        <MdVideoLibrary className='hover:text-gray-400 duration-[250ms]'/>
      </div>
    </header>
      
  )
}

export default Header;

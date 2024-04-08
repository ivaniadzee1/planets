import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center h-48 relative" style={{ background: `url("assets/Group6.png") #070724` }}>
      <h1 className="text-3xl text-white font-bold ml-10 cursor-pointer"> <Link to="/">THE PLANETS</Link> </h1>

        <ul className="flex flex-row mr-14 text-white">
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to="/mercury">MERCURY</Link></li>
       <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4">  <Link to='/venus'>VENUS </Link> </li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to='/earth'>EARTH</Link> </li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to='/mars'>MARS</Link></li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to='/jupiter'>JUPITER</Link></li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to='/saturn'>SATURN</Link></li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"><Link to='/uranus'>URANUS</Link></li>
          <li className="cursor-pointer  pl-[20px] font-bold text-base text-gray-300 ml-4"> <Link to='/neptune'>NEPTUNE</Link> </li>
        </ul>
      </div>

      <div className="w-full h-px bg-gray-500"></div>
    </div>
  );
}

export default Header;

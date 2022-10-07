import { useState } from "react";
import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiMessage3Line,
  RiCalendar2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSlackLine,
  RiCheckLine,
  RiFilter2Line,
  RiSearchEyeLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#141517]">
      {/* Sidebar */}
      <sidebar
        className={`bg-[#1E1F24] fixed ${
          showMenu ? "-left-0" : "-left-full"
        } lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all overflow-y-scroll z-50`}
      >
        {/* Menu */}
        <div>
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-white uppercase font-bold text-2xl tracking-[4px]">
              JT Logo
            </h1>
          </div>
          {/* Nav */}
          <nav>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiDashboard3Line /> Analytic
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiEarthLine />
              <span className="flex-1 flex items-center justify-between gap-4">
                Social media <RiArrowDownSLine />{" "}
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiMessage3Line /> Message
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
            >
              <RiCalendar2Line /> Schedule
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 text-gray-200 py-2 hover:text-gray-200 transition-colors"
            >
              <span className="flex items-center gap-4">
                <RiSettings3Line className="text-orange-600" />
                <div className="flex-1 flex items-center justify-between">
                  Settings
                  <RiArrowUpSLine />
                </div>
              </span>
              <nav className="flex flex-col border-l border-gray-600 ml-2">
                <a href="#" className="relative pl-8 py-2 text-gray-300">
                  <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-orange-600 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
                  Plan
                </a>
                <a href="#" className="relative pl-8 py-2 text-gray-400">
                  <RiCheckboxBlankCircleFill className="absolute -left-[7px] text-gray-500 text-sm top-[50%] -translate-y-[50%] p-[4px] bg-[#1E1F24] rounded-full" />
                  Security
                </a>
              </nav>
            </a>
          </nav>
        </div>
        {/* Logout */}
        <div>
          <a
            href="#"
            className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors"
          >
            <RiLogoutCircleRLine /> Logout
          </a>
        </div>
      </sidebar>
      {/* Btn menu movile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed right-4 bottom-4 bg-[#664EFA] ring-4 ring-[#141517] text-white text-xl p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>

      {/* Content */}
      <main className="lg:pl-80 p-8">
        {/* Header */}
        <header className="fixed left-0 top-0 w-full bg-[#141517] p-8 flex justify-end border-b border-gray-500">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="relative text-white text-lg">
                <RiNotification3Line />
                <RiCheckboxBlankCircleFill className="text-orange-600 text-[8px] absolute -top-[2px] right-0" />
              </a>
            </li>
            <li>
              <a href="#" className="flex text-white items-center gap-2">
                <img
                  src="https://img.freepik.com/foto-gratis/chica-romantica-sonrisa-astuta-blusa-vintage-sentada-cama-tocando-su-barbilla-mano-retrato-mujer-joven-linda-sonadora-flor-peinado-descansando-dormitorio-manana_197531-3187.jpg"
                  className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
                />
                Ferra Alexandra
                <RiArrowDownSLine />
              </a>
            </li>
          </ul>
        </header>
        {/* Main content */}
        <div className="pt-28">
          <h1 className="text-4xl text-gray-300 my-10">Plan & Pricing</h1>
          {/* Plans */}
          <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiSlackLine className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px]">Personal</h2>
                <p className="text-gray-500 mb-4">lorem ipsum</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  Free
                </h5>
                <p className="text-gray-500 mb-8">For a lifetime</p>
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lorem ipsum
                  dolor sit amet
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lorem ipsum
                  dolor sit amet
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lorem ipsum
                  dolor sit amet
                </li>
              </ul>
            </div>
            {/* Card */}
            <div className="bg-[#664EFA] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiSearchEyeLine className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px] text-white">
                  Profesional
                </h2>
                <p className="text-gray-300 mb-4">lorem ipsum</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold text-white">
                  $99.99
                </h5>
                <p className="text-gray-300 mb-8">For a lifetime</p>
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-100">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lorem ipsum
                  dolor sit amet
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lorem ipsum
                  dolor sit amet
                </li>
              </ul>
            </div>
            {/* Card */}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10">
              <div className="flex flex-col items-center mb-20">
                <RiFilter2Line className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl uppercase tracking-[8px]">
                  Interprice
                </h2>
                <p className="text-gray-500 mb-4">lorem ipsum</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  $199.99
                </h5>
                <p className="text-gray-500 mb-8">For a lifetime</p>
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                  Current plan
                </button>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lorem
                  ipsum dolor sit amet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

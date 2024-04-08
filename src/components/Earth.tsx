import { Link } from "react-router-dom"
import Header from "./Header"


function Earth() {
  return (
    <div>
    <Header/>
  <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex justify-center items-center mt-[50px]">
              <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                  <img src="/assets/earth1.svg" alt="Mercury" className="w-[256px] h-[256px] mt-[-235px] z-0 ml-[30px]" />
              </div>

              <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                  <div className="w-[263px] h-[104px] text-7xl text-white">
                      <h1>EARTH</h1>
                  </div>
                  <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.</p>
                  <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Earth">Source : Wikipedia</a>
              </div>

              <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
               <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#6D2ED5;]">OVERVIEW</button>
                 <Link to="/earthinternal"><button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">INTERNAL STRUCTURE</button></Link> 
             <Link to='/earts'><button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">SURFACE GEOLOGY</button></Link> 
              </div>
          </div>

          <footer className="flex justify-between items-center w-full p-20">
  <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">0.99  DAYS</h1> </div>
  <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">365.26 DAYS</h1>  </div>
  <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">6,371 KM</h1> </div>
  <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">16°C</h1></div>
</footer>

      </div>
      </div>
  )
}

export default Earth

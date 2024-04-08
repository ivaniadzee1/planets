import { Link } from "react-router-dom"
import Header from "../components/Header"


function Saturnsurface() {
  return (
    <div>
      <div>
      <Header/>
    <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center mt-[50px]">
                <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                    <img src="/assets/saturn1.svg" alt="Mercury" className="w-[256px] h-[256px] mt-[-80px] z-0 ml-[30px]" />
                    <img className="z-10 mt-[-50px] ml-[35px]" src="/assets/saturn3.svg" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                    <div className="w-[263px] h-[104px] text-7xl text-white">
                        <h1>SATURN</h1>
                    </div>
                    <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth..</p>
                    <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Saturn">Source : Wikipedia</a>
                </div>

                <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
                <Link  to="/saturn"> <button className="w-[350px] h-[48px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">OVERVIEW</button></Link>
                   <Link to="/saturnnt"><button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">INTERNAL STRUCTURE</button></Link> 
                    <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#CD5120;]">SURFACE GEOLOGY</button>
                </div>
            </div>

            <footer className="flex justify-between items-center w-full p-20">
                    <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">10.8 HOURS</h1> </div>
                    <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">29.46 YEARS</h1>  </div>
                    <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">58,232 KM</h1> </div>
                    <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">-138°C</h1></div>
                </footer>

        </div>
        </div>
    </div>
  )
}

export default Saturnsurface

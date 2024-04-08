import { Link } from "react-router-dom"
import Header from "../components/Header"

const MercurySurface = () => {
  return (
    <div>
      <Header/>
    <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center mt-[50px]">
                <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                    <img src="/assets/mercury1.svg" alt="Mercury" className="w-[256px] h-[256px] mt-[-80px] z-0 ml-[30px]" />
                    <img className="z-10 mt-[-50px] ml-[35px]" src="/assets/mercury3.svg" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                    <div className="w-[263px] h-[104px] text-7xl text-white">
                        <h1>MERCURY</h1>
                    </div>
                    <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.</p>
                    <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Mercury_(planet)">Source : Wikipedia</a>
                </div>

                <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
                <Link  to="/mercury"> <button className="w-[350px] h-[48px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">OVERVIEW</button></Link>
                   <Link to="/mercuryInternal"><button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">INTERNAL STRUCTURE</button></Link> 
                    <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#419EBB]">SURFACE GEOLOGY</button>
                </div>
            </div>

            <footer className="flex justify-between items-center w-full p-20">
    <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">58.6 DAYS</h1> </div>
    <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">87.97 DAYS</h1>  </div>
    <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">2,439.7 KM</h1> </div>
    <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">430°C</h1></div>
</footer>

        </div>
        </div>
  )
}

export default MercurySurface

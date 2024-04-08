import { Link } from "react-router-dom"
import Header from "../components/Header"

function JupiterInternal() {
  return (
    <div>
    <Header/>
<div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex justify-center items-center mt-[50px]">
            <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                <img src="/assets/jupiter.svg" alt="Mercury" className="w-[290px] h-[290px] mt-[-265px] z-0 ml-[30px]" />
                <img className="z-10 w-[139px] h-[238px] mt-[-270px] ml-[150px]" src="/assets/jupiter2.svg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                <div className="w-[263px] h-[104px] text-7xl text-white">
                    <h1>JUPITER</h1>
                </div>
                <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.</p>
                <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Jupiter">Source : Wikipedia</a>
            </div>

            <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
            <Link  to="/jupiter"> <button className="w-[350px] h-[48px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">OVERVIEW</button></Link>
                <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#D83A34;]">INTERNAL STRUCTURE</button>
               <Link to="/jupitsur"><button className="w-[350px] h-[48px] bg-none text-white border-2 mt-[20px] border-gray-500 hover:bg-gray-600">SURFACE GEOLOGY</button></Link>
            </div>
        </div>

        <footer className="flex justify-between items-center w-full p-20">
  <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">9.93 HOURS</h1> </div>
  <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">11.86 YEARS</h1>  </div>
  <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">69,911 KM</h1> </div>
  <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">-108°C</h1></div>
</footer>

    </div>
    </div>
  )
}

export default JupiterInternal

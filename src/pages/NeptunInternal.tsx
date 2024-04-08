import { Link } from "react-router-dom"
import Header from "../components/Header"


function NeptunInternal() {
    return (
        <div>
            <Header />
            <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex justify-center items-center mt-[50px]">
                    <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                        <img src="/assets/neptune1.svg" alt="Mercury" className="w-[336px] h-[336px] mt-[-285px] z-0 ml-[30px]" />
                        <img className="w-[161px] h-[252px] z-10 mt-[-296px] ml-[150px]" src="/assets/neptune2.svg" alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                        <div className="w-[263px] h-[104px] text-7xl text-white">
                            <h1>NEPTUN</h1>
                        </div>
                        <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.</p>
                        <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/NEPTUNE">Source : Wikipedia</a>
                    </div>

                    <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
                        <Link to='/neptune'> <button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">OVERVIEW</button></Link>
                        <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#2D68F0;]">INTERNAL STRUCTURE</button>
                        <Link to='/neptunss'><button className="w-[350px] h-[48px] mt-[20px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">SURFACE GEOLOGY</button></Link>
                    </div>
                </div>

                <footer className="flex justify-between items-center w-full p-20">
                    <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">1.03  DAYS</h1> </div>
                    <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">1.88 YEARS</h1>  </div>
                    <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">3,389.5 KM</h1> </div>
                    <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">−28°C</h1></div>
                </footer>

            </div>
        </div>
    )
}

export default NeptunInternal
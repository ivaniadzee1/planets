import { Link } from "react-router-dom"
import Header from "../components/Header"


function VenusInternal() {
    return (
        <div>
            <Header />
            <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flex justify-center items-center mt-[50px]">
                    <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                        <img src="/assets/venus1.svg" alt="Mercury" className="w-[290px] h-[290px] mt-[-265px] z-0 ml-[30px]" />
                        <img className="z-10 w-[139px] h-[238px] mt-[-270px] ml-[150px]" src="/assets/venus2.svg" alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                        <div className="w-[263px] h-[104px] text-7xl text-white">
                            <h1>VENUS</h1>
                        </div>
                        <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.</p>
                        <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Venus">Source : Wikipedia</a>
                    </div>

                    <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
                       <Link to='/venus'><button className="w-[350px] h-[48px] bg-none text-white border-2  border-gray-500 hover:bg-gray-600">OVERVIEW</button></Link> 
                        <button className="w-[350px] h-[48px] bg-none mt-[20px] text-white bg-[#EDA249;]">INTERNAL STRUCTURE</button>
                        <Link to='/venussurface'><button className="w-[350px] h-[48px] bg-none text-white border-2 mt-[20px] border-gray-500 hover:bg-gray-600">SURFACE GEOLOGY</button></Link>
                    </div>
                </div>
                <footer className="flex justify-between items-center w-full p-20">
                    <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">243  DAYS</h1> </div>
                    <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">224.7 DAYS</h1>  </div>
                    <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">6,051.8 KM</h1> </div>
                    <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">471°C</h1></div>
                </footer>

            </div>
        </div>
    )
}

export default VenusInternal

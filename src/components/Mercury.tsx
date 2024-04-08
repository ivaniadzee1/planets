import { Link } from "react-router-dom";


function Mercury() {
    return (
        <div className="flex justify-center flex-col items-center h-full" style={{ background: `url("/assets/Group6.png") #070724`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center mt-[50px]">
                <div className="flex flex-col items-center justify-center mt-[100px] w-[256px] h-[256px]">
                    <img src="/assets/mercury1.svg" alt="Mercury" className="w-[290px] h-[290px] mt-[-240px] ml-[30px]" />
                </div>

                <div className="flex flex-col justify-center items-center ml-[350px] mt-[-250px]">
                    <div className="w-[263px] h-[104px] text-7xl text-white">
                        <h1>MERCURY</h1>
                    </div>
                    <p className="text-white w-[333px] h-[104px] ml-[70px] opacity-40">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
                    <a className="text-white opacity-20 mt-[60px] ml-[-130px]" href="https://en.wikipedia.org/wiki/Mercury_(planet)">Source : Wikipedia</a>
                </div>

                <div className="w-[350px] h-[176px] mt-[300px] ml-[-330px]">
                    <button className="w-[350px] h-[48px] bg-none text-white bg-[#419EBB]">OVERVIEW</button>
                    <Link  to="/mercuryInternal">  <button className="w-[350px] h-[48px] bg-none text-white border-2 mt-[20px] border-gray-500 hover:bg-gray-600">INTERNAL STRUCTURE</button></Link>
                 <Link to="/surface"><button className="w-[350px] h-[48px] bg-none text-white border-2 mt-[20px] border-gray-500 hover:bg-gray-600">SURFACE GEOLOGY</button> </Link> 
                </div>
            </div>

            <footer className="flex justify-between items-center w-full p-20">
    <div className="w-[255px] ml-[100px] h-[128px] bg-none border border-gray-600"> <p className="text-white opacity-50 pl-[10px] pt-[20px]">ROTATION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">58.6 DAYS</h1> </div>
    <div className="w-[255px] h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">REVOLUTION TIME</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">87.97 DAYS</h1>  </div>
    <div className="w-[255px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">RADIUS</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">2,439.7 KM</h1> </div>
    <div className="w-[255px] mr-[100px]  h-[128px] bg-none border border-gray-600"><p className="text-white opacity-50 pl-[10px] pt-[20px]">AVERAGE TEMP.</p> <h1 className="text-4xl text-white pl-[10px] pt-[10px]">430°C</h1></div>
</footer>

        </div>
    );
}

export default Mercury;

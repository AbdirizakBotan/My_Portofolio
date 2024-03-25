import botan from "../assets/botan.jpg"
function Hero(){
return <div>
    <div className="sm:flex  justify-around sm:pt-28 pt-16">
<div className="sm:pl-2 pl-8" >
        <h1 className="text-4xl pb-4 font-semibold">Hi,<span className="text-blue-600"> I'm</span></h1>
        <h1 className="text-3xl pb-4 font-bold">Abdirizak Botan Ibrahim</h1>
        <h1 className="pb-8 text-xl text-blue-600 font-thin">I'm Full stack developer</h1>
        <h1 className=" pb-8">I'm a Full stack developer. Proficient in both<br></br> front-end and back-end development</h1>
    <div className="flex sm:ml-0 ml-[7.2em] gap-4">
   <a href="https://github.com/AbdirizakBotan"> <i class="fa-brands fa-github"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
   <a href="#"> <i class="fa-brands fa-linkedin"></i></a>
    </div>
   <a href="https://drive.google.com/file/d/1KREb58seBdT366MD_tG41n6SXKQh09Kq/view?usp=sharing"> <button className="bg-blue-600 px-10 text-white text-2xl rounded py-1 sm:ml-0 ml-[3.2em] mt-6 mb-4">Resume</button></a>
    </div>
     <div className="border-4 sm:ml-0 ml-4  border-blue-600 rounded-full w-[22em] h-[22em]">
    <img className="rounded-full  w-[22em] h-[22em] md:mr-4  px-2 py-2" src={botan}  />
     </div>
    </div>
</div>
}
export default Hero
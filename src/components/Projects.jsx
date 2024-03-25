import Project1 from "../assets/Project1.png"
import Project2 from  "../assets/Project2.png"
import Project4 from "../assets/Project 4.png"
import Project3 from "../assets/Project3.png"
function Projects(){
return <div id="projects">
    <h1 className="text-5xl text-center sm:mt-12 mt-12 font-semibold text-blue-600">Projects</h1>
 <div className="grid grid-cols-1 lg:grid-cols-3  sm:gap-4 gap-10 mt-10 sm:pl-16 pl-11">
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg shadow-gray-400 w-80  sm:ml-28 md:min-[800px]:ml-10 cursor-pointer ">
                <img className="w-80" src={Project1} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Bararug Developers</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2 font-semibold">HTML  CSS And Js</h3>
                  
                </div>
                <p className="mb-4">This project is just a frontend It's a responsive website, I built it with html css and Js, it's very beautiful and eye-catching</p>
                <div className="flex">

                <a href="https://github.com/AbdirizakBotan/Frontend-Project"><button className="bg-blue-500 text-white px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://abdirizakbotan.github.io/Frontend-Project/"><button className="bg-blue-500 text-white px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button></a>
                </div>
            </div>

            {/* two */}
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg shadow-gray-400 w-80  sm:ml-20 md:min-[800px]:ml-4 cursor-pointer ">
                <img className="w-80" src={Project2} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Tasbih Application</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2 font-semibold ">React js</h3>
                </div>
                <p className=" mb-4">This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State</p>

                <div className="flex">
                <a href="https://github.com/AbdirizakBotan/TasbihApp"><button className="bg-blue-500 text-white px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://tasbih-app-correct.vercel.app/"><button className="bg-blue-500 text-white px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i>Live</button></a>
                </div>

            </div>

            {/* three */}
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg shadow-gray-400 w-80  sm:ml-10 md:min-[800px]:ml-10 cursor-pointer ">
                <img className="w-80" src={Project4} />
                <h3 className="text-xl  text-center pt-5 font-bold mb-2">Full-stack Student Complaint</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2 font-semibold">Mern Stack</h3>
                    
                </div>
                <p className="mb-4">This project is full-stack and has two parts: a public part (website) and a private part (dashboard) which works as a Student Exam Complaint management system.</p>

                <div className="flex">
                    <a href="https://github.com/AbdirizakBotan/Student_frontend"><button className="bg-blue-500 text-white px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://frontend-woad-pi-24.vercel.app/"><button className="bg-blue-500 text-white px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button></a>
                </div>

            </div>

            {/* four */}
            <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg shadow-gray-400 w-80 sm:ml-10 md:min-[800px]:ml-10 cursor-pointer ">
                <img className="w-80" src={Project3} />
                <h3 className="text-xl text-center pt-5 font-bold mb-2">Somali Qoutes</h3>
                <div className="flex gap-10">
                    <h3 className="text-xl mb-2 font-semibold">React Js</h3>
                    
                </div>
                <p className=" mb-4">This project is just a frontend, It's a responsive website but it does a lot of work like I do with React State</p>

                <div className="flex">
                    <a href="https://github.com/AbdirizakBotan/SomaliQouotes"><button className="bg-blue-500 text-white px-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-brands fa-github"></i> Code</button></a>
                    <a href="https://somali-qouotes.vercel.app/"><button className="bg-blue-500 text-white px-8 ml-8 mt-3 py-2 rounded-lg font-semibold"><i class="fa-solid fa-rocket"></i> Live</button></a>
                </div>

            </div>
        </div>
</div>
}
export default Projects
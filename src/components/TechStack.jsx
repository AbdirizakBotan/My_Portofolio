function TechStack() {
    return <div>
        <h1 className="text-4xl text-blue-600 font-bold text-center mt-10 md:mb-5 mb-10">Tech <span className="text-blue-600">Stack</span></h1>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-6 mt-10 lg:pl-40 md:min-[800px]:pl-10 pl-10">
            <div className="w-32 rounded-lg  border-2 border-blue-600  cursor-pointer">
          <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-html5"></i></h1>
            </div>

            <div className="w-32 rounded-lg  border-2 border-blue-600  cursor-pointer">
          <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-css3"></i></h1>
            </div>

            <div className="w-32 rounded-lg border-2 border-blue-600  cursor-pointer">
          <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-js"></i></h1>
            </div>

            <div className="w-32 rounded-lg border-2 border-blue-600  cursor-pointer">
          <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-react"></i></h1>
            </div>
            <div className="w-32 rounded-lg border-2 border-blue-600  cursor-pointer">
          <img className="pt-2 pl-8" src="https://img.icons8.com/color/48/tailwind_css.png" />
            </div>
            <div className="w-32 rounded-lg  border-2 border-blue-600  cursor-pointer">
                <h1 className="text-4xl font-bold"><i class="fa-brands pt-2 pl-10 text-5xl fa-node-js"></i></h1>
            </div>

            <div className="w-32 rounded-lg  border-2 border-blue-600 cursor-pointer">
          <img className="pt-2 pl-8" src="https://img.icons8.com/color/48/mongodb.png" />
            </div>

          
        </div>

    </div>
}

export default TechStack
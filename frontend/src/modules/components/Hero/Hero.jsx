const HeroDoc = () =>{
    return(
       <>
         <section className="bg-gradient-to-r from-[#ffeeee] to-[#ebd8c3] text-white py-20 mt-4 mb-4">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">English Learning Document</h1>
                <p className="text-xl md:text-2xl mb-8">Master the 4 Core English Skills</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#listening" className="bg-white text-yellow-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">Start Learning</a>
                </div>
            </div>
        </section>

       </> 
    )
}
export { HeroDoc };
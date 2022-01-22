import react from 'react'

const Hover =()=>{
    return(
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
            <div className="overflow-hidden lg:block ">
                <img
                className='mt- object-cover sm:h-full md:h-full lg:w-full lg:h-full rounded' 
                src="https://pixabay.com/get/gdf5345bb9eb18ed06f956fef859729a8efee00b03b64a5803dd37d051095a556ff5f2f1e4530971bac91a8e6f0f1530b77b4e1e0e9af420c246d0936f0a06d2dcac8591521d355061a859b895db35b9b_1920.jpg"
                alt=""
                />
            </div>
            
            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-6 text-center col-span-2'>
                <div className="lg:text-left ">    
                    
             {/*       <h1 className="block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl">
                        <span className="block">ING. LUIS HIDALGO</span>
    </h1>*/}
                    <h1 className='block text-2xl tracking-tight font-extrabold md:text-5xl text-indigo-600'>
                        CONSULTOR Y ASESOR ESTRATÉGICO EMPRESARIAL
                    </h1>
                    
                    <div className="sm:text-left mt-5 text-base text-gray-500 ">
                        <p className='text-justify'>
                            Hola soy Luis Samuel Hidalgo y vengo a ofrecerte mis servicios profesionales para que puedas pasar de la estrategia, a la accion ... a los resultados, gestionando con brujula para un crecimiento inteligente, operativo, organizacional y financiero. Ademas de optimizar y equilibrar la distribución de esfuerzos vs capacidad estratégica y operativa de procesos estratégicos de alto desempeño para proyectos de gobierno exitosos.
                        </p>
                    </div>
                    
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                        <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Curriculum
                        </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Hover
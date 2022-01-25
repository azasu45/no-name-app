import react from 'react'

const Hover =()=>{
    return(
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="overflow-hidden lg:block ">
                <img
                className='mt- object-cover sm:h-full md:h-full lg:w-full lg:h-full rounded mt-5' 
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                alt=""
                />
            </div>
            
            <main className='mt-10 mx-auto max-w-2xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-6 text-center col-span-2'>
                <div className="lg:text-left ">    
                    
            {/*    <h1 className="block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl">
                        <span className="block">ING. LUIS HIDALGO</span>
                    </h1>*/}
                    <h1 className='block text-2xl tracking-tight font-extrabold md:text-5xl text-indigo-600'>
                        CONSULTOR Y ASESOR ESTRATÉGICO EMPRESARIAL,  PROYECTOS E INGENERIA
                    </h1>
                    
                    <div className="sm:text-left mt-5 text-base text-gray-500 ">
                        <p className='text-justify'>
                        Hola soy Luis Samuel Hidalgo Ortega y vengo a ofrecerte mis servicios profesionales en los campos de la Consultoria y Asesoría Empresaria así como en Proyectos e Ingeniería para que puedas pasar de la estrategia, a la accion ... a los resultados, gestionando con brujula para un crecimiento inteligente, operativo, organizacional y financiero. Ademas de optimizar y equilibrar la distribución de esfuerzos vs capacidad estratégica y operativa de procesos estratégicos de alto desempeño para proyectos privados y gobiernos exitosos.
                        </p>
                    </div>
                    
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                        <a
                            href="/curriculum"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Sobre Mi
                        </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Hover
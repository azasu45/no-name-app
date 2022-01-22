
const TimeLine =()=>{

    return (
        <div className="container mx-auto mt-10 px-6">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                {/*left*/}
                <div className="flex flex-row-reverse md:contents">
                    <div className="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                        <h3 className="font-semibold text-lg mb-1">first</h3>
                        <p className="leading-tight text-justify">ocupación inteligente de las capacidades y la distribución de tareas en la organización del futuro</p>
                    </div>
                    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full absolute  top-1/2 -mt-3 bg-indigo-500 shadow">
                        </div>
                    </div>
                </div>     
                {/*Right */}
                <div className="flex md:contents">
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                        </div>
                        <div className="w-6 h-6 rounded-full absolute  top-1/2 -mt-3 bg-indigo-500 shadow">
                        </div>
                    </div>
                    <div className="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 ml-auto shadow-md">
                        <h3 className="font-semibold text-lg mb-1">Segundo</h3>
                        <p className="leading-tight text-justify">quebrar paradigmas … incrementando valor a través de activos intangibles que impactan el desempeño</p>
                    </div>
                </div>           
            </div>         
        </div>
    )
}

export default TimeLine
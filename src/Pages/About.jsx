import Navbar from '../Components/Navbar'

const Curriculum = {
    infoAcademica:[
        {
            id:"1",
            institucion:"LICEO “RAFAEL VILLAVICENCIO”",
            titulo:"Bachiller en Ciencias",
            ano:"1984-1989",
            url:"http://4.bp.blogspot.com/-4C2TFbJcjjQ/TeOOudX9r2I/AAAAAAAAABQ/fRQ8lTW9E8I/s760/lbrv.jpg"
        },
        {
            id:"2",
            institucion:"UNIVERSIDAD CENTRO OCCIDENTAL LISANDRO ALVARADO",
            titulo:"Ingeniero Civil",
            ano:"1992-1998",
            url:"https://www.seekpng.com/png/detail/242-2427737_logo-ucla-venezuela-png.png",
        },
        {
            id:"3",
            institucion:"UNIVERSIDAD FERMIN TORO",
            titulo:"Magister Scientiarium en Gerencia Empresarial",
            ano:"2005-2008.",
            url:"https://pbs.twimg.com/profile_images/1266173766897451009/sxPkKzx8_400x400.jpg",
        },
        {
            id:"4",
            institucion:"PROGRAMA LATINOAMERICAO DE EDUCACION A DISTANCIA EN CIENCIAS SOCIALES",
            titulo:"certificado en temas candentes en el tablero geopolitico internacional. Geoeconomía, Metapolítica, Geoestratégica.",
            ano:"Buenos Aires, Argentina. 2020",
            url:"https://www.tni.org/files/pled_0.jpg",
        }
    ]
}

const CardInfoAcademic = (props) => {
    const {institucion,titulo,ano,url}=props
    return(
        <div className="flex mx-5 mt-4 justify-evenly place-items-center rounded bg-gray-900">     
            <img className="w-1/4 h-40 rounded" src={url}/>
            <div className="text-left w-3/4 text-center">                  
                <h3 className="text-lg leading-6 font-medium font-black">{institucion}</h3> 
                <p className="mt-2 text-base font-bold">{titulo}</p>
                <p className="mt-2 text-base">{ano}</p>     
            </div>
        </div>
    )
}

function App() {
  return (
    <>
        <Navbar/>
        <div className="py-12 max-w-7xl mx-auto bg-black rounded-lg">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="text-white">
                    <h1 className="block text-2xl tracking-tight font-extrabold md:text-5xl ">
                        <span>TRIUNFA ANTE </span>
                    </h1>
                    <h1 className="block text-2xl tracking-tight font-extrabold md:text-5xl ">
                        <span>TUS GRADES RETOS</span>
                    </h1>
                    <h1 className="block text-2xl tracking-tight font-extrabold md:text-5xl ">
                        <span>QUEBRANDO PARADIGMAS</span>
                    </h1>
                    <h1 className="block text-2xl tracking-tight font-extrabold md:text-5xl ">
                        <span>POTENCIANDO TUS ACTIVOS</span>
                    </h1>
                    <h1 className="block text-2xl tracking-tight font-extrabold md:text-5xl ">
                        <span>INTANGIBLES</span>
                    </h1>
                </div>
            </div>

            <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:grid-cols-1"> 
                    <div className='text-white'>
                        aqui va otro
                    </div>
                    <div className='text-white'>
                        <h1 className='text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>INFORMACION ACADEMICA</h1>
                        {
                            Curriculum.infoAcademica.map((info)=>(
                                <CardInfoAcademic key={info.id} {...info}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
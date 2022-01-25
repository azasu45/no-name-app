import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import { Transition } from '@headlessui/react'

const Curriculum = {
    experienciaLaboral:[
        {
            id:"1",
            cargo:"ASESOR MAYOR",
            departamento:"Gerencia General.ATIT ",
            empresa:"corpoelec",
            ano:"2018-2021"
        },
        {
            id:"2",
            cargo:"ASESOR MAYOR",
            departamento:"Gerencia General de Planificación Nacional Corpoelec. Secretaria Ejecutiva",
            empresa:"MPPEE-Corpoelec",
            ano:"2015-2017"
        },
        {
            id:"3",
            cargo:"ESPECIALISTA MAYOR",
            departamento:"Coordinación Corporativa Planificación Presupuesto Corpoelec.EQUIPO PÉRDIDAS DE ENERGÍA.",
            empresa:"MPPEE-Corpoelec",
            ano:"2014-2015"
        },
        {
            id:"4",
            cargo:"ASIGNACIÓN ESPECIAL",
            departamento:"Comisionaduría Nacional Procesos de tranmision",
            empresa:"Corpoelec",
            ano:"2013"
        },
        {
            id:"5",
            cargo:"LÍDER(E) PLANIFICACIÓN,",
            departamento:"presupuesto, control de gestion.",
            empresa:"Región Andes",
            ano:"2012"
        },
        {
            id:"6",
            cargo:"GERENTE.",
            departamento:"Estudios especiales edelca. Bajo Caroní",
            empresa:"FUSIÓN CORPOELEC",
            ano:"2010-2012"
        },
        {
            id:"7",
            cargo:"VICE-PRESIDENTE SERVICIOS AL CLIENTE",
            departamento:"Servicios al cliente enelbar",
            empresa:"Fusión CORPOELEC",
            ano:"2006-2010",
            extra:[
                {id:"1",ext:"COORDINADOR(E) COMITÉ CORPORATIVO COMERCIAL, COORDR. DEL COMITÉ OPERATIVO COMERCIAL, Lara-Yaracuy-Carabobo. Fusión CORPOELEC. 2007"},
                {id:"2",ext:"COORDINADOR. COMITÉS OPERATIVOS COMERCIALIZACIÓN, INCREMENTO DE INGRESOS Y REDUCCIÓN PÉRDIDAS ENERGÍA ELÉCTRICA. Región Lara-Carabobo-Yaracuy. Fusión Corpoelec 2007"},
                {id:"3",ext:"CREADOR y COORDINADOR de Equipos de Tareas Focalizados en la Mejora y Homologación de los Procesos Comerciales del Ciclo Comercial (Lectura y Notificación; Facturación; Cobranza; Servicios Técnicos; Alumbrado Público, Estrategias en alianza con SENCAMER, Perdidas Administrativas, Técnicas y No Técnicas). 2007-2010"},
            ]
        },
        {
            id:"8",
            cargo:"VICE-PRESIDENTE DE ASISTENCIA A LA PRESIDENCIA",
            departamento:"Asistencia a la presedencia",
            empresa:"ENELBAR",
            ano:"2003-2006"
        },
    ],
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
    ],
    cursos:[
        {id:"1",titulo:"Introducción del Niño a la Computación.",ano:"1992"},
        {id:"2",titulo:"Congreso “Tercer Encuentro Nacional y Primero Iberoamericano de Estudiantes de Ingeniería”- Universidad Federico Santa María-Valparaíso- Chile",ano:"1992"},
        {id:"3",titulo:"Taller ”Arquitectura y Tecnologías Apropiadas“ “Un Encuentro de Experiencias Comunitarias”",ano:"1992"},
        {id:"4",titulo:"Conferencia Integración Económica de Venezuela “Un Camino al Desarrollo”",ano:"1992"},
        {id:"5",titulo:"II Jornadas Internas de Investigación de la Escuela de Ingeniería Civil",ano:"1992"},
        {id:"6",titulo:"Oficiales de Congreso.",ano:"1993"},
        {id:"7",titulo:"V Congreso Venezolano de Valuación y IV Jornadas Venezolanas de Catastro y Valuación, AVALCA.",ano:"1993"},
        {id:"8",titulo:"II Congreso Iberoamericano de Patología de la Construcción y IV de Control de Calidad-CONPAT.",ano:"1993"},
        {id:"9",titulo:"Primer Congreso de Estudiantes de Ingeniería de la U.C-Valencia Estado Carabobo",ano:"1993"},
        {id:"10",titulo:"Taller “Alternativas de Viviendas en la Cuenca del Río Yacambú” (Sistema Hidráulico Yacambú-Quibor C.A)",ano:"1995"},
        {id:"11",titulo:"1eras Jornadas Ambientales.UCLA",ano:"1996"},
        {id:"12",titulo:"2das.Jornadas de Arquitectura, Ciudad, Urbanismo y Patrimonio. Barquisimeto Estado Lara",ano:"1996"},
        {id:"13",titulo:"Prevención 2000. Barquisimeto Estado Lara",ano:"1997"},
        {id:"14",titulo:"3er.Congreso Mundial Antidrogas",ano:"1997"},
        {id:"15",titulo:"3ra.Jornadas de Arquitectura, Urbanismo, Ambiente y Patrimonio. Barquisimeto Estado Lara",ano:"1997"},
        {id:"16",titulo:"Encuentro Continental La Deuda Externa y El Fin del Milenio. Parlamento Latinoamericano.",ano:"1997"},
        {id:"17",titulo:"I Taller de Inducción “Gestión Habitacional-LPH”. Barquisimeto Estado Lara",ano:"1998"},
        {id:"18",titulo:"Foro “Constitución Bolivariana de Venezuela, Participación Ciudadana y Municipios.2001 Foro “Constitución Bolivariana de Venezuela, Participación Ciudadana y Municipios",ano:"2001"},
        {id:"19",titulo:"Taller de Gerencia Municipal “Descentralización y Participación Ciudadana”.",ano:"2001"},
        {id:"20",titulo:"Formulación y Proyectos M. C. T.",ano:"2002"},
        {id:"21",titulo:"Formulación y Evaluación de Proyectos FIDES.",ano:"2002"},
        {id:"22",titulo:"Gestión para Lograr Resultados a Nivel Gerencial",ano:"2003"},
        {id:"23",titulo:"Ilícitos y Delitos que atentan el Servicio y Suministro de Energía Eléctrica",ano:"2004"},
        {id:"24",titulo:"Taller de Definición de Competencias Estrategicas.",ano:"2004"},
        {id:"25",titulo:"Control de Gestión Pública.",ano:"2004"},
        {id:"26",titulo:"Congreso Internacional Excelencia/Gestión-Balanced Scorecard/Tablero de Comando.",ano:"2004"},
        {id:"27",titulo:"Finanzas para Ejecutivos no Financieros.",ano:"2005"},
        {id:"28",titulo:"Validación de Competencias Técnicas",ano:"2005"},
        {id:"29",titulo:"Identificación de Competencias Técnicas",ano:"2005"},
        {id:"30",titulo:"Resultados del Tes. de Una Organización Inteligente",ano:"2005"},
        {id:"31",titulo:"Taller de Liderazgo Gerencial",ano:"2005"},
        {id:"32",titulo:"Formación de Equipos de Alto Desempeño",ano:"2005"},
        {id:"33",titulo:"Los 8 Principios Fundamentales de un Equipo Ganador",ano:"2005"},
        {id:"34",titulo:"Manejo Asertivo de las Relaciones Interpersonales ",ano:"2005"},
        {id:"35",titulo:"Taller Comunicación y Uso del Lenguaje como Dinamizadores",ano:"2005"},
        {id:"36",titulo:"Validación Competencias Técnicas. Manejo Asertivo de Relaciones Interpersonales",ano:"2005"},
        {id:"37",titulo:"Taller de Liderazgo Gerencial.",ano:"2005"},
        {id:"38",titulo:"Aplicación de Herramientas para Avanzar",ano:"2006"},
        {id:"39",titulo:"Jornada de Responsabilidad Social Empresarial y Sistema de Seguridad Social",ano:"2006"},
        {id:"40",titulo:"Líderes que Mejoran Desempeño de su Gente a través del Comportamiento.",ano:"2007"},
        {id:"41",titulo:"Conferencia Liderazgo Inteligente.",ano:"2008"},
        {id:"42",titulo:"Introducción a la Gerencia por Procesos.",ano:"2008"},
        {id:"43",titulo:"1er. Encuentro de Coaching Empresarial, 7 pasos para generar alto rendimiento.",ano:"2009"},
        {
            id:"44",
            titulo:"METERING Latín América- BILLING/CRM Mega Evento de Medición-Gestión del Cliente para Empresas de Servicio de Electricidad, Gas, y Agua.",
            ano:"2009",
        },
        {
            id:"45",
            titulo:"Temas Candentes en el Tablero Geopolítico. Programa Latinoamericano de Educación a distancia en Ciencia Sociales. Tutores Internacionales Dr. Atilio Boron y Dr. Javier Echaide",
            ano:"2020",
            extra:[
                {id:"1",titulo:"Comercio internacional, en el marco de la pandemia y la depresión que afecta a la economía mundial. ¿Quién Gana y Quien Pierde?"},
                {id:"2",titulo:"Las Transnacionales: Arquitectura de su impunidad."},
                {id:"3",titulo:"Inteligencia Artificial y Robótica en el Capitalismo de la Cibervigilancia."},
                {id:"4",titulo:"Las armas como negocio y como amenaza: Una ojeada a la situación mundial."},
                {id:"5",titulo:"China y la Ruta de la Seda. Banco Asiatico. BRICS."},
                {id:"6",titulo:"La ONU ante la Nueva Agenda Internacional. Entre la impotencia y la nrefundación."},
                {id:"7",titulo:"La Catástrofe Climática y sus Principales Aspectos."},
                {id:"8",titulo:"Las Guerras de 5ta Generación como Nueva Estrategia de Dominación Imperial."},
            ]
        },
        {id:"46" ,titulo:"EVENTO. “ENCUENTRO ESPACIAL CON LA ABAE”. Agencia Bolivariana para Actividades Espaciales",ano:"2021"}
    ],
    reconocimientos:[
        {id:""},
    ]
}
const CardInfoAcademic = (props) => {
    const {institucion,titulo,ano,url}=props
    return(
        <figure className="flex items-center mt-5 rounded-full mx-10">     
            <img className="w-28 h-28 rounded-full mx-auto" src={url} alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-left w-3/4 text-center space-y-4 mx-auto">                  
                <blockquote>
                    <h3 className="text-lg leading-6 font-medium">{institucion}</h3> 
                </blockquote>
                <figcaption class="font-medium">
                    <p className="mt-2 text-sm">{titulo}</p>
                    <p className="mt-2 text-base">{ano}</p> 
                </figcaption>
            </div>
        </figure>
    )
}
const CardInfoExperenci =(props)=>{
    const {id,ano,cargo,departamento,show}=props
    return(
        <Transition
            show={show}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
        <div className="
            relative
            mx-auto
            mt-5
            h-60
            w-60
            flex
            flex-col
            bg-white
            rounded-xl"
            >
            <div className="text-center">
                <div className="flex-1">        
                    <div className="block mt-2 space-y-6">
                        <h3 class="
                        text-2xl
                        font-semibold
                        leading-none
                        tracking-tighter
                        text-neutral-600
                    ">{cargo}</h3>
                    <p className="text-lg font-normal text-gray-500">{departamento}</p>
                    </div>
                    <div className="pt-6 space-x-1 text-sm text-gray-500 text-center">
                        <p>{ano}</p>
                    </div>
                </div>
            </div>
        </div>
        </Transition>
    )
}
function App() {
    const [isShow,setIsShow]=useState(false)

    return (
    <>
        <Navbar/>
        <div className="py-12 max-w-7xl mx-auto bg-black rounded-lg mt-24">
            <div className="lg:flex px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-white mx-auto mt-10 h-1/2">
                    <h1 className="block text-5xl tracking-tight font-extrabold md:text-5xl ">
                        <span>TRIUNFA ANTE </span>
                    </h1>
                    <h1 className="block text-5xl tracking-tight font-extrabold md:text-5xl ">
                        <span>TUS GRADES RETOS</span>
                    </h1>
                    <h1 className="block text-5xl tracking-tight font-extrabold md:text-5xl ">
                        <span>QUEBRANDO PARADIGMAS</span>
                    </h1>
                    <h1 className="block text-5xl tracking-tight font-extrabold md:text-5xl ">
                        <span>POTENCIANDO TUS ACTIVOS</span>
                    </h1>
                    <h1 className="block text-5xl tracking-tight font-extrabold md:text-5xl ">
                        <span>INTANGIBLES</span>
                    </h1>
                </div>
                <img className='rounded-full shadow-lg mx-auto h-1/2 mt-5' src="https://image.freepik.com/vector-gratis/diseno-plano-infografia-empresarial-foto_52683-19904.jpg" height="352" width="352" ></img>
            </div>
            <div className="py-10 mt-24">
                <div className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:grid-cols-1"> 
                    <div className='text-white'>
                        aqui va otro
                    </div>
                    <div className='text-white rounded-xl mx-4'>
                        <h1 className='text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>INFORMACION ACADEMICA</h1>
                        {
                            Curriculum.infoAcademica.map((info)=>(
                                <CardInfoAcademic key={info.id} {...info}/>
                            ))
                        }
                    </div>
                </div>
            </div>

            <section>
                <div className="px-4 py-12 mx-auto">  
                    <div className="max-w-4xl pt-24 mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 items-center flex" aria-hidden="true">
                                <div className="w-full border-t border-indigo-500"></div>
                            </div>
                            <div className="relative flex justify-start">
                                <span className="pr-3 text-lg font-medium text-indigo-600 bg-black">Experiencia Laboral</span>
                            </div>
                        </div> 
                    </div>
                    <button className="text-white border h-10 w-32 rounded bg-slate-900 hover:bg-slate-500" onClick={()=>setIsShow((isShow)=>!isShow)}>ver</button>
                    <div className="
                        relative
                        items-center
                        w-full
                        px-3
                        py-12
                        mx-auto
                        "
                        >
                        <div className="relative mx-auto max-w-7xl">
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:gris-cols-2">
                            {
                                Curriculum.experienciaLaboral.map((expe)=>(
                                    <CardInfoExperenci key={expe.id}{...expe} show={isShow}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="max-w-4xl pt-2 mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 items-center flex" aria-hidden="true">
                            <div className="w-full border-t border-indigo-500"></div>
                        </div>
                        <div className="relative flex justify-start">
                            <span className="pr-3 text-lg font-medium text-indigo-600 bg-black">Talleres y Cursos</span>
                        </div>
                    </div> 
                </div>
                <div className="text-white">
                <div className="
                    relative
                    items-center
                    w-full
                    px-5
                    py-12
                    mx-auto
                    md:px-12
                    lg:px-24
                    max-w-7xl
                    ">
                    {
                        Curriculum.cursos.map((cursos)=>(
                            <>
                                {cursos.id}
                            </>
                        ))
                    }
                    </div>
                </div>
            </section>
        </div>
    </>
  );
}

export default App;
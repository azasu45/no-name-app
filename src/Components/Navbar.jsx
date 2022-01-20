import react,{Fragment, useState} from 'react'
import Logo from '../Icons/Logo'
import { Popover,Transition } from '@headlessui/react'
import {
    MenuIcon,
    UsersIcon,
    ChevronDownIcon,
} from '@heroicons/react/outline'

const sections=[
    {title:'home',url:'#'}
]

const productos=[
    {
        name:"Asesorias",
        description:"N/A",
        href:"#",
        icon:UsersIcon,
    }
]

function classNames(...classes){
    return classes.filter(Boolean).join('')
}

const Navbar=()=>{
    return (
        <Popover className="relative bg-red ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    {/*Icon Principal with  */}
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a className="text-5xl font-Explora" href="#">
                            <span className="sr-only">Workflow</span>
                            <Logo
                                className="h-8 w-auto sm:h-10 inline mx-2"
                                fill="red"
                                alt=""
                            />
                            Ing.Samuel Hidalgo
                        </a>
                    </div>
                    {/*Icon Menu*/}
                   
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open Menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Popover className="relative">
                            {({open})=>(
                                <>
                                    <Popover.Button 
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-400',
                                            "group bg-white rounded-md items-center inline-flex text-base font-medium hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            )}
                                    >
                                        
                                        <span>Ofertas</span>
                                        
                                        <ChevronDownIcon 
                                            className={classNames(
                                                open ? 'text-gray-600':'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                                )
                            }
                        </Popover>
                        
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Info
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Blog
                        </a>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                            </a>
                            <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                            Sign up
                            </a>
                        </div>
                    </Popover.Group>
                </div>
            </div>
        </Popover>
    )   
}
export default Navbar
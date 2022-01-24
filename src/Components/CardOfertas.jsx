
const CardOfertas =()=>{
    return(
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 bg-red-200">
        <h1 className="block-line">Servicios Profesionales</h1>
        <div class="flex font-sans col-span-1 bg-red-500">
            <div class="flex-none w-48 relative">
                <img src="https://image.freepik.com/vector-gratis/plantilla-cartel-vertical-ano-nuevo-chino-estilo-papel_23-2149248896.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                <h1 class="flex-auto text-lg font-semibold text-slate-900">
                </h1>
                <div class="text-lg font-semibold text-slate-500">
                    $110.00
                </div>
                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    In stock
                </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div class="space-x-2 flex text-sm">
                    <label>
                    <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                        XS
                    </div>
                    </label>
                </div>
                </div>
                <div class="flex space-x-4 mb-6 text-sm font-medium">
                <div class="flex-auto flex space-x-4">

                </div>
                </div>
                <p class="text-sm text-slate-700">
                Free shipping on all continental US orders.
                </p>
            </form>
            </div>
        </div>
    )
}

export default CardOfertas
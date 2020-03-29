import React from 'react';

function Links({data}){
    return(
        <div id="links" className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto py-12  lg:py-16">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
                    Enlaces de Interés
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Workcation"/>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage"/>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple"/>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo.svg" alt="Laravel"/>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit"/>
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                        <img className="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo.svg" alt="Statamic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;

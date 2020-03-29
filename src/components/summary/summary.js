import React from 'react';

function Summary({data}){
    return(
        <div className="bg-gray-50 pt-12 sm:pt-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl leading-9 font-extrabold text-blue-400 sm:text-4xl sm:leading-10 mb-0">
                        Estado actual del virus
                    </h2>
                    <p className="text-lg leading-7 text-gray-500">
                        Actualizado: { data.meta.lastUpdated }
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-12 bg-white sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-gray-50">

                    </div>
                    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                                <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                    <p className="text-5xl leading-none font-extrabold text-orange-500">
                                        719
                                    </p>
                                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                                        Casos Confirmados
                                    </p>
                                </div>
                                <div
                                    className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <p className="text-5xl leading-none font-extrabold text-green-600">
                                        3
                                    </p>
                                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                                        Recuperados
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                    <p className="text-5xl leading-none font-extrabold text-red-600">
                                        28
                                    </p>
                                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                                        Fallecidos
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                    <p className="text-5xl leading-none text-gray-600">
                                        1.24
                                    </p>
                                    <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                                        Factor de Infección
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;

import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


function Stats({data}){
    return(
        <div id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 mb-8">
                <h2 className="text-3xl leading-6 font-medium text-gray-900">
                    Estadísticas
                </h2>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                    Actualizado: {data.meta.lastUpdated }
                </p>
            </div>
            <div className="bar-chart mb-8" style={{ width: '100%', height:500 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={data.stats.dailyChange}
                        margin={{
                            top: 5, right: 0, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="fecha" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Casos" fill="#ff5a1f" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4 pb-12 bg-gray-50 mr-2" style={{ height:400 }}>
                    <h3 className="text-lg uppercase text-gray-700 mb-4">Provincias con más casos</h3>
                    <ResponsiveContainer>
                        <BarChart
                            data={data.stats.casesPerProvince}
                            margin={{
                                top: 5, right: 0, left: 0, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="Provincia" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Confirmados 27/3" fill="#8884d8" />
                            <Bar dataKey="Confirmados 26/3" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full md:w-1/2 p-4 pb-12 bg-gray-50 ml-2" style={{ height:400 }}>
                    <h3 className="text-lg uppercase text-gray-700 mb-4">Casos nuevos por día</h3>
                    <ResponsiveContainer>
                        <BarChart
                            data={data.stats.casesPerDay}
                            margin={{
                                top: 5, right: 0, left: 0, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="fecha" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Casos" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Stats;

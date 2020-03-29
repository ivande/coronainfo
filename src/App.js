import React,  { useState } from 'react';
import info from './assets/data.json';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Summary from './components/summary/summary';
import Stats from "./components/stats/stats"
import Measures from "./components/measures/measures"
import Links from "./components/links/links"
import {Helmet} from "react-helmet";

function App() {
  const [data, setData] = useState(info.data);

  return (
    <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{data.meta.title} </title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header data={data} />
        <Summary data={data} />
        <div className="bg-green-400 text-white my-12 ">
            <div className="max-w-7xl text-lg mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
                Si información sobre el <strong>Coronavirus</strong>, el gobierno ha habilitado el número <strong>*462</strong> <br/> para informaciones de salud y medidas del estado de emergencia.<br />
                Libre de cargos y disponible 24 horas
            </div>
        </div>
        <Stats data={data} />
        <Measures data={data} />
        <Links data={data} />
        <Footer data={data} />
    </div>
  );
}

export default App;

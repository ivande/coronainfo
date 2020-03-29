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
        <Stats data={data} />
        <Measures data={data} />
        <Links data={data} />
        <Footer data={data} />
    </div>
  );
}

export default App;

import React from 'react';

function Footer({data}){
    return(
        <div id="contacto" className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    {
                        data.navigation.map((menuItem) =>
                            <div key={menuItem.href} className="px-5 py-2">
                                <a href={menuItem.href} className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    {menuItem.label}
                                </a>
                            </div>
                        )
                    }
                </nav>

                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-400">
                        Una iniciativa de <a className="text-blue-400" href="mailto:ivan@olivero.dev">Iván Olivero</a>, utilizando data del Ministerio de Salud Pública de la R.D.,
                        Johns Hopkins Coronavirus Resource Center y el Sistema Nacional de Vigilancia Epidemiológica recopilada diariamente por <a className="text-blue-400" href="mailto:juancsaladin@gmail.com"> Ing. Juan C. Saladín Bonilla </a>. <br />

                        { data.footer.copyright }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;

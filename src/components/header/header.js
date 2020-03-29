import React from 'react';


function Header({ data }) {
    console.log(data);

    return (
        <header>
            <nav className="bg-blue-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center w-full">
                            <div className="flex-shrink-0">
                                <h1 className="text-base text-white font-bold">CoronaInfo</h1>
                            </div>
                            <div className="ml-auto hidden sm:block">
                                <div className="flex">
                                    {
                                        data.navigation.map((menuItem) =>
                                            <a key={menuItem.href} href={menuItem.href}
                                               className="mr-2 px-3 py-2 rounded-md text-base font-medium leading-tight text-white focus:outline-none focus:text-white focus:bg-gray-700  hover:bg-gray-700 transition duration-150 ease-in-out">{menuItem.label}</a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex sm:hidden">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                    <path className="hidden" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

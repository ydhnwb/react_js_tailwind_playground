import React from 'react'

export const BottomNavbar = () => {
    return (
        <div className="fixed bottom-0 w-full">
            <nav style="border:1px solid blue" className="md:hidden bottom-0 w-full bg-gray-700 text-xs">
                <ul className="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
                    <li className="p-4 hover:bg-gray-500">
                        <a href="/link">
                            <span>Link 1</span>
                            <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li className="p-4 hover:bg-gray-500">
                        <a href="/link">
                            <span>Link 2</span>
                            <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li className="p-4 hover:bg-gray-500">
                        <a href="/link">
                            <span>Link 3</span>
                            <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li className="p-4 hover:bg-gray-500">
                        <a href="/link">
                            <span>Link 4</span>
                            <svg className="h-6 w-6 fill-current mx-auto" viewBox="0 0 20 20">
                                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
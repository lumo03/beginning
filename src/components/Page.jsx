import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from './../redux/page';

const Page = (props) => {

    const dispatch = useDispatch();
    dispatch(setPage(props.type));

    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">{props.title}</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="grid place-items-center h-auto w-auto">
                            {props.children}
                        </div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </>
    )
}

export default Page;
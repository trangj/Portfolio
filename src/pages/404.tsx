import Head from 'next/head';
import React from 'react';

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Joshua Trang: page not found</title>
            </Head>
            <div className="fixed inset-y-1/2">
                page not found 😞
            </div>
        </>
    );
};

export default NotFound;

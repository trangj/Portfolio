import Head from 'next/head';
import React from 'react';

const experience = () => {
    return (
        <>
            <Head>
                <title>Joshua Trang: Experience</title>
                <meta title="description" content="My work experience" />
            </Head>
            <div className="flex flex-col divide-y gap-4 mt-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">
                        Bank of Canada
                    </h2>
                    <h6 className="font-semibold text-gray-500">Software Developer | Jan 2021 – Aug 2021 | Ottawa, Ontario, Canada</h6>
                    <ul className="list-disc list-inside">
                        <li>
                            Developed Bank of Canada’s website portfolio and design system using WordPress, LAMP stack, JavaScript, and CSS.
                        </li>
                        <li>
                            Worked on front-end data visualization of data using jQuery and CSS.
                        </li>
                        <li>
                            Conducted unit/feature testing using Behat and PHPUnit.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">
                        Windsor Essex Rotaract Club
                    </h2>
                    <h6 className="font-semibold text-gray-500">Software Developer | Sep 2020 – Dec 2020 | Windsor, Ontario, Canada</h6>
                    <ul className="list-disc list-inside">
                        <li>
                            Developed and maintained the organization’s official online portfolio in HTML, CSS and JS.
                        </li>
                        <li>
                            Website displays organization’s upcoming projects and meetings, along with information and contact pages.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default experience;

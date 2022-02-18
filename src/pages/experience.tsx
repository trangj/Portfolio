import Head from 'next/head';
import React from 'react';

const experience = () => {
    return (
        <>
            <Head>
                <title>Joshua Trang: Experience</title>
                <meta title="description" content="My work experience" />
            </Head>
            <div className="flex flex-col divide-y gap-8 mt-4">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold mt-2">
                        Vidyard
                    </h3>
                    <h6 className="font-semibold text-gray-500">Software Developer | May 2022 – Aug 2022 | Waterloo, Ontario, Canada</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold mt-2">
                        Rockport Networks
                    </h3>
                    <h6 className="font-semibold text-gray-500">Software Developer | Sep 2021 – Dec 2021 | Ottawa, Ontario, Canada</h6>
                    <ul className="list-disc list-inside">
                        <li>
                            Developed Rockport&apos;s SPA and design system using React/Reagent.
                        </li>
                        <li>
                            Implemented new components / revised existing components in the design system.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold mt-2">
                        Bank of Canada
                    </h3>
                    <h6 className="font-semibold text-gray-500">Software Developer | Jan 2021 – Sep 2021 | Ottawa, Ontario, Canada</h6>
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
                    <h3 className="font-bold mt-2">
                        Windsor Essex Rotaract Club
                    </h3>
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

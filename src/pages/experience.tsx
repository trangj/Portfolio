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
                    <ul className="list-disc list-inside">
                        <li>
                            Implemented and collaborated in UI/UX design of Vidyard Rooms in Vue and Ruby on Rails.
                        </li>
                        <li>
                            Expanded Vidyard’s React Chrome extension to interface with Gmail and Vidyard’s GraphQL API.
                        </li>
                        <li>
                            Improved Vidyard’s authentication micro-service for seamless authentication flow between different services in Ruby on Rails and Node.js.
                        </li>
                        <li>
                            Maintained and expanded Vidyard’s custom React video player for cross-browser compatibility.
                        </li>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold mt-2">
                        Rockport Networks
                    </h3>
                    <h6 className="font-semibold text-gray-500">Software Developer | Sep 2021 – Dec 2021 | Ottawa, Ontario, Canada</h6>
                    <ul className="list-disc list-inside">
                        <li>
                            Revised existing and implemented new components to Rockport’s design system for use for other developers in JavaScript, CSS, and HTML.
                        </li>
                        <li>
                            Developed Rockport’s single-page application using React and Reagent.
                        </li>
                        <li>
                            Implemented views incorporating front-end data visualization of network traffic using data from Rockport’s API.
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
                            Developed Bank of Canada’s website using WordPress, LAMP stack, and JavaScript.
                        </li>
                        <li>
                            Expanded front-end data visualization of Bank of Canada’s API using jQuery, CSS, and Rechart.
                        </li>
                        <li>
                            Improved Bank of Canada’s design system and component library to be WCAG 2.0 compliant.
                        </li>
                        <li>
                            Performed and maintained unit/feature testing using Behat and PHPUnit.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default experience;

import Head from 'next/head';
import React from 'react';

const projects = () => {
    return (
        <>
            <Head>
                <title>Joshua Trang: Projects</title>
                <meta title="description" content="My projects" />
            </Head>
            <div className="flex flex-col gap-6 mt-4">
                <a href="https://github.com/trangj/Crappit" target="_blank" rel="noreferrer" className="p-8 rounded-3xl from-blue-400 to-green-500 bg-gradient-to-b ">
                    <div className="flex flex-col">
                        <h3 className="font-bold">
                            Crappit
                        </h3>
                        <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                            <li>
                                A Reddit-like clone developed with Node.js and PostgresSQL as the back-end and React.js as the front-end.
                            </li>
                            <li>
                                Visitors register, login and view topics and posts within them.  In posts, threaded comments can be viewed.
                            </li>
                            <li>
                                Authenticated users cancreate, read, update, deletetopics, posts, and comments.
                            </li>
                        </ul>
                    </div>
                </a>
                <a href="https://github.com/trangj/CrappitMobile" target="_blank" rel="noreferrer" className="p-8 rounded-3xl from-blue-500 to-red-600 bg-gradient-to-b">
                    <div className="flex flex-col">
                        <h3 className="font-bold break-all">
                            CrappitMobile
                        </h3>
                        <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                            <li>
                                A mobile version of Crappit built with React Native.
                            </li>
                            <li>
                                Functional on iOS and Android.
                            </li>
                        </ul>
                    </div>
                </a>
                <div className="flex sm:flex-row flex-col gap-6">
                    <a href="https://github.com/trangj/Robbot" target="_blank" rel="noreferrer" className="p-8 rounded-3xl from-gray-800 to-blue-900 bg-gradient-to-b">
                        <div className="flex flex-col">
                            <h3 className="font-bold">
                                Robbot
                            </h3>
                            <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                                <li>
                                    Discord bot developed using Node.js and the Discord.js framework. The bot is hosted on Heroku and is actively used, with about 200 commands being used a month.
                                </li>
                                <li>
                                    The bot is able to read commands and post pictures from an image repository or parse YouTube links to play YouTube audio using audio trans-coding via FFmpeg.
                                </li>
                            </ul>
                        </div>
                    </a>
                    <a href="https://github.com/trangj/GrandExchangeGist" target="_blank" rel="noreferrer" className="p-8 rounded-3xl from-gray-600 to-gray-900 bg-gradient-to-b">
                        <div className="flex flex-col">
                            <h3 className="font-bold break-all">
                                GrandExchangeGist
                            </h3>
                            <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                                <li>
                                    Developed using Runescape’s OSRS Grand Exchange API and Node.js to retrieve in-game item data, suchas price history and trends, and display it using React.
                                </li>
                                <li>
                                    Uses the React-Vis library that allows for real-time graphing and interactive tracing of item prices over a selected time period.
                                </li>
                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default projects;

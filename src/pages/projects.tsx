import Head from 'next/head';
import React from 'react';
import Card from 'src/components/Card';

const projects = () => {
    return (
        <>
            <Head>
                <title>Joshua Trang: Projects</title>
                <meta title="description" content="My projects" />
            </Head>
            <div className="flex flex-col gap-6 mt-4">
                <a href="https://github.com/trangj/Crappit" target="_blank" rel="noreferrer">
                    <Card className='from-blue-400 to-green-500 bg-gradient-to-b'>
                        <div className="flex flex-col">
                            <h3 className="font-bold">
                                Crappit
                            </h3>
                            <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                                <li>Developed a Reddit-like clone with Node.js and PostgreSQL as the back-end and React as the front-end.</li>
                                <li>Implemented user authentication and incorporated database design of Reddit - including threaded comments, moderation, and notifications. Images and videos are stored using AWS S3 and Imgix is used as a CDN.</li>
                                <li>Developed using Next.js framework for SEO and server side rendering. Front-end is hosted on Vercel and the back-end is hosted on Heroku.</li>
                            </ul>
                        </div>
                    </Card>
                </a>
                <a href="https://github.com/trangj/CrappitMobile" target="_blank" rel="noreferrer">
                    <Card className='from-blue-500 to-red-600 bg-gradient-to-b'>
                        <div className="flex flex-col">
                            <h3 className="font-bold break-all">
                                CrappitMobile
                            </h3>
                            <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                                <li>
                                    Expanded with an additional mobile app version of Crappit using React Native that allows users to interfacewith the Crappit API in iOS or Android.
                                </li>
                            </ul>
                        </div>
                    </Card>
                </a>
                <div className='flex md:flex-row flex-col gap-6'>
                    <a href="https://github.com/trangj/Robbot" target="_blank" rel="noreferrer" className='flex'>
                        <Card className='from-gray-800 to-blue-900 bg-gradient-to-b'>
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
                        </Card>
                    </a>
                    <a href="https://github.com/trangj/GrandExchangeGist" target="_blank" rel="noreferrer">
                        <Card className='from-gray-600 to-gray-900 bg-gradient-to-b'>
                            <div className="flex flex-col">
                                <h3 className="font-bold break-all">
                                    Location Based Reminder App
                                </h3>
                                <ul className="font-semibold pt-4 list-disc list-inside text-lg">
                                    <li>Developed a mobile app in React Native that uses geolocation and geofencing to send notifications to the user when they arrive at markers and reminds them of tasks/items.</li>
                                    <li>Integrated Google’s Maps API to allow users to quickly search up to find places of importance.</li>
                                    <li>Developed a back-end service using Supabase and database implementation is done in PostgreSQL.</li>
                                </ul>
                            </div>
                        </Card>
                    </a>
                </div>
            </div>
        </>
    );
};

export default projects;

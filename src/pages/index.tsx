import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua Trang</title>
      </Head>
      <div className="flex justify-center items-center fixed inset-y-1/2">
        <div>
          <h2 className="font-semibold">
            Hi👋, my name is Josh!
          </h2>
          <h5>
            I&apos;m a software developer at the Bank of Canada and a student at the University of Windsor
          </h5>
          <div className="flex flex-row gap-4 mt-4 text-gray-500">
            <a href="https://www.linkedin.com/in/joshuatrang/" target="_blank" rel="noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/trangj" target="_blank" rel="noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://uwin365-my.sharepoint.com/:b:/g/personal/trangj_uwindsor_ca/Effm_o5FNfZItw6AeIvMrm4BtoePk7zzDHYofvQIqpZreg?e=sm3IjZ" target="_blank" rel="noreferrer" className="hover:underline">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from 'path';
import React from "react";
import Head from "next/head";

const blog = ({ posts }: any) => (
    <>
        <Head>
            <title>Joshua Trang: Blog</title>
            <meta title="description" content="My thoughts on web development" />
        </Head>
        <div className="mt-4 flex flex-col divide-y gap-4">
            {posts.map((post: any) => {
                return (
                    <div key={post.slug}>
                        <Link href={"/blog/" + post.slug}>
                            <a>
                                <h3 className="font-bold">{post.title}</h3>
                                <h6 className="text-gray-500 font-semibold">{post.date}</h6>
                                <p className="mt-1">{post.description}</p>
                            </a>
                        </Link>
                    </div>
                );
            })}
        </div>
    </>
);

export const getStaticProps = async () => {
    const files = fs.readdirSync("src/posts");
    const posts = files.map(fileName => {
        const markdownWithMetadata = fs
            .readFileSync(path.join("src/posts", fileName))
            .toString();
        const parsedMarkdown = matter(markdownWithMetadata);
        return { ...parsedMarkdown.data, slug: fileName.replace('.md', '') };
    });
    return {
        props: { posts }
    };
};

export default blog;
import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const Post = ({ htmlString, data }: any) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description} />
            </Head>
            <div className="mb-12" dangerouslySetInnerHTML={{ __html: htmlString }} />
        </>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("src/posts");
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }));
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("src/posts", slug + ".md"))
        .toString();
    const parsedMarkdown = matter(markdownWithMetadata);
    const htmlString = marked(parsedMarkdown.content);
    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        }
    };
};

export default Post;
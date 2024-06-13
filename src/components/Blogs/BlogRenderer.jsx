"use client";
import React from "react";

import Blocks from "editorjs-blocks-react-renderer";
import HTMLReactParser from "html-react-parser";

const Header = ({ data, className = "" }) => {
    const HeadingTag = `h${data.level || 3}`;
    return (
        <HeadingTag className={className} style={{ margin: "0px opx 15px" }}>
            {HTMLReactParser(data.text)}
        </HeadingTag>
    );
};

const ParaGraph = ({ data }) => {
    return <p>{HTMLReactParser(data.text)}</p>;
};

const ImageRendere = ({
    data,
    className = "object-contain text-center",
    // className = "rounded-md w-full h-80 object-contain text-center",
}) => {
    // console.log("data", data.caption);
    // console.log("data.file.url", data.file.url);
    return <img className={className} src={data.file.url} alt={data.caption} />;
};

const Quotes = ({ data, className = "" }) => {
    // console.log("Quotes", data);
    return (
        <p
            style={{
                padding: "1rem",
                backgroundColor: "rgb(248 250 252 )",
                borderLeft: "4px solid black",
            }}
        >
            <i className={className}>"{HTMLReactParser(data.text)}"</i> -{data.caption}
        </p>
    );
};

const List = ({ data, className = "" }) => {
    // console.log("data", data?.items);
    // console.log("data", data?.style);
    return (
        <ol className={className}>
            {data.items.map((item, index) => (
                <li className="" key={index}>
                    {item}
                </li>
            ))}
        </ol>
    );
};

const EmbadeRenderer = ({ data, className = "" }) => {
    // console.log("data", data);
    return (
        <div className="d-flex justify-content-center">
            <figure className="rounded-4">
                <iframe
                    className="rounded-4"
                    src={data.embed}
                    height={data.height}
                    width={data.width}
                />
            </figure>
        </div>
    );
};
const BlogRenderer = ({ item }) => {
    if (!item?.content) return null;
    // console.log("blocks", item?.content);
    return (
        <div className="blog-detail-review-b">
            <Blocks
                renderers={{
                    header: Header,
                    list: List,
                    paragraph: ParaGraph,
                    image: ImageRendere,
                    quote: Quotes,
                    embed: EmbadeRenderer,
                }}
                data={item?.content}
            />
        </div>
    );
};

export default BlogRenderer;

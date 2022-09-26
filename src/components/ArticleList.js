import React from "react";
import Article from "./Article";

function ArticleList({blogPosts}) {

    const articleItem = blogPosts.map(post => <Article key = {post.id} title = {post.title} date = {post.date} preview = {post.preview} minutes = {post.minutes}/>)

    return (
        <main>
            {articleItem}
        </main>
    )
}

export default ArticleList
import { Link } from "react-router-dom"

export type Blog = {
    id: number;
    title: string;
    body: string;
    author: string;
}

type BlogProps = {
    blog: Blog;
}

export function BlogComponent(
    { blog }: BlogProps
) {
    return (
        <div key={ blog.id } className="blog-preview">
            <Link to={ `/blog/${blog.id}` }>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
            </Link>
        </div>
    );
}
import { useHistory, useParams } from "react-router";
import { Blog } from "./Blog";
import { useFetch } from "./useFetch";

type BlogParams = {
    id: string;
}

type BlogFetch = {
    data: Blog;
    isLoading: boolean;
    error: string;
}

export function BlogDetail() {

    const { id } = useParams<BlogParams>();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`) as BlogFetch;

    const history = useHistory();

    function handleDelete() {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }

            {
                blog &&
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleDelete }>delete</button>
                </article>
            }

            { error && <div>{ error }</div> }
        </div>
    );
}
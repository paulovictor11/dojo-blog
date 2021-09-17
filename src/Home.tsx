import { Blog, BlogComponent } from "./Blog";
import { useFetch } from "./useFetch";

type BlogFetch = {
    data: Blog[];
    isLoading: boolean;
    error: string;
}

export function Home() {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs') as BlogFetch;

    return (
        <div className="home">
            <div className="blog-list">
                <h2>All Blogs!</h2>

                { isLoading && <div>Loading...</div> }

                {
                    blogs &&
                    blogs.map((blog: Blog) => {
                        return (
                            <BlogComponent blog={ blog } />
                        );
                    })
                }

                { error && <div>{ error }</div> }
            </div>
        </div>
    );
}
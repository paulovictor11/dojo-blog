import { FormEvent, useState } from "react"
import { useHistory } from "react-router";

export function Create() {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('mario');

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const history = useHistory();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const blog = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="blogTitle">Blog title:</label>
                <input
                    id="blogTitle"
                    name="blogTitle"
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label htmlFor="blogBody">Blog body:</label>
                <textarea
                    id="blogBody"
                    name="blogBody"
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label htmlFor="blogAuthor">Blog author:</label>
                <select
                    id="blogAuthor"
                    name="blogAuthor"
                    required
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {
                    !isLoading
                    ? <button type="submit">Add Blog</button>
                    : <button type="submit" disabled>Adding Blog...</button>
                }
            </form>
        </div>
    )
}
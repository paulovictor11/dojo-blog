import { useEffect, useState } from "react";

export function useFetch(url: string) {
    const [ data, setData ] = useState<any>(null);
    const [ isLoading, setIsLoading ] = useState<Boolean>(true);
    const [ error, setError ] = useState<String>('');

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Could not fetch the data for that resource');
                    }

                    return response.json();
                })
                .then((data: any) => {
                    setData(data);
                    setIsLoading(false);
                    setError('');
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        return;
                    }
                    
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 1000);

        return () => abortCont.abort();
    }, [ url ]);

    return {
        data, isLoading, error
    }
}
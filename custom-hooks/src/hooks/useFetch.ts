import { useEffect, useState } from "react"

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [err, setErr] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getdata = async (url: string, signal: AbortSignal) => {
        setLoading(true);
        setErr(null);
        try {
            const res = await fetch(url, { signal });

            if (!res.ok) {
                throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
            }
            const fetchedData = await res.json();
            setData(fetchedData);
        } catch(error: any) {
            // Don't set error state if the request was aborted
            if (error instanceof DOMException && error.name === "AbortError") {
                return;
            }
            setErr(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getdata(url, signal);

        // Set up auto-refresh every 10 seconds
        const interval = setInterval(() => {
            if (!signal.aborted) {
                getdata(url, signal);
            }
        }, 10000);
        
        return () => {
            // Cleanup: abort the request and clear interval
            controller.abort();
            clearInterval(interval);
        };
    }, [url]);

    return { data, loading, err }
}
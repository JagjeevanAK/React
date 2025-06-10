import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedVal, setDebouncedVal] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedVal(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedVal;
}
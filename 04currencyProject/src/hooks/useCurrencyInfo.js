import { useEffect, useState } from "react";

export function useCurrencyInfo(baseCurrency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        // Correctly format the API URL with the provided baseCurrency
        fetch(`https://v6.exchangerate-api.com/v6/d65a13d5b254d9a6bc19c09c/latest/usd`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                setData(res.conversion_rates || {});
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [baseCurrency]);

    return { data, loading, error };
}

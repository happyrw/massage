// loading-provider.ts
"use client";

import { useState, useEffect } from "react";

const useLoadingProvider = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return loading;
};

export default useLoadingProvider;

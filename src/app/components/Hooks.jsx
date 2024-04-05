import { useState, useEffect } from 'react';
export const usePreloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        document.body.classList.add("overflow-hidden")
        setTimeout(() => {
            setIsLoading(false);
            document.body.classList.remove("overflow-hidden")
        }, 3500);
    }, []);
    return isLoading;
}

export const useOverflowHidden = () => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return [isOpen, setOpen];
}
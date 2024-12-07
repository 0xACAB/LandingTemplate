'use client';
import React, { useCallback } from 'react';

const ScrollLink = (props) => {
    //const myRef = useRef<Element>(null);
    // run this function from an event handler or pass it to useEffect to execute scroll
    const executeScroll = useCallback(() => {
        if (props.refElement.current) {
            props.refElement.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [props.refElement]);
    return (
        <>
            <a
                onClick={executeScroll}
                className={
                    (props.type === 'Popover') ?
                        `font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-red-700` :
                        `block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-b-2 hover:border-red-700`
                }
            >
                {props.name}
            </a>
        </>);
};

export default ScrollLink;
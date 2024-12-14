'use client';
import React, { useCallback } from 'react';

export default function ScrollLink({ refElement, type, name }) {
	const executeScroll = useCallback(() => {
		if (refElement.current) {
			refElement.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [refElement]);
	return (
		<>
			<a
				onClick={executeScroll}
				className={
					(type === 'Popover') ?
						`font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-red-700` :
						`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-b-2 hover:border-red-700`
				}
			>
				{name}
			</a>
		</>);
}
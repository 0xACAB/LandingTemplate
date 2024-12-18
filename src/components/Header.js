import React, { Fragment } from 'react';

import { Popover, Transition, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import config from '../config/index.json';
import ScrollLink from '@/components/ScrollLink';

export default function Header({ refs }) {
	const { navigation, company, callToAction } = config;
	const { name: companyName, logo } = company;
	const getLinks = (type) => {
		return navigation.map((item) => {
			const ref = refs[item.href];
			return (<ScrollLink
				refElement={ref}
				key={item.href}
				type={type}
				name={item.name}
			/>);
		});
	};
	return (
		<>
			<svg
				className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
			<Popover>
				<div className="relative pt-6 px-4 sm:px-6 lg:px-8 w-full">
					<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start"
					     aria-label="Global">
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a href="#">
									<span className="sr-only">{companyName}</span>
									<img alt="logo" className="h-16 w-auto sm:h-16" src={logo} />
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<PopoverButton
										className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
									>
										<span className="sr-only">Open main menu</span>
										<Bars3Icon className="h-6 w-6" aria-hidden="true" />
									</PopoverButton>
								</div>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
							{getLinks('Popover')}
							<a href="#" className={`font-medium text-primary hover:text-secondary`}>
								{callToAction.text}
							</a>
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>

					<PopoverPanel
						focus
						className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
					>

						<div
							className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}>
							<div className="px-5 pt-4 flex items-center justify-between">
								<div>
									<img className="h-8 w-auto" src={logo} alt="" />
								</div>
								<div className="-mr-2">
									<PopoverButton
										className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
									>
										<span className="sr-only">Close main menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</PopoverButton>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3 space-y-1">
								{getLinks('PopoverPanel')}
							</div>
							<a
								href={callToAction.href}
								className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
							>
								{callToAction.text}
							</a>
						</div>
					</PopoverPanel>
				</Transition>
			</Popover>

		</>
	);
};
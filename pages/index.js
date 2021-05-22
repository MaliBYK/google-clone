import { useRef } from 'react';
import Head from 'next/head';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
export default function Home() {
	//----[Refs]----
	const inputEl = useRef();
	const router = useRouter();
	//----[Funcs]----
	const search = e => {
		e.preventDefault();
		const term = inputEl.current.value.trim();
		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className="flex flex-col  items-center justify-center h-screen">
			<Head>
				<title>Google</title>
				<link rel="icon" href="/favicon_google.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 text-sm text-gray-700 justify-between">
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
					<Avatar url="https://i.imgur.com/eP5DqDJ.png" />
				</div>
			</header>
			{/* Body */}
			<form className="flex flex-col items-center  flex-grow mt-44 w-4/5 ">
				<Image src="/google_search2.png" width={270} height={90} />
				<div className="flex w-full hover:shadow-lg mt-5 transition duration-75 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input ref={inputEl} type="text" className="flex-grow focus:outline-none" />
					<MicrophoneIcon className="h-5 text-gray-900" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 mt-8 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="btn">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}

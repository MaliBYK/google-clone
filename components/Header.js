import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import HeaderOptions from './HeaderOptions';
import Avatar from './Avatar';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';

const Header = () => {
	const router = useRouter();
	const inputEl = useRef();

	//----[Funcs]----
	const search = e => {
		e.preventDefault();
		const term = inputEl.current.value.trim();
		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="/google_search2.png"
					height={40}
					width={120}
					className="cursor-pointer"
					onClick={() => router.push('/')}
				/>
				<form className="flex px-6 py-3 ml-10 mr-5 border flex-grow rounded-full border-gray-200 shadow-lg max-w-3xl items-center">
					<input
						type="text"
						className="flex-grow w-full focus:outline-none "
						ref={inputEl}
					/>
					<XIcon
						className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
						onClick={() => (inputEl.current.value = '')}
					/>
					<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />
					<SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-gray-500 pl-1 border-gray-300" />
					<button onClick={search} type="submit" hidden>
						Search
					</button>
				</form>
				<Avatar className="ml-auto" url="https://i.imgur.com/vavfJqu.gif" />
			</div>

			<HeaderOptions />
		</header>
	);
};

export default Header;

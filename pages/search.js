import Head from 'next/head';
import Response from '../Response';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';
const Search = ({ results }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
			</Head>
			<Header />
			<SearchResults results={results} />
		</div>
	);
};

export default Search;

export async function getServerSideProps({ query }) {
	const startIndex = query.start || '0';
	const useDummyData = false;
	let res;
	if (useDummyData) {
		res = Response;
	} else {
		res = await fetch(
			`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query.term}&start=${startIndex}`
		);
		res = await res.json();

		return {
			props: {
				results: res,
			},
		};
	}

	return {
		props: {
			results: res,
		},
	};
}

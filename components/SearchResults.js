const SearchResults = ({ results }) => {
	return (
		<div>
			<p>
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
		</div>
	);
};

export default SearchResults;

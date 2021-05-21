const Avatar = ({ url, className }) => {
	return (
		<img
			loading="lazy"
			className={`h-10 cursor-pointer transition  duration-150 transform hover:scale-110 rounded-full ${className}`}
			src={url}
			alt="Profile Picture"
		/>
	);
};

export default Avatar;

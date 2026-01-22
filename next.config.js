/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		qualities: [75, 85],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "enfycon.com",
			},
			{
				protocol: "https",
				hostname: "secure.gravatar.com",
			},
		],
	},
};


module.exports = nextConfig;

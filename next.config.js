/** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: false,
// 	compiler: {
// 		styledComponents: true,
// 	},
// 	env: {
// 		ALCHAMY_KEY: process.env.ALCHAMY_KEY,
// 		WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
// 		API_URL: process.env.API_URL,
// 		PINATA_API_KEY: process.env.PINATA_API_KEY,
// 		PINATA_API_SECRAT: process.env.PINATA_API_SECRAT,
// 		PINATA_JWT: process.env.PINATA_JWT,
// 		IPFS_GATEWAY: process.env.IPFS_GATEWAY,
// 		IPFS_PINNING_URL: process.env.IPFS_PINNING_URL,
// 		IPFS_UNPIN_URL: process.env.IPFS_UNPIN_URL,
// 	},
// };

module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
			};
		}

		return config;
	},
	optimizeFonts: false,
	reactStrictMode: false,
	compiler: {
		styledComponents: true,
	},
	env: {
		ALCHAMY_KEY: process.env.ALCHAMY_KEY,
		WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
		API_URL: process.env.API_URL,
		PINATA_API_KEY: process.env.PINATA_API_KEY,
		PINATA_API_SECRAT: process.env.PINATA_API_SECRAT,
		PINATA_JWT: process.env.PINATA_JWT,
		IPFS_GATEWAY: process.env.IPFS_GATEWAY,
		IPFS_PINNING_URL: process.env.IPFS_PINNING_URL,
		IPFS_UNPIN_URL: process.env.IPFS_UNPIN_URL,
		THIRD_WEB_CLIENTID: process.env.THIRD_WEB_CLIENTID,
		THIRD_WEB_SECRETKEY: process.env.THIRD_WEB_SECRETKEY,
		DEFAULT_CHAIN_ID: process.env.DEFAULT_CHAIN_ID,
		PUBLIC_VAPIDKEY: process.env.PUBLIC_VAPIDKEY,
		FAL_KEY: process.env.FAL_KEY
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d17ha18jyelis7.cloudfront.net",
				port: "",
				pathname: "/*/**",
			},
			{
				protocol: "https",
				hostname: "hextoymedia.s3.us-east-1.amazonaws.com",
				port: "",
				pathname: "/*/**",
			},
			{
				protocol: "https",
				hostname: "https://cdn.onesignal.com",
				port: "",
				pathname: "/*/**",
			},
		],
	},
};

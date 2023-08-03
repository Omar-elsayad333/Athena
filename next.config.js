// /** @type {import('next'ne).NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         // unoptimized: false,
//         domains: ['athenaapi.azurewebsites.net'],
//     },
// }

// module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'athenaapi.azurewebsites.net',
                port: '',
                // pathname: '/account123/**',
            },
        ],
    },
}

const awsConfig = {
    Auth: {
        identityPoolId: `${import.meta.env.VITE_IDENDITY_POOL_ID}`,
        userPoolId: `${import.meta.env.VITE_USER_POOL_ID}`,
        userPoolWebClientId: `${import.meta.env.VITE_USER_POOL_CLIENT_ID}`,
        identityPoolRegion: `${import.meta.env.VITE_REGION}`,
        region: `${import.meta.env.VITE_REGION}`
    }
};

export default awsConfig;
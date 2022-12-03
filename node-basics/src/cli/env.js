const parseEnv = () => {
    console.log(
        Object.entries(process.env)
            .filter(variable => variable[0].includes('RSS_'))
            .map(variable => `${variable[0]}=${variable[1]}`)
            .join('; ')
    );
};

parseEnv();
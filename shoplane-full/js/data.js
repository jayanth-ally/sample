const getDataFromApi = async (url) => {
    const result = await new Promise(async (resolve, reject) => {
        const data = fetch(url).then((res) => res.json());
        resolve(data);
    })
    return result;
}
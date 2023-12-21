export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5320ef39e1msh7b97bdf7a44e10ep1d255bjsn10fc05c54f7b',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
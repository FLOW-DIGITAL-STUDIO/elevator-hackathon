const fetchJoueurs = async (page:number,limit:number =  6) => {
    const res = await fetch('/api?page='+page);
    console.log(res);
    const data = await res.json();
    return data;
    };


export {
    fetchJoueurs
}
import { useState } from 'react';
import ProfileCard from './ProfileCard';
import './SearchBar.css'
import Error from './Error';
import Loader from './Loader';


function SearchBar() {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOnChange = (e) =>{
        setSearchText(e.target.value);
    };

    const handleSubmit = async (e)  => {
        e.preventDefault();
        setLoading(true);
        let url = `https://api.github.com/users/${searchText}`;
        try{
            const res = await fetch(url);
            if(!res.ok){
                let err= new Error('Fetch request error');
                err.status = res.status || '00';
                err.statusText=res.statusText || 'An error occured'
                throw err;
            } 
            const parsed = await res.json();
            console.log(parsed);
            setData(parsed);
            setError(false)

        } catch (err){
            console.error(err);
            setError(true);
            setData(null);
        } finally{
            setLoading(false);
        }
    };

    // useEffect(()=>{

    // },[]);

    return (
        <div onSubmit={handleSubmit} className="searchbar-main-container">
            <h1 className="searchbar-title">Search a Github user</h1>
            <form className="search-container">
            <input
            className="search-box"
            name="name"
            onChange={handleOnChange} 
            type="text" 
            placeholder="Github Username" />
            <input className="search-button" type="submit" value="Buscar"/>
            </form>
            {error && <Error />}
            {loading && <Loader />}
            {data && <ProfileCard 
            avatar={data.avatar_url}
            username={data.login}
            name={data.name || data.login}
            repos={data.public_repos}
            followers={data.followers}
            following={data.following}
            />}
        </div>
    );
}

export default SearchBar;
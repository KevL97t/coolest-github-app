import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import RepoCard from '../../Components/RepoCard';
import './Repos.css'
import { BiHomeAlt } from 'react-icons/bi'
import Loader from '../../Components/Loader';

function Repos() {

    const [reposData, setReposData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    const params = useParams();

    const reposUrl = `https://api.github.com/users/${params.username}/repos`;
    const userUrl = `https://api.github.com/users/${params.username}`;

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(userUrl),
                  parsed = await res.json();
                  console.log(parsed)
                  setUserData(parsed);
        }
        fetchData();
    },[])

    useEffect(()=>{
        setLoading(true);
        const fetchData = async () =>{
            const res = await fetch(reposUrl),
                  parsed = await res.json();
                  console.log(parsed)
                  setReposData(parsed);
        }
        setLoading(false)
        fetchData();
    },[userData])

    return (
        <div className="repos-main-container">
            {loading && 
            <div className="repos-loader">
            <Loader />
            </div>
            }
            {userData &&
            <div className="user-information">
                <img src={userData.avatar_url} alt="user-icon"/>
                <p>{userData.login}</p>
                <p className="repos-repos-number">Repositories: <strong>{userData.public_repos}</strong></p>
            </div>
            } 
            <div className="repos-container">
            {reposData &&  reposData.map(item => <RepoCard 
            name={item.name}
            url={item.html_url}
            date={item.updated_at}
            key={item.id}
            />)
            } 
            </div>
            <Link className="goback-button" to="/"><BiHomeAlt className="goback-icon"/></Link>
        </div>
    );
}

export default Repos;
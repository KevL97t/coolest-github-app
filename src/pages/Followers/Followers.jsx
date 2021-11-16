import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import MiniProfileCard from '../../Components/MiniProfileCard';
import './Followers.css'
import NoInfo from '../../Components/NoInfo';
import Loader from '../../Components/Loader';
import { BiHomeAlt } from 'react-icons/bi'

function Followers() {

    const [data, setData] = useState([]);
    const [mainUserData, setMainUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    console.log(params)

    const url = `https://api.github.com/users/${params.username}/followers`
    const mainUserUrl = `https://api.github.com/users/${params.username}`

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch(url);
            const parsed = await res.json();
            setData(parsed);
        }
        fetchData();
        setLoading(false);
    },[params.username]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch(mainUserUrl);
            const parsed = await res.json();
            setMainUserData(parsed);
        }
        fetchData();
    },[data]);

    console.log(data)

    return (
        <div className="followers-main-container">
            {loading && 
            <div className="loader-container">
            <Loader />
            </div>}
            {mainUserData &&
            <div className="header-container">
            <img className="main-user-avatar" src={mainUserData.avatar_url} alt="main-user-icon"/>
            <p className="main-user-name">{`${params.username}`}</p>
            <p className="main-user-company">{mainUserData.company || `developer`}</p>
            </div>
            }
            <div className="followers-container">
            {data && data.length > 0 ?  (data.map(item => 
                <MiniProfileCard 
                key={item.id}
                avatar={item.avatar_url}
                username={item.login}
                repos={item.public_repos}
                />
            )) : <NoInfo />}
            <Link className="goback-button" to="/"><BiHomeAlt className="goback-icon"/></Link>
            </div>
        </div>
    );
}

export default Followers;
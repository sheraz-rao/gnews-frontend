import { useEffect, useState } from "react"
import '../App.css'

export default function Gnews() {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/top-headlines/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setNewsData(data);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchNews();
    }, []);
    if (loading) return <p>Loading news for you...</p>;
    if (error) return <p>Error loading news: {error}</p>
    
    return (<>
    <div className="news-container"><h1>📰 Latest News</h1></div>
    <ul className="news-list">
        {
            newsData.articles.map((article, index) => (
                <div>
                    <li key={article.url || index} className="news-card">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                        </a>
                    </li>
                </div>
            ))
        }   
    </ul>
    </>)
}
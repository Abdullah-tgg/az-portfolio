import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import Hero from '../Hero';

const Blogs = () => {
    const heroContent = {
        title: 'Blogs',
        subtitle: 'Explore the Latest Insights and Stories',
    }

    const mediumArticle = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abeerazafar786";
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await fetch(mediumArticle);
            const data = await response.json();
            setArticles(data.items);
        }
        getArticles();

    }, []);

    return (
        <>
            <Hero content={heroContent} />
            <section id='blogs' className='my-5'>
                <div className="container">
                    <div className="row">
                        {
                            articles.map((article, index) => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                                        <Link to={article.link} target='_blank' className='text-decoration-none'>
                                            <div key={index} className="card h-100">
                                                <img src={(article['description']).toString().match(/<img[^>]+src="([^">]+)"/)[1]} className="card-img-top" alt={article.title} style={{
                                                    height: '170px',
                                                    objectFit: 'cover'

                                                }} />
                                                <div className="card-body">
                                                    <h5 className="card-title text-truncate">{article.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs;
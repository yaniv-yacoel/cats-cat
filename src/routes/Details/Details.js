import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import './Details.css';
import CatImage from '../../components/CatImage/CatImage';

export default function Details(props) {
    const { id } = useParams();

    const [catObj, setCatObj] = useState(null);
    const catDetailsRenderer = () => {
        if (catObj) {
            return (
                <div className="catDetails">
                    <CatImage className="catImg" data={catObj}></CatImage>
                    <div className="textDetails">
                        <div className="detail">
                            <div className="label">
                                Name: 
                            </div>
                            <div className="value">
                                {catObj.name}
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Temperament:
                            </div>
                            <div className="value">
                                {catObj.temperament}
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Weight:
                            </div>
                            <div className="value">
                                {catObj.weight.metric} (kg)
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Origin:
                            </div>
                            <div className="value">
                                {catObj.origin}
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Description:
                            </div>
                            <div className="value" title={catObj.description}>
                                {catObj.description}
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Life Span:
                            </div>
                            <div className="value">
                                {catObj.life_span} Years
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Hypoallergenic:
                            </div>
                            <div className="value">
                                {catObj.hypoallergenic === 0 ? 'No' : 'Yes'}
                            </div>
                        </div>
                        <div className="detail">
                            <div className="label">
                                Wikipedia Url:
                            </div>
                            <div className="value">
                                <a href={catObj.wikipedia_url} target="#">{catObj.wikipedia_url}</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="catDetails">
                    Loading...
                </div>
            )
        }
    }
    if (!catObj) {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`).then(response => response.json()).then(res => {
            setCatObj(res);
        });
    }

    return (
        <div>
            <div className="detailsTitle">
                <Link className="backLink" to={`/`}>
                    <i className="arrow-icon"></i>Back to list
                </Link>
                {catDetailsRenderer()}
            </div>
        </div>
    );
}
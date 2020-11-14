import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdItem = (props) => {
    // const [key,
    //     title,
    //     location,
    //     URL,
    //     description,
    //     published,
    //     category] = props;
    console.log(props)
    if ("placeholder" in props) {
        return (
            <div className="ad-item">
                <div className="poster placeholder">
                </div>
                <div className="title placeholder">
                </div>
                <div className="tagline placeholder">

                </div>
                <div className="ad-footer">
                    <div className="location placeholder">
                    </div>
                    <div className="stamp placeholder">
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Link to={`/item/${props.userId}`} style={{textDecoration:"none"}}>
            <div className="ad-item items">
                <div className="poster">
                    <img src={props.URL} />
                </div>
                <div className="item-detail">
                    <div className="title">
                        <span>Rs {props.price}</span>
                    </div>
                    <div className="tagline">
                        <span>{props.title}</span>
                    </div>
                    <div className="ad-footer">
                        <div className="location">
                            <span>{props.location}</span>
                        </div>
                        <div className="stamp">
                            <span>{props.published}</span>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}

export default AdItem

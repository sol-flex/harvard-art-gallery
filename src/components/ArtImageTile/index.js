import React from 'react';
import { NavLink, Link, Routes, Route } from "react-router-dom"
import ArtDescription from '../ArtDescription';



function ArtImageTile({ art, galleryId }) {

    const imgStyle = {
        width: "300px",
        margin: "10px"
    }
    

    return (
        <>
          <Link to={`/galleries/${galleryId}/art/${art.id}`} style={imgStyle}>
            <img style={imgStyle} src={art.images[0].baseimageurl}></img>
          </Link>
        </>
    )
}

export default ArtImageTile;
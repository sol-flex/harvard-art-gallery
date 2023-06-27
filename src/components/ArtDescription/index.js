import React from 'react';
import { NavLink, Link, useParams } from "react-router-dom"


function ArtDescription({ galleries }) {

    const imgStyle = {
        width: "300px",
        margin: "10px"
    }
    
    const { galleryId, artId } = useParams();

    const gallery = galleries.find(gallery => {
        return gallery.id === parseInt(galleryId)
    })

    const galleryObj = gallery.objects.find(object => {
        return object.id === parseInt(artId)
    })

    const artWorks = galleryObj.images.map(image => {
        return (
            <img style={imgStyle} src={`${image.baseimageurl}`}></img>
        )
    })
    


    return (
        <>
            <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
            <h2>{galleryObj.title}</h2>
            <p>{galleryObj.labeltext}</p>
            {artWorks}
        </>
    )
}

export default ArtDescription;
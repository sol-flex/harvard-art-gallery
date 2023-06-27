import React from 'react';
import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'

function GalleryNavigation({ galleries }) {

    const galleryLinks = galleries.map(gallery => {
        return (
            <NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
                {gallery.name}
            </NavLink>
        )
    })

    console.log(galleries)

    return (
        <nav>
            <NavLink to="/" >Home</ NavLink>
            <h1>Galleries</h1>
            {galleryLinks}
        </nav>
    )
}

export default GalleryNavigation;
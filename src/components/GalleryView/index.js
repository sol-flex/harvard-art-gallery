import React from 'react';
import { NavLink, useParams, Route, Routes } from "react-router-dom"
import ArtDescription from '../ArtDescription';
import ArtImageTile from '../ArtImageTile';
import './GalleryView.css'


function GalleryView({ galleries }) {
    const { galleryId } = useParams();

    const gallery = galleries.find(gallery => {
        return gallery.id === parseInt(galleryId)
    })

    const artWorks = gallery.objects.map(object => {
        return (
            <ArtImageTile art={object} galleryId={galleryId}></ArtImageTile>
        )
    })

    console.log(gallery);

    return (
        <>
          <h1>{gallery.name}</h1>
          {artWorks}
          <Routes>
            <Route path="/galleries/:galleryId/art/:artId"  element={<ArtDescription gallery={gallery}/>}/>
          </Routes>
        </>
    )
}

export default GalleryView;
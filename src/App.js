import logo from './logo.svg';
import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage'
import ArtDescription from './components/ArtDescription';
import ArtImageTile from './components/ArtImageTile';



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <GalleryNavigation galleries={harvardArt.records}/>}></Route>
          <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records}/>}></Route>
          <Route path="/galleries/:galleryId/art/:artId"  element={<ArtDescription galleries={harvardArt.records}/>}/>
      </Routes>
    </div>
  );
}

export default App;

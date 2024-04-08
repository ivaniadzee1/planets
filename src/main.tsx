import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MercuryInternal from './pages/MercuryInternal.tsx'
import MercurySurface from './pages/MercurySurface.tsx'
import Mars from './components/Mars.tsx'
import MarsInternal from './pages/MarsInternal.tsx'
import MarsSurface from './pages/MarsSurface.tsx'
import Venus from './components/Venus.tsx'
import VenusInternal from './pages/VenusInternal.tsx'
import VenusSuface from './pages/VenusSuface.tsx'
import Earth from './components/Earth.tsx'
import EarthInternal from './pages/EarthInternal.tsx'
import EarthSurface from './pages/EarthSurface.tsx'
import Jupiter from './components/Jupiter.tsx'
import JupiterInternal from './pages/JupiterInternal.tsx'
import JupiterSurface from './pages/JupiterSurface.tsx'
import Saturn from './components/Saturn.tsx'
import SaturnInternal from './pages/SaturnInternal.tsx'
import Saturnsurface from './pages/Saturnsurface.tsx'
import Uranus from './components/Uranus.tsx'
import UranusInternal from './pages/UranusInternal.tsx'
import UranusSurface from './pages/UranusSurface.tsx'
import Neptune from './components/Neptune.tsx'
import NeptunInternal from './pages/NeptunInternal.tsx'
import NeptuneSurface from './pages/NeptuneSurface.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/mercuryInternal",
    element: <MercuryInternal/>
  },
  {
    path:"/mercury",
    element: <App/>
  },
  {
    path:"/surface",
    element: <MercurySurface/>
  },
  {
    path:"/mars",
    element: <Mars/>
  }, 
  {
    path:"/marsinternal",
    element: <MarsInternal/>
  },
  {
    path:"/marssurface",
    element: <MarsSurface/>
  },
  {
    path:"/venus",
    element: <Venus/>
  },
  {
    path:"/internal",
    element: <VenusInternal/>
  },
  {
    path:"/venussurface",
    element: <VenusSuface/>
  },
  {
    path:"/earth",
    element: <Earth/>
  },
  {
    path:"/earthinternal",
    element: <EarthInternal/>
  },
  {
    path:"/earts",
    element: <EarthSurface/>
  },
  {
    path:"/jupiter",
    element: <Jupiter/>
  },
  {
    path:"/jupiterint",
    element: <JupiterInternal/>
  },
  {
    path:"/jupitsur",
    element: <JupiterSurface/>
  },
  {
    path:"/saturn",
    element: <Saturn/>
  },
  {
    path:"/saturnnt",
    element: <SaturnInternal/>
  },
  {
    path:"/saturssur",
    element: <Saturnsurface/>
  },
  {
    path:"/uranus",
    element: <Uranus/>
  },
  {
    path:"/uranusintt",
    element: <UranusInternal/>
  },
  {
    path:"/uranussu",
    element: <UranusSurface/>
  },
  {
    path:"/neptune",
    element: <Neptune/>
  },
  {
    path:"/neptuneint",
    element: <NeptunInternal/>
  },
  {
    path:"/neptunss",
    element: <NeptuneSurface/>
  },
  
  

  


])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)

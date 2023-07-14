import { Outlet } from 'react-router-dom'
import './DecorationStation.css'
import { NavBar } from './nav/NavBar'
import { Route, Routes } from 'react-router-dom'
import { ItemsList } from './items/ItemsList'
import { NewDecorationForm } from './forms/NewDecorationForm'
import { HalloweenItems } from './items/HalloweenList'
import { ChristmasItems } from './items/ChristmasList'
import { ThanksgivingItems } from './items/ThanksgivingList'
import { ItemDetails } from './items/ItemDetails'

export const DecorationStation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<ItemsList />} />
        <Route path="items/:itemId" element={<ItemDetails />} />
        <Route path="halloween" element={<HalloweenItems />} />
        <Route path="christmas" element={<ChristmasItems />} />
        <Route path="thanksgiving" element={<ThanksgivingItems />} />
        <Route path="new" element={<NewDecorationForm />} />
      </Route>
    </Routes>
  )
}

//Josh's Notes:
// LIFECYCLE 
//jsx renders 
//JavaScript returns html and paints the UI
//runs every useEffect
//rerender again if you make state changes in your useEffects

{/* <Route path=":itemId" element={<ItemDetails />} /> */ }
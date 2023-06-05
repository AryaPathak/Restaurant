import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'


const Resto = () => {

    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedlist = Menu.filter((currEle)=>{
            return currEle.category === category;
        })

        setMenuData(updatedlist);
    }

  return (
    <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>
                Breakfast</button>

                <button className="btn-group__item" onClick={()=>filterItem("lunch")}>
                Lunch</button>

                <button className="btn-group__item" onClick={()=>filterItem("evening")}>
                evening</button>

                <button className="btn-group__item" onClick={()=>filterItem("dinner")}>
                Dinner</button>

                <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>
                All</button>
            </div>

        </nav>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resto

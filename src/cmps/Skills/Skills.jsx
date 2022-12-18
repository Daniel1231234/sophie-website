import {  ImgList } from "../UI/ImgList"


import './Skiils.css'
import { useReavel } from "../../hooks/useReveal"
import { itemData } from "./skillsData"

export const Skills = () => {
  useReavel()
 
    return (
        <section id="skills">
            <div className="skills-container reveal container">
                <h2 className="skills-title textCenter">תחומי התמחות</h2>
                <ImgList itemData={itemData}  />
              </div>
          </section>
      )
    
}


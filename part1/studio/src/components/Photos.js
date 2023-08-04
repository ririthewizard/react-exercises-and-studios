import React from "react";
import styles from "./Description.module.css"

function RecipePhoto() {

    return (
        <img style={{width:200, height:300}} src="https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg?resize=650,910" alt="Mouth-watering Pho" className = {styles.imageUpdates} />
    )
}

export default RecipePhoto;
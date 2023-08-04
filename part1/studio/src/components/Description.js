import React from "react";
import styles from "./Description.module.css";

class RecipeDescription extends React.Component{ 
    render ()   { 
        return(
            <div> 
                <div>
                <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div> 
        )
    }
}
function RecipeAuthor() {

    const authorLink = "https://www.recipetineats.com/vietnamese-pho-recipe/";
    const authorPhoto = "https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=125,125";
    const authorName = "Nagi";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Author Nagi smiling for the camera" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Recipetineats</a>
            </div>
        </div>
    );
}

export default RecipeDescription;
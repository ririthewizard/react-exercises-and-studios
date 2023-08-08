let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

function RateARecipe(props) {
  let temp = props.rating >= 1 && props.rating < 5 ? GiveRating(props) : null; 
  return temp;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 

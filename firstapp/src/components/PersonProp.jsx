

// function PersonProp(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h3>City: {props.city}</h3>
//     </div>
//   )
// }
function PersonProp({name,city}) {
    return (
      <div>
        <h1>Name: {name}</h1>
        <h3>City: {city}</h3>
      </div>
    )
  }

export default PersonProp

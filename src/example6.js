import React from 'react'


const Product = props => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote(1, props.index)
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote(-1, props.index)
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {
   // Finish writing the GroceryApp class
   constructor(props){
       super(props)
       this.state = {
           products: props.products
        }
    }
 
  onVote = (dir, index) => {
    // Update the products array accordingly ...
    
    this.setState(state => {
            let { products } = state; 
       products[index] = {...products[index], votes: products[index].votes + dir};      
       return products;
     });
 
  };

  render() {
    return (
      <ul>
        { this.state.products.map((p, i) => 
            <Product name={p.name} 
                     index={i} 
                     votes={p.votes} 
                     onVote={this.onVote}/>)
        }
      </ul>
    );
  }
}

// document.body.innerHTML = "<div id='root'></div>";

// ReactDOM.render(<GroceryApp
//   products={[
//     { name: "Oranges", votes: 0 },
//     { name: "Bananas", votes: 0 }
//   ]}
// />, document.getElementById('root'));
// console.log(document.getElementById('root').innerHTML)

export default GroceryApp
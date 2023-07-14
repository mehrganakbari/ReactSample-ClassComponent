import React from "react";
import Product from "../product/product";

class ClassComponent extends React.Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id: "React" },
      { title: "Node.js", price: "89 $", id: "Node" },
      { title: "JavaScript", price: "79 $", id: "Js" },
    ],
  };

  clickHandler = (newTitle) => {
    // setState() => to update states
    this.setState({
      products: [
        { title: "React.js", price: "89 $", id: "React" },
        { title: newTitle, price: "79 $", id: "Node" },
        { title: "JavaScript", price: "69 $", id: "Js" },
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>shopping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
        <button onClick={this.clickHandler.bind(this, "Hello, Wellcom to New Course")}>Change Price</button>
      </div>
    );
  }
}

export default ClassComponent;

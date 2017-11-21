import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  render() {
    const { name, price, date } = this.props;
    return (
      <div className="order">
        <div className="order__upper">
          <p className="p--order">Название: {name}</p>
          <p className="p--order">Цена: {price}</p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {date}</p>
        </div>
      </div>
    );
  }
}

export default Order;

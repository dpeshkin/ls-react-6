import React, { Component } from "react";
import "./Farm.css";
import { connect } from "react-redux";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../Order";

class Farm extends Component {
  moveOrderToConsumer = () => {
    const order = this.props.orders[this.props.orders.length - 1];
    this.props.moveOrderToCustomer(order);
  };
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button onClick={this.moveOrderToConsumer} disabled={!orders.length}>
          Отправить урожай клиенту
        </button>
        <div className="order-list">
          {orders.map((item, index) => (
            <Order
              key={item.id}
              name={item.name}
              price={item.price}
              date={item.createdAt.toTimeString()}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.farm
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

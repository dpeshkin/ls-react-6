import React, { Component } from "react";
import Order from "../Order";
import "./Market.css";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  createNewOrder = () => {
    this.props.createOrder(getNewOrder());
    console.log(this.props);
  };

  moveOrderToFarm = () => {
    const order = this.props.orders[this.props.orders.length - 1];
    this.props.moveOrderToFarm(order);
  };

  render() {
    const { orders } = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button onClick={this.createNewOrder}>Создать заказ</button>
        <button onClick={this.moveOrderToFarm} disabled={!orders.length}>
          Отправить заказ на ферму
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
  orders: state.market
});

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);

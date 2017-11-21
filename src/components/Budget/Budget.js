import React, { Component } from "react";
import "./Budget.css";
import { connect } from "react-redux";

class Budget extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {
      profit,
      marketExpanse,
      farmExpanse,
      deliveryExpanse
    } = this.props.budget;
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {profit}</p>
        <p>Расходы продавцов: {-marketExpanse}</p>
        <p>Расходы на ферме: {-farmExpanse}</p>
        <p>Расходы на доставку: {-deliveryExpanse}</p>
        <p>
          Итого:{" "}
          {profit -
            (marketExpanse + farmExpanse + deliveryExpanse)}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: state.budget
});

export default connect(mapStateToProps)(Budget);

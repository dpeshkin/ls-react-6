import React, { Component } from "react";
import "./Budget.css";
import { connect } from "react-redux";

class Budget extends Component {
  render() {
    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег:</p>
        <p>Расходы продавцов:</p>
        <p>Расходы на ферме:</p>
        <p>Расходы на доставку:</p>
        <p>Итого:</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.budget
});

export default connect(mapStateToProps)(Budget);

import { Component } from "react";
import { Bars } from "react-loader-spinner";

import "./index.css";

class Table extends Component {
  state = {
    data: [],
    limit: 50,
    isLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { limit } = this.state;
    const response = await fetch(
      `https://api.coincap.io/v2/assets?limit=${limit}`
    );
    const dataObj = await response.json();
    console.log(dataObj);

    this.setState({ data: dataObj.data, isLoading: false });
  };

  increaseLimit = () => {
    this.setState(
      (prevState) => ({ limit: prevState.limit + 50 }),
      this.fetchData
    );
  };

  render() {
    const { data, isLoading } = this.state;
    return (
      <div className="bg-table">
        {isLoading === false ? (
          <>
            <table className="table">
              <tr className="row">
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap</th>
                <th>VWAP(24Hr)</th>
                <th>Supply</th>
                <th>Volume(24Hr)</th>
                <th>Change(24Hr)</th>
              </tr>

              {data.map((eachItem) => (
                <tr key={eachItem.id} className="row">
                  <td>{eachItem.rank}</td>
                  <td className="icon-name-container">
                    <img
                      src={`https://assets.coincap.io/assets/icons/${eachItem.symbol.toLowerCase()}@2x.png`}
                      alt={eachItem.symbol}
                      className="coin-logo"
                    />
                    <div className="name-symbol">
                      <p>{eachItem.name}</p>
                      <p>{eachItem.symbol}</p>
                    </div>
                  </td>
                  <td>${Math.ceil(eachItem.priceUsd)}</td>
                  <td>${Math.ceil(eachItem.marketCapUsd)}</td>
                  <td>${Math.ceil(eachItem.vwap24Hr)}</td>
                  <td>{Math.ceil(eachItem.supply)}</td>
                  <td>${Math.ceil(eachItem.volumeUsd24Hr)}</td>
                  <td>{Math.ceil(eachItem.changePercent24Hr)}%</td>
                </tr>
              ))}
            </table>
            <button
              type="button"
              onClick={this.increaseLimit}
              className="nav-button"
            >
              Load More
            </button>
          </>
        ) : (
          <div className="loader-container">
            <Bars color="cyan" />
          </div>
        )}
      </div>
    );
  }
}

export default Table;

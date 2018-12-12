import React, { Component } from "react";

class TableListings extends Component {
  render() {
    const { listings } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody listings={listings} />
      </table>
    );
  }
}

export default TableListings;

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Listing Type</th>
        <th>Location</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.listings.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.start_date}</td>
        <td>{row.end_date}</td>
        <td>{row.listing_type}</td>
        <td>{row.location}</td>
      </tr>
    );
  });
  
  return <tbody>{rows}</tbody>;

};

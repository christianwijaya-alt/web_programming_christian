import React, { Component } from 'react';

class KartuProfilClass extends React.Component {
  render() {
    const { nama, pekerjaan } = this.props;
    return (
      <div className="card">
        <h3>Nama: {nama}</h3>
        <p>Pekerjaan: {pekerjaan}</p>
      </div>
    );
  }
}
export default KartuProfilClass;
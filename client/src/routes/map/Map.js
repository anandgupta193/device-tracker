/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Map.css';

const title = 'Map';

class CustomMap extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  }

  constructor(){
    super();
    console.log("Inside cons");
  }

  componentWillMount() {
    this.context.setTitle(title);
  }

  render() {
    const position = [51.505, -0.09];
    console.log('process.env', process.env);
    if (process.env.BROWSER) {
      var {Map, Marker, Popup, TileLayer} = require('react-leaflet');
      return (
        <div className="search-map">
          <Map center={position} zoom={13}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <Marker position={position}>
              <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
              </Popup>
            </Marker>
          </Map>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default withStyles(s)(CustomMap);

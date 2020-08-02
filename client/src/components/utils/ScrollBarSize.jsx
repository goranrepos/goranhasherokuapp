import React, { Component, Fragment } from 'react';
import ScrollbarSize from 'react-scrollbar-size';

class Scrollbarsizer extends Component {
  scrollbarSizeLoad = (measurements) => {
    //console.log('Scrollbars loaded', measurements, measurements.scrollbarWidth);
    if (measurements && measurements.width) {
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${measurements.width}px`
      );
    }
  };

  scrollbarSizeChange = (measurements) => {
    //console.log('Scrollbars changed', measurements);
    if (measurements && measurements.width) {
      //console.log('Scrollbars changed', measurements);
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${measurements.width}px`
      );
    }
  };

  render() {
    return (
      <Fragment>
        <ScrollbarSize
          onLoad={this.scrollbarSizeLoad}
          onChange={this.scrollbarSizeChange}
        />
      </Fragment>
    );
  }
}

export default Scrollbarsizer;

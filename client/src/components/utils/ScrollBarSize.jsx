import React, { Component, Fragment } from 'react';
import ScrollbarSize from 'react-scrollbar-size';

class MyComponent extends Component {
  scrollbarSizeLoad = (measurements) => {
    //console.log('Scrollbars loaded', measurements, measurements.scrollbarWidth);
    if (measurements && measurements.scrollbarWidth) {
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${measurements.scrollbarWidth}px`
      );
    }
  };

  scrollbarSizeChange = (measurements) => {
    //console.log('Scrollbars changed', measurements);
    if (measurements && measurements.scrollbarWidth) {
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${measurements.scrollbarWidth}px`
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

export default MyComponent;

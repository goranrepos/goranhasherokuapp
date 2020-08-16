import React, { Fragment, useState, FunctionComponent } from 'react';
import ScrollbarSize, {
  ScrollbarSizeChangeHandlerParams,
} from 'react-scrollbar-size';

interface IOwnProps {}

type IProps = IOwnProps;

const Scrollbarsizer: FunctionComponent<IProps> = () => {
  const [currentHeight, setHeight] = useState(0);
  const [currentWidth, setWidth] = useState(0);

  const scrollbarSizeChange = ({
    height,
    width,
  }: ScrollbarSizeChangeHandlerParams) => {
    if (height !== currentHeight) {
      setHeight(height);
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${width}px`
      );
    }

    if (width !== currentWidth) {
      setWidth(width);
    }
  };

  return (
    <Fragment>
      <ScrollbarSize onChange={scrollbarSizeChange} />
    </Fragment>
  );
};

export default Scrollbarsizer;

// class Scrollbarsizer extends Component {
//   scrollbarSizeLoad = (measurements) => {
//     //console.log('Scrollbars loaded', measurements, measurements.scrollbarWidth);
//     if (measurements && measurements.width) {
//       document.documentElement.style.setProperty(
//         '--scrollbar-width',
//         `${measurements.width}px`
//       );
//     }
//   };

//   scrollbarSizeChange = (measurements) => {
//     //console.log('Scrollbars changed', measurements);
//     if (measurements && measurements.width) {
//       //console.log('Scrollbars changed', measurements);
//       document.documentElement.style.setProperty(
//         '--scrollbar-width',
//         `${measurements.width}px`
//       );
//     }
//   };

//   render() {
//     return (
//       <Fragment>
//         <ScrollbarSize
//           onLoad={this.scrollbarSizeLoad}
//           onChange={this.scrollbarSizeChange}
//         />
//       </Fragment>
//     );
//   }
// }

// export default Scrollbarsizer;

import * as React from 'react';
import { Range } from 'react-range';

export default class Radius extends React.Component {

  render() {
    return (
      <Range
        step={1}
        min={100}
        max={1000}
        values={this.props.petState.radius}
        onChange={(radius) => this.props.setPetState({...this.props.petState, radius })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundImage: 'url("https://imgix.bustle.com/inverse/b5/9e/ca/00/d00b/4ed1/93b6/7356790015e5/shutterstock1078303643jpg.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        )}
      />
    );
  }
}
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
              backgroundColor: '#fff'
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
              backgroundImage: 'url("https://storage.googleapis.com/twg-content/images/MarketingResources_Thumbnail_Search.width-1200.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%"
            }}
          />
        )}
      />
    );
  }
}
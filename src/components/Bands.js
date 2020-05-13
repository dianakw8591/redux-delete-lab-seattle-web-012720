import React from 'react';
import Band from './Band';

export default function Bands(props) {
  return (
    <div>
      {props.bands.map(band => {
        return <Band band={band} key={band.id} delete={props.delete} />
      })}
    </div>
  )
}
import React from 'react';
import { props, t } from 'tcomb-react';
import { pure, skinnable } from 'revenge';

@pure
@skinnable()
@props({
  seconds: t.Number
})
export default class Counter extends React.Component {

  getLocals({ seconds }) {
    const minutes = Math.floor(seconds / 60);
    return {
      minutes,
      seconds: seconds - (60 * minutes)
    };
  }

  template({ minutes, seconds }) {
    return (
      <div>{minutes} minutes, {seconds} seconds elapsed</div>
    );
  }
}

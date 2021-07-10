import React from 'react';
import './Background.scss';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
function Background() {
  return (
    <section className="background">
      <div className="background__content">
        <div className="background__content__left">
          <h1>Groenmarkt</h1>
          <h1>Amsterdam</h1>
          <p>A new piece of Amsterdam for men, birds and bees</p>
        </div>
        <div className="background__content__right">
          <div className="background__content__right__icon">
            <ArrowDownwardIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;

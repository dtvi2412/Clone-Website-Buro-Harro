import React from 'react';
import './Project.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
function Project() {
  return (
    <section className="project">
      <h1 className="project__text">Design: Harro de Jong</h1>
      <h1 className="project__text">
        In collaboration with: <a href="#MX13">MX13</a>
      </h1>
      <div className="project__bottom">
        <div className="project__bottom__item">
          <div className="project__bottom__item__image">
            <img
              src="https://buroharro.nl/wp-content/uploads/2021/05/buroharro-groenmarkt-singelgrachtblok_aerial-low-868x578.jpg"
              alt="project-1"
            />
          </div>

          <p>Related project</p>
          <div className="project__bottom__item__icon">
            <h1>Groenmarkt Amsterdam</h1>
            <NavigateNextIcon />
          </div>
        </div>
        <div className="project__bottom__item">
          <div className="project__bottom__item__image">
            <img
              src="https://buroharro.nl/wp-content/uploads/2021/05/buroharro_arnhem_meinerswijk_stadsblokken_impressie_meinerseiland_oever-low-868x578.jpg"
              alt="project-1"
            />
          </div>
          <p>Next project</p>
          <div className="project__bottom__item__icon">
            <h1>Groenmarkt Amsterdam</h1> <NavigateNextIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

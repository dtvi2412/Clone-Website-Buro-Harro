import React from 'react';
import './About.scss';
function About() {
  return (
    <section className="about">
      <div className="about__top">
        <div className="about__top__i">i</div>
        <ul className="about__top__list">
          <li>
            <a href="#bc">Realisation: 2020</a>
          </li>
          <li>
            <a href="#as">Design: MX13 en Harro de Jong</a>
          </li>
          <li>
            <a href="#asd">Contractor: AdaptOne management</a>
          </li>
        </ul>
      </div>
      <div className="about__mid">
        <p>
          A forest cabin on the Veluwe – that’s the office of buroharro and
          Harro’s hide-out in one. In the middle of the vibrant cultural enclave
          Buitenplaats Koningsweg, a former WW2 military site and a project we
          initiated and designed ourselves. It is an office that feels like a
          holiday home, or a holiday home in which you can work…
        </p>
      </div>
      <div className="about__image">
        <img
          src="https://buroharro.nl/wp-content/uploads/2021/05/Buroharro_kantoor_9-low-1500x1001.jpg"
          alt="about__image"
        />
      </div>
      <div className="about__last">
        <h1>
          That’s the way we like it. Living and working in places you’d book on
          Airbnb.
        </h1>
        <div className="about__last__text">
          <p>
            In a real landscape, on the edge of the forest (and later, when it’s
            finished) surrounded by heather.
          </p>
          <p>
            In accordance with the image quality plan that we drew up together
            with MVRDV for this site, the extension is monochrome dark grey, Ral
            7043, which distinguishes the new from the old elements.
          </p>
          <p>
            Inside, it is a serene interior in which the new elements are made
            out of birchwood: the extension, the tables, and the block
            containing the kitchen, toilet and sleeping floor, which is placed
            like a box in this typical cottage. This archetypal shape is
            repeated in the wooden extension that seems to have been pushed out
            of its stone shell like a matchbox.
          </p>
          <p>
            The large new facade that opens up to the landscape is at the same
            time the sitting edge, with nature reaching down to the facade. Even
            stronger – soon when the stone part of the house is completely
            covered by ivy, nature will bé the facade. Real landscape and fine
            architecture, two beautiful ingredients – that’s the way we like to
            prepare the landscapes we make…
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

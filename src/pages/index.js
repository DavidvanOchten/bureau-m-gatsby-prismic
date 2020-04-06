import React from 'react';
import CopyHeading from '../components/copy/CopyHeading';

export default () => {
    return (
        <article className="home">
            <div className="container">
                <CopyHeading heading="Onze omgeving mooier maken" headingLarge={true} copy="Bureau M biedt juridisch advies binnen het omgevingsrecht. Daarbij staan deskundigheid, duidelijkheid en een persoonlijke benadering voorop. Betrouwbaar, gedegen advies voor particulieren, ondernemingen en overheden. Zo maken we samen onze omgeving mooier." />
            </div>

            {/* Use gatsby-image: https://www.gatsbyjs.org/packages/gatsby-image/ */}
            <img src="https://images.unsplash.com/photo-1479293581560-aee98bb24f7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2944&q=80" alt="alt" />

            <div className="container">
                <CopyHeading heading="Meer dan alleen juridisch advies" headingLarge={false} copy="Dankzij een breed netwerk kan Bureau M juridisch advies u bijstaan bij uiteenlopende ruimtelijke vraagstukken. Neem contact op en vraag naar de mogelijkheden." />
            </div>
        </article>
    );
};

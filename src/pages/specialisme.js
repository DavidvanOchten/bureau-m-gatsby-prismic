import React from 'react';
import SEO from '../components/SEO';
import CopyHeading from '../components/copy/CopyHeading';
import Accordion from '../components/Accordion';

export default () => {
    return (
        <article className="specialism">
            <SEO title="Specialisme — Bureau M" description="Specialism Bureau M" />

            <div className="container">
                <CopyHeading heading="Omgevingsrecht" headingLarge={true} copy="Bureau M juridisch advies is gespecialiseerd in het omgevingsrecht. Dit rechtsgebied omvat het geheel aan wet- en regelgeving dat betrekking heeft op de fysieke leefomgeving. Geadviseerd wordt over de volgende onderwerpen." />
            </div>

            {/* Use gatsby-image: https://www.gatsbyjs.org/packages/gatsby-image/ */}
            <img src="https://bit.ly/2X8rngp" srcSet="https://bit.ly/39LpJUK 800w, https://bit.ly/2X8rngp 1650w, https://bit.ly/2UGoamB 2850w" alt="alt" />

            <div className="container">
                <Accordion />
            </div>
        </article>
    );
};

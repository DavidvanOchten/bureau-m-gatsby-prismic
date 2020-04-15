import React from 'react';
import CopyHeading from '../components/copy/CopyHeading';
import Accordion from '../components/Accordion';
import Image from '../components/images/Image';

const Slices = ({ items }) => {
    return items.map((slice, index) => {
        switch (slice.type) {
            case 'titel_met_tekst':
                const { heading, heading_large, copy } = slice.primary;

                return (
                    <div className="container" key={index}>
                        <CopyHeading heading={heading} headingLarge={heading_large} copy={copy} />
                    </div>
                );

            case 'afbeelding':
                const { image } = slice.primary;

                return (
                    <Image {...image} key={index} />
                );

            case 'accordion':
                return (
                    <div className="container" key={index}>
                        <Accordion data={slice.fields} />
                    </div>
                );

            default:
                return null;
        }
    });
};

export default Slices;
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

const CopyHeading = ({ classes, heading, headingLarge, copy }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}copy-heading`;
    const largeSuffix = (headingLarge) ? '-large': '';

    return (
        <section className={classNames}>
            <h1 className={`copy-heading__heading${largeSuffix} heading${largeSuffix}`}>{RichText.asText(heading)}</h1>
            <div className="copy-heading__copy">{RichText.render(copy, linkResolver, htmlSerializer)}</div>
        </section>
    );
};

export default CopyHeading;
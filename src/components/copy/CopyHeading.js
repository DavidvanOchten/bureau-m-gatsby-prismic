import React from 'react';

const CopyHeading = ({ classes, heading, headingLarge, copy }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}copy-heading`;
    const largeSuffix = (headingLarge) ? '-large': '';

    return (
        <section className={classNames}>
            <h1 className={`copy-heading__heading${largeSuffix} heading${largeSuffix}`}>{heading}</h1>
            <div className="copy-heading__copy">{copy}</div>
        </section>
    );
};

export default CopyHeading;
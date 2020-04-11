import React from 'react';
import CopyHeading from '../components/copy/CopyHeading';

export default () => {
    return (
        <article className="not-found">
            <div className="container">
                <CopyHeading heading="404" headingLarge={true} copy="U zocht naar een pagina die niet (meer) bestaat. Klik op het logo om weer terug te gaan naar de homepagina." />
            </div>
        </article>
    );
};
import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
// import CopyHeading from '../components/copy/CopyHeading';
import ListContact from '../components/lists/ListContact';

export default () => {
    const { contactDetails } = useSiteMetadata();

    return (
        <article className="contact">
            <div className="container">
                {/* <CopyHeading heading="Contact" headingLarge={true} copy="Benieuwd naar wat Bureau M juridisch advies voor u kan betekenen? Neem dan vrijblijvend contact op via onderstaande gegevens." /> */}
            </div>

            <div className="container">
                <ListContact classes="contact__details" items={contactDetails} />
            </div>
        </article>
    );
};
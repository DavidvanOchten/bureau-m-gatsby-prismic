import React from 'react';
import CopyHeading from '../components/copy/CopyHeading';
import ListContact from '../components/lists/ListContact';

// TODO: Remove dummy data
import content from '../data/content.json';

export default () => {
    return (
        <article className="contact">
            <div className="container">
                <CopyHeading heading="Contact" headingLarge={true} copy="Benieuwd naar wat Bureau M juridisch advies voor u kan betekenen? Neem dan vrijblijvend contact op via onderstaande gegevens." />
            </div>

            <div className="container">
                <ListContact classes="contact__details" items={content.contact_details} />
            </div>
        </article>
    );
};
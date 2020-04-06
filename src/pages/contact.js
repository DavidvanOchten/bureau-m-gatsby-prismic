import React from 'react';
import CopyHeading from '../components/copy/CopyHeading';
import ListContact from '../components/lists/ListContact';

// TODO: Remove dummy data
import data from '../data.json';

export default () => {
    return (
        <article className="contact">
            <div className="container">
                <CopyHeading heading="Contact" headingLarge={true} copy="Benieuwd naar wat Bureau M juridisch advies voor u kan betekenen? Neem dan vrijblijvend contact op via onderstaande gegevens." />
            </div>

            <div className="container">
                <ListContact classes="contact__details" items={data.contact_details} />
            </div>
        </article>
    );
};
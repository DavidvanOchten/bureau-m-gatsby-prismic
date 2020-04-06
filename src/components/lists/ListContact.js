import React, { Fragment } from 'react';

const ListContact = ({ items, classes }) => {
    const classNames = `${classes ? classes + ' ' : ''}list-contact`;

    const contactDetails = items.map(item => (
        <li className="list-contact__item" key={item.id}>
            {
                (item.path) ? (
                    <Fragment>
                        <span className="list-contact__label">{item.label}</span>
                        <a href={item.path}>{item.name}</a>
                    </Fragment>
                ) : (
                    <Fragment>
                        <span className="list-contact__label">{item.label}</span>
                        <span>{item.name}</span>
                    </Fragment>
                )
            }
        </li>
    ));

    return (
        <ul class={classNames}>
            {contactDetails}
        </ul>
    );
};

export default ListContact;
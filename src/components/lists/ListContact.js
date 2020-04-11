import React, { Fragment } from 'react';

const ListContact = ({ items, classes }) => {
    const classNames = `${classes ? classes + ' ' : ''}list-contact`;

    return (
        <ul className={classNames}>
            {items.map(item => (
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
            ))}
        </ul>
    );
};

export default ListContact;
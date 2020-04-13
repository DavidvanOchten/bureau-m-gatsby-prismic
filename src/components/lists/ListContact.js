import React, { Fragment } from 'react';
import LinkExternal from '../links/LinkExternal';

const ListContact = ({ items, classes }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}list-contact`;

    return (
        <ul className={classNames}>
            {items.map((item, index) => (
                <li className="list-contact__item" key={index}>
                    {
                        (item.link) ? (
                            <Fragment>
                                <span className="list-contact__label">{item.link_label[0].text}</span>
                                <LinkExternal to={item.link} text={item.link_text[0].text} />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <span className="list-contact__label">{item.link_label[0].text}</span>
                                <span>{item.link_text[0].text}</span>
                            </Fragment>
                        )
                    }
                </li>
            ))}
        </ul>
    );
};

export default ListContact;
import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// TODO: Remove dummy data
import content from '../data/content.json';

const Footer = props => {
    return (
        <footer className="footer">
            <ul>
                {content.links.map(link => (
                    <li key={link.id}>
                        <Link className="heading" to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>

            <div className="footer__details">
                <ul className="footer__list">
                    {content.contact_details.map(item => (
                        <li className="footer__list-item" key={item.id}>
                            {
                                (item.path) ? (
                                    <Fragment>
                                        <span>{item.label}: </span>
                                        <a href={item.path}>{item.name}</a>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <span>{item.label}: </span>
                                        <span>{item.name}</span>
                                    </Fragment>
                                )
                            }
                        </li>
                    ))}
                </ul>

                <small className="footer__copyright">©  2020 — Bureau M juridisch advies</small>
            </div>
        </footer>
    );
};

export default Footer;

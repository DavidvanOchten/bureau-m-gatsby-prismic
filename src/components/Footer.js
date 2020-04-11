import React, { Fragment } from 'react';
import { Link } from 'gatsby';

// TODO: Remove dummy data
import data from '../data/content.json';

const Footer = props => {
    return (
        <footer className="footer">
            <ul>
                {data.links.map((link, index) => (
                    <li key={index}>
                        <Link className="heading" to={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="footer__details">
                <ul className="footer__list">
                    {data.contact_details.map((item, index) => (
                        <li className="footer__list-item" key={index}>
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

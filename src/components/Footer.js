import React, { Fragment } from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Link } from 'gatsby';

const Footer = props => {
    const { menuLinks, contactDetails } = useSiteMetadata();

    return (
        <footer className="footer">
            <ul>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <Link className="heading" to={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="footer__details">
                <ul className="footer__list">
                    {contactDetails.map((item, index) => (
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

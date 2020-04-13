import React, { useContext, Fragment } from 'react';
import LinkPrismic from './links/LinkPrismic';
import GlobalContext from '../stores/global/GlobalContext';
import LinkExternal from '../components/links/LinkExternal';

const Footer = props => {
    const { globals } = useContext(GlobalContext);

    return (
        <footer className="footer">
            <ul>
                {globals.menuLinks.map((link, index) => (
                    <li key={index}>
                        <LinkPrismic classes="heading" to={link.link._meta.type} text={link.link_text[0].text} />
                    </li>
                ))}
            </ul>

            <div className="footer__details">
                <ul className="footer__list">
                    {globals.contactDetails.map((item, index) => (
                        <li className="footer__list-item" key={index}>
                            {
                                (item.link) ? (
                                    <Fragment>
                                        <span>{item.link_label[0].text}: </span>
                                        <LinkExternal to={item.link} text={item.link_text[0].text} />
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <span>{item.link_label[0].text}: </span>
                                        <span>{item.link_text[0].text}</span>
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

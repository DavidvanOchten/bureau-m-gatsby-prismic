import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import LinkPrismic from './links/LinkPrismic';
import GlobalContext from '../stores/global/GlobalContext';
import ListContact from '../components/lists/ListContact';

const Menu = ({ classes, menuLinks, contactDetails }) => {
    const { menuOpen, setMenuOpen } = useContext(GlobalContext);

    const menu = useRef();
    const tl = useRef();
    const listMain = useRef([]);
    const listContact = useRef();

    const classNames = `${(classes) ? classes + ' ' : ''}menu`;

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.to(menu.current, 0.4, { autoAlpha: 1, ease: 'none' });
        tl.current.staggerFromTo(listMain.current, 0.8, { y: 50 }, { y: 0, autoAlpha: 1, ease: 'power3.inOut', stagger: 0.08 });
        tl.current.to(listContact.current, 0.4, { autoAlpha: 1, ease: 'none', delay: -0.2 });

    }, []);

    const _open = useCallback(() => {
        document.body.style.overflow = 'hidden';
        tl.current.play();

    }, []);

    const _close = useCallback(() => {
        document.body.style.overflow = '';
        tl.current.reverse();

    }, []);

    useEffect(() => {
        (menuOpen)
            ? _open()
            : _close();

        const _keyUpHandler = e => {
            if (e.keyCode === 27 && menuOpen) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            window.addEventListener('keyup', _keyUpHandler);
            return () => window.removeEventListener('keyup', _keyUpHandler);
        }

    }, [menuOpen, setMenuOpen, _open, _close]);

    const _clickHandler = () => {
        setMenuOpen(false);
        _close();
    };

    return (
        <div className={classNames} ref={menu}>
            <ul className="menu__list-main">
                {menuLinks.map((link, index) => (
                    <li className="menu__list-item-main" key={index} ref={ref => listMain.current[index] = ref}>
                        <LinkPrismic classes="heading-large" to={link.link._meta.type} text={link.link_text[0].text} clickHandler={_clickHandler} />
                    </li>
                ))}
            </ul>

            <div className="menu__list-contact" ref={listContact}>
                <ListContact items={contactDetails}/>
            </div>
        </div>
    );
};

// export default Menu;

const query = graphql`
    query {
        prismic {
            allGlobalss {
                edges {
                    node {
                        contact_details {
                            link_label
                            link_text
                            link {
                                _linkType
                                ... on PRISMIC__ExternalLink {
                                    url
                                }
                            }
                        }
                        menu {
                            link {
                                _linkType
                                ... on PRISMIC_Home {
                                    type
                                    seo_title
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                                ... on PRISMIC_Contact {
                                    heading
                                    copy
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                                ... on PRISMIC_Specialism {
                                    type
                                    seo_title
                                    _meta {
                                        type
                                        uid
                                    }
                                }
                            }
                            link_text
                        }
                    }
                }
            }
        }
    }
`;

// https://github.com/birkir/gatsby-source-prismic-graphql/issues/77
export default props => (
    <StaticQuery
        query={`${query}`}
        render={({ prismic }) => (
            <Menu menuLinks={prismic.allGlobalss.edges[0].node.menu} contactDetails={prismic.allGlobalss.edges[0].node.contact_details} {...props} />
        )}
    />
);
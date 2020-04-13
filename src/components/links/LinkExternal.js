import React from 'react';
import { Link } from 'prismic-reactjs';

const LinkExternal = ({ classes, text, to }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}link`;

    return (
        <a className={classNames} href={Link.url(to)} target="_blank" rel="noopener noreferrer">{text}</a>
    );
};

export default LinkExternal;
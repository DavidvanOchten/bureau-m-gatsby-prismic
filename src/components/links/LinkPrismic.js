import React from 'react';
import { Link } from 'gatsby';
import { linkResolver } from '../../utils/linkResolver';

const LinkPrismic = ({ classes, text, to, clickHandler }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}link`;

    return (
        <Link className={classNames} to={linkResolver({ type: to })} onClick={clickHandler} >
            {text}
        </Link>
    );
};

export default LinkPrismic;
import React from 'react';

const Image = ({ classes, alt, dimensions, url, mobile }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}image`;
    const srcset = (mobile) ? `${mobile.url} ${mobile.dimensions.width}w, ${url} ${dimensions.width}w` : '';

    return (
        <img className={classNames} src={url} srcSet={srcset} alt={alt} width={dimensions.width} height={dimensions.height} />
    );
};

export default Image;
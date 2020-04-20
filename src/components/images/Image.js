import React from 'react';

const Image = ({ classes, alt, url, dimensions, mobile, desktop }) => {
    const classNames = `${(classes) ? classes + ' ' : ''}image`;
    const urlDefault = (url) ? `${url} ${dimensions.width}w` : '';
    const urlDesktop = (desktop) ? `${desktop.url} ${desktop.dimensions.width}w, `: '';
    const urlMobile = (mobile) ? `${mobile.url} ${mobile.dimensions.width}w, `: '';
    const srcset = urlDesktop + urlMobile + urlDefault;

    return (
        <img className={classNames} src={url} srcSet={srcset} alt={alt} width={dimensions.width} height={dimensions.height} />
    );
};

export default Image;
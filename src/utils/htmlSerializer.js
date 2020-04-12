import React from 'react';
import { Link as PrismicLink, Elements } from 'prismic-reactjs';
import { linkResolver } from './linkResolver';
import { Link } from 'gatsby';

// https://prismic.io/docs/reactjs/beyond-the-api/html-serializer
export default (type, element, content, children, index) => {
    switch (type) {
        case Elements.hyperlink:
            const { data } = element;
            const url = PrismicLink.url(data, linkResolver);
            const target = (data.target) ? { 'target': data.target, 'rel': 'noopener' } : {};

            if (data.link_type === 'Document') {
                return (
                    <Link to={url} key={index}>
                        {content}
                    </Link>
                );
            } else {
                return (
                    <a href={url} {...target} key={index}>{content}</a>
                );
            }

        default:
            return null;
    }
};
import React, { useRef, useEffect, useState } from 'react';
import { createResizeObserver } from '../utils/createResizeObserver';

// TODO: Remove dummy data
import content from '../data/content.json';

const Accordion = ({ classes }) => {
    const refs = {
        accordion: useRef(),
        content: [],
        items: []
    };

    const [observer, setObserver] = useState(null);
    const [minHeight, setMinHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const classNames = `${classes ? classes + ' ' : ''}accordion`;

    useEffect(() => {
        let maxHeight = 0;

        const _updateHeight = entry => {
            if (entry.contentRect.height > maxHeight) {
                maxHeight = entry.contentRect.height;
            }

            setMinHeight(maxHeight);
        };

        if (!observer) {
            setObserver(createResizeObserver(refs.content, _updateHeight));
        }

    }, [observer, setObserver, refs.content]);

    useEffect(() => {
        refs.items.map(item => item.classList.remove('is-active'));
        refs.items[activeIndex].classList.add('is-active');
    }, [activeIndex, refs.items]);

    const _clickHandler = index => {
        setActiveIndex(index);
    };

    console.log('render');

    return (
        <div className={classNames} ref={refs.accordion}>
            <ul className="accordion__list" style={{ minHeight: `${minHeight}px` }}>
                {content.accordion.map((item, index) => (
                    <li className="accordion__list-item" key={index} ref={ref => refs.items.push(ref)}>
                        <button className="accordion__button-toggle" onClick={() => _clickHandler(index)}>{item.title}</button>

                        <div className="accordion__content" ref={ref => refs.content.push(ref)} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
import React, { useRef, useEffect, useState } from 'react';
import { createResizeObserver } from '../utils/createResizeObserver';

// TODO: Remove dummy data
import data from '../data/content.json';

const Accordion = ({ classes }) => {
    const [observer, setObserver] = useState(null);
    const [minHeight, setMinHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const classNames = `${(classes) ? classes + ' ' : ''}accordion`;

    const el = useRef();
    const content = useRef([]);
    const items = useRef([]);

    useEffect(() => {
        let maxHeight = 0;

        const _updateHeight = entry => {
            if (entry.contentRect.height > maxHeight) {
                maxHeight = entry.contentRect.height;
            }

            setMinHeight(maxHeight);
        };

        if (!observer) {
            setObserver(createResizeObserver(content.current, _updateHeight));
        }

    }, [observer, setObserver]);

    useEffect(() => {
        items.current.map(item => item.classList.remove('is-active'));
        items.current[activeIndex].classList.add('is-active');
    }, [activeIndex]);

    const _clickHandler = index => {
        setActiveIndex(index);
    };

    return (
        <div className={classNames} ref={el}>
            <ul className="accordion__list" style={{ minHeight: `${minHeight}px` }}>
                {data.accordion.map((item, index) => (
                    <li className="accordion__list-item" key={index} ref={ref => items.current[index] = ref}>
                        <button className="accordion__button-toggle" onClick={() => _clickHandler(index)}>{item.title}</button>

                        <div className="accordion__content" ref={ref => content.current[index] = ref} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
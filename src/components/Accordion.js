import React, { useRef, useEffect, useState } from 'react';
import { createResizeObserver } from '../utils/createResizeObserver';

const Accordion = ({ classes, data }) => {
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

                setMinHeight(maxHeight);
            }
        };

        if (!observer) {
            setObserver(createResizeObserver(content.current, _updateHeight));
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };

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
                {data.map((item, index) => (
                    <li className="accordion__list-item" key={index} ref={ref => items.current[index] = ref}>
                        <button className="accordion__button-toggle" onClick={() => _clickHandler(index)}>
                            {item.title[0].text}
                        </button>

                        <div className="accordion__content" ref={ref => content.current[index] = ref}>
                            {item.text.map((item, index) => {
                                switch (item.type) {
                                    case 'paragraph':
                                        return (
                                            <p key={index}>{item.text}</p>
                                        );

                                    case 'image':
                                        return (
                                            <img src={item.url} alt={item.alt} key={index} />
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;
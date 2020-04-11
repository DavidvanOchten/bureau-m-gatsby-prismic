import ResizeObserver from 'resize-observer-polyfill';

export const createResizeObserver = (elements, callback) => {
    const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
            callback(entry);
        }
    });

    for (const element of elements) {
        observer.observe(element);
    }

    return observer;
};
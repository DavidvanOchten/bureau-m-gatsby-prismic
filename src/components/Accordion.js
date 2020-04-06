import React, { useRef, useEffect, useState } from 'react';

const Accordion = ({ classes }) => {
    const refAccordion = useRef();
    const refContent = [];
    const refItems = [];

    const [minHeight, setMinHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const classNames = `${classes ? classes + ' ' : ''}accordion`;

    useEffect(() => {
        console.log('set active item by', activeIndex);
        refItems.map(item => item.classList.remove('is-active'));
        refItems[activeIndex].classList.add('is-active');
    }, [activeIndex, refItems]);

    // Create a wrapper component that wraps around the accordion
    // In there, check all images and wait for them to be loaded.
    // Define a callback once loaded where you can update the minHeight state
    useEffect(() => {
        const contentHeights = refContent.map(content => content.offsetHeight);
        const maxHeight = Math.max(...contentHeights);
        setMinHeight(maxHeight);
    }, [refContent, setMinHeight]);

    const _clickHandler = index => {
        setActiveIndex(index);
    };

    const items = (
        <>
            <li className="accordion__list-item" ref={ref => refItems[0] = ref}>
                <button className="accordion__button-toggle" onClick={() => _clickHandler(0)}>Ruimtelijke ontwikkelingen</button>

                <div className="accordion__content" ref={ref => refContent[0] = ref}>
                    <p>Voortdurend veranderen we onze omgeving door bijvoorbeeld nieuwe woningen te bouwen of leegstaand vastgoed te transformeren. Wanneer een bestemmingsplan niet voorziet in een ruimtelijke ontwikkeling is een planologisch besluit noodzakelijk. Dit kan een bestemmingsplan of een omgevingsvergunning zijn. Om de haalbaarheid van een ontwikkeling te bepalen kan voorafgaand een principeverzoek bij de gemeente worden ingediend. Bureau M juridisch advies biedt u inzicht in de kansen en risico’s van uw project.</p>

                    {/* Use gatsby-image: https://www.gatsbyjs.org/packages/gatsby-image/ */}
                    <img src="https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80" alt="alt" />
                </div>
            </li>
            <li className="accordion__list-item" ref={ref => refItems[1] = ref}>
                <button className="accordion__button-toggle" onClick={() => _clickHandler(1)}>Bezwaar en beroep</button>

                <div className="accordion__content" ref={ref => refContent[1] = ref}>
                    <p>Bij de besluitvorming over ruimtelijke ontwikkelingen kunnen belanghebbenden formeel reageren. Door het indienen van een inspraakreactie of zienswijze kan invloed worden uitgeoefend voordat het bevoegd gezag een definitief besluit neemt. Na het genomen besluit bestaat de mogelijkheid om bezwaar te maken of beroep in te stellen. Juridisch advies bij het mogelijk maken van uw ruimtelijke ontwikkeling kan tijdens deze momenten van meerwaarde zijn. Als u het niet eens bent met een planologisch besluit kunt u Bureau M juridisch advies eveneens verzoeken u bij te staan en te vertegenwoordigen tijdens een procedure.</p>

                    {/* Use gatsby-image: https://www.gatsbyjs.org/packages/gatsby-image/ */}
                    <img src="https://images.unsplash.com/photo-1489210243253-d88fd02fb159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80" alt="alt" />
                </div>
            </li>
            <li className="accordion__list-item" ref={ref => refItems[2] = ref}>
                <button className="accordion__button-toggle" onClick={() => _clickHandler(2)}>Planschade en nadeelcompensatie</button>

                <div className="accordion__content" ref={ref => refContent[1] = ref}>
                    <p>Planschade kan ontstaan als gevolg van een planologisch besluit zoals een bestemmingsplan of een omgevingsvergunning. De schade kan bestaan uit de waardevermindering van uw woning. Ook kan de door u beoogde ruimtelijke ontwikkeling een risico op planschade tot gevolg hebben. Bureau M juridisch advies voert planschade risicoanalyses uit en treedt bij aanvragen op als onafhankelijke deskundige en als gemachtigde van de aanvrager. Ook is juridische vertegenwoordiging in bezwaar- en beroepsprocedures mogelijk.</p>
                    <p>Bij nadeelcompensatie keert de overheid een vergoeding uit bij schade als gevolg van een op zichzelf rechtmatig optreden. Dit kan zich bijvoorbeeld voordoen bij omzetschade door het afsluiten van een weg door de overheid. Bureau M juridisch advies heeft expertise op het gebied van nadeelcompensatie en kan u met woord en daad bijstaan.</p>
                </div>
            </li>
        </>
    );

    return (
        <div className={classNames} ref={refAccordion}>
            <ul className="accordion__list" style={{ minHeight: `${minHeight}px` }}>
                {items}
            </ul>
        </div>
    );
};

export default Accordion;
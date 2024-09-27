import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const thingsList1 = [
    {
        "type": "thing",
        "title": "Counter",
        "description": "It has a count property that can be read or observed and can be incremented or decremented via separate actions.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "thing",
        "title": "Data Schema Thing",
        "description": "This Thing exists primarily for testing different data schemas and payload formats.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "thing",
        "title": "Smart Coffee Machine",
        "description": "This is a simulation of a coffee machine that also has a simple user interface that displays the values of properties.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "protocol",
        "title": "HTTP"
    },
    {
        "type": "thing",
        "title": "Presence Sensor",
        "description": "It mocks the detection of a person by firing an event every 5 seconds.",
        "tags": ["MQTT"]
    },
    {
        "type": "thing",
        "title": "Smart  Clock",
        "description": "It has a property affordance for the time. However, it runs 60 times faster than real-time to allow time-based decisions.",
        "tags": ["CoAP"]
    },
    {
        "type": "thing",
        "title": "Simple Coffee Machine",
        "description": "This is a simpler simulation of the smart coffee machine.",
        "tags": ["HTTP"]
    },
    {
        "type": "protocol",
        "title": "CoAP"
    },
]

const thingsList2 = [
    {
        "type": "protocol",
        "title": "MQTT"
    },
    {
        "type": "thing",
        "title": "Counter",
        "description": "It has a count property that can be read or observed and can be incremented or decremented via separate actions.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "thing",
        "title": "Data Schema Thing",
        "description": "This Thing exists primarily for testing different data schemas and payload formats.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "thing",
        "title": "Smart Coffee Machine",
        "description": "This is a simulation of a coffee machine that also has a simple user interface that displays the values of properties.",
        "tags": ["HTTP", "CoAP"]
    },
    {
        "type": "protocol",
        "title": "Modbus"
    },
    {
        "type": "thing",
        "title": "Presence Sensor",
        "description": "It mocks the detection of a person by firing an event every 5 seconds.",
        "tags": ["MQTT"]
    },
    {
        "type": "thing",
        "title": "Smart  Clock",
        "description": "It has a property affordance for the time. However, it runs 60 times faster than real-time to allow time-based decisions.",
        "tags": ["CoAP"]
    },
    {
        "type": "thing",
        "title": "Simple Coffee Machine",
        "description": "This is a simpler simulation of the smart coffee machine.",
        "tags": ["HTTP"]
    },
]

function ThingCard({ type, title, description, tags}) {
    if(type === 'protocol') {
        return (
            <div className={styles.protocol}>
                <h3 className={styles.protocol__title}>{title}</h3>
            </div>
        )
    }
    else {
        return (
            <div className={styles.thing}>
                <div className={styles.thing__icon}>
                    <FontAwesomeIcon icon={faMicrochip} className={styles.icon} />
                </div>
                <h3 className={styles.thing__title}>{title}</h3>
                <p className={styles.thing__description}>{description}</p>
                <div className={styles.thing__tags}>
                    {tags.map((tag, idx) => (
                        <Tag key={idx} tag={tag} />
                    ))}
                </div>
            </div>
        )
    }
}

function Tag({ tag }) {
    return (
        <p className={styles.tag}>{tag}</p>
    )
}


export default function ServicesSection() {
    const scrollerThings1Ref = useRef(null);
    const scrollerThings2Ref = useRef(null);

    useEffect(() => {
        const scrollerThings1 = scrollerThings1Ref.current;
        const scrollerThings2 = scrollerThings2Ref.current;

        if (scrollerThings1) {
            const scrollerContent = Array.from(scrollerThings1.children);

            scrollerContent.forEach(thing => {
                const duplicatedThing = thing.cloneNode(true);
                duplicatedThing.setAttribute('aria-hidden', 'true');
                scrollerThings1.appendChild(duplicatedThing);
            })
        }

        if (scrollerThings2) {
            const scrollerContent = Array.from(scrollerThings2.children);

            scrollerContent.forEach(thing => {
                const duplicatedThing = thing.cloneNode(true);
                duplicatedThing.setAttribute('aria-hidden', 'true');
                scrollerThings2.appendChild(duplicatedThing);
            })
        }
    }, []);


    return (
        <section className={styles.servicesSection}>
            <div className={clsx('container', 'section-wrapper')}>
                <h2 className={clsx('hero-title', styles.servicesSection__title)}>Test your <span className={'text-highlight'}>WoT</span> Applications</h2>

                <p className={clsx('subheader', styles.servicesSection__subheader)}>Thingweb also provides you with a variety of publicly available Things for you to interact with over the internet.</p>

                <div className={'scroller'} data-direction="left" data-speed="slower">
                    <div className={styles.things} id='scroller-things-1' ref={scrollerThings1Ref}>
                        {thingsList1.map((props, idx) => (
                            <ThingCard key={idx} {...props} />
                        ))}
                    </div>
                </div>

                <div className={'scroller'} data-direction="right" data-speed="slower">
                    <div className={styles.things} id='scroller-things-2' ref={scrollerThings2Ref}>
                        {thingsList2.map((props, idx) => (
                            <ThingCard key={idx} {...props} />
                        ))}
                    </div>
                </div>

                <div className={styles.servicesSection__cta}>
                    <a href="services" className={clsx('btn btn-primary', styles.btn)}>
                        View All Things
                        <FontAwesomeIcon icon={faArrowRight} className='icon' />
                    </a>
                </div>
            </div>
        </section>
    );
}
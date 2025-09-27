import useInteractionObserver from "../../../hooks/useInteractionObserver";

const About = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className=''>
                <div>
                    cihuy
                </div>
            </section>
        </main>
    );
};

export default About;


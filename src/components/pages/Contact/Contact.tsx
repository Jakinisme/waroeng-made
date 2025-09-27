
import { useInteractionObserver } from "../../../hooks";

const Contact = () => {
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px'
    });

    return (
        <main ref={ref} className={isIntersecting ? 'visible' : ''}>
            <section className=''>
               <div>
                halo
               </div>
            </section>
        </main>
    );
};

export default Contact;

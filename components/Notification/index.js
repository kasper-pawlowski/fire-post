import { useEffect, useState } from 'react';
import { Wrapper } from './index.styles';
import { AnimatePresence } from 'framer-motion';

const Notification = ({ children }) => {
    const [show, setShow] = useState(true);

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timeId);
        };
    }, []);

    // If show is false the component will return null and stop here
    // if (!show) {
    //     return null;
    // }

    // If show is true this will be returned
    return (
        <AnimatePresence>
            {show && (
                <Wrapper initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}>
                    {children}
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default Notification;

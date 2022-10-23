import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
    position: fixed;
    bottom: 20px;
    left: 50%;
    translate: -50% 0;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: tomato;
    font-size: 16px;
    border-radius: 100vw;
    font-weight: 700;
    z-index: 8;
`;

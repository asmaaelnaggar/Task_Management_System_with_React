import React from 'react';
import AddTaskCard from './../AddTask/AddTaskCard';
import { motion } from 'framer-motion';

const Modal = ({ isOpenModel, setIsOpenModel }) => {
    return (
        <>
            <div className="fixed inset-0 bg-[var(--backdrop-color)] backdrop-blur-[4px] z-[1000]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                flex justify-center items-center rounded-lg shadow-lg 
                z-[1001] min-w-max max-w-md"
            >
                <AddTaskCard
                    isOpenModel={isOpenModel}
                    setIsOpenModel={setIsOpenModel}
                />
            </motion.div>
        </>
    );
};

export default Modal;

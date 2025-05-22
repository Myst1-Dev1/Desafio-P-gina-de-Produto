'use client';

import React from "react"

interface ModalProps {
    maxWidth: String;
    isOpenModal: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({ maxWidth, isOpenModal, onClose, children }: ModalProps) {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };
    
    return (
        <>
            {isOpenModal &&
            <div onClick={handleBackdropClick} className="fixed top-0 left-0 right-0 w-full min-h-screen bg-black/45">
                <div className={`bg-white ${maxWidth} w-full p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    {children}
                </div>
            </div>
            }
        </>
    )
}
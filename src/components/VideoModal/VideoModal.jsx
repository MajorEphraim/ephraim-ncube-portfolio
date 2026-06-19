import { useState } from 'react';
import './VideoModal.css';

export default function VideoModal({open, setOpen, demo}) {

    return (
        <>
            {open && (
                <div
                    className="modal-overlay"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </button>

                        <div className="video-container">
                            <video
                                controls
                                autoPlay
                                playsInline
                                src={demo}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
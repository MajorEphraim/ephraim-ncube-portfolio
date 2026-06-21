import { useState } from 'react';
import './VideoModal.css';

export default function VideoModal({open, setOpen, demo, size}) {

    return (
        <>
            {open && (
                <div
                    className="modal-overlay"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={`${size === "Big" ? "modal-content-big" : "modal-content"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </button>
                        <div className={`${size === 'Big' ? 'video-container-big' : 'video-container'}`}>
                            <video
                                controls
                                autoPlay
                                muted
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
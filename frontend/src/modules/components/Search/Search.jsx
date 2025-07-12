import React from "react";
import { ImSearch } from "react-icons/im";
import { useState, useEffect } from 'react';
const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Xử lý phím tắt Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Hàm ngăn sự kiện click lan truyền
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Nút search bình thường */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full p-4 bg-white"
                >
                    <ImSearch />
                </button>
            )}

            {/* Overlay và thanh search khi mở */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    onClick={handleOverlayClick}
                >
                    <div className="relative w-[500px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-4 bg-[#ffeeee] rounded-full focus:outline-none"
                            autoFocus
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full p-4 bg-white"
                        >
                            <ImSearch />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export {Search}
import React, { useState, useEffect } from 'react'
        import useEditModal from '../hooks/useEditModal';

const EditModal: React.FC = () => {
    const editModal = useEditModal();
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleClick = (e: MouseEvent) => {
    //         if (editModal.isOpen) {
    //             setPosition({ x: e.clientX, y: e.clientY });
    //         }
    //     };

    //     window.addEventListener('click', handleClick);

    //     return () => {
    //         window.removeEventListener('click', handleClick);
    //     };
    // }, [editModal.isOpen]);

    if (!editModal.isOpen) return null;

    return ( 
        <div 
            className="fixed z-50"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -120%)'
            }}
        >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-lg font-bold mb-4 text-center">Sửa văn bản</h2> 
                <div className="flex justify-center"> 
                    <button className=" text-sm hover:bg-gray-200 py-2 px-4 rounded">
                        Nghiêng
                    </button>
                    <button className=" text-sm hover:bg-gray-200 py-2 px-4 rounded">
                        Đậm
                    </button>
                    <button className=" text-sm hover:bg-gray-200 py-2 px-4 rounded">
                        Gạch dưới
                    </button>
                    <button className=" text-sm hover:bg-gray-200 py-2 px-4 rounded">
                        Gạch Ngang
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal
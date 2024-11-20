import React, { useState } from 'react'; 
import useChangeAlbumModal from '../hooks/useChangeAlbumModal';

interface Album {
    id?: string;
    title: string;
    images: string[];
}

const AlbumModal: React.FC= ({  
}) => {
    const [album, setAlbum] = useState<Album>({ title: '', images: [] });
    const { isOpen, onClose, onChangeAlbum } = useChangeAlbumModal();
 

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newImages = Array.from(event.target.files).map(file => URL.createObjectURL(file));
            setAlbum({
                ...album,
                images: [...album.images, ...newImages],
            });
        }
    };

    const handleSave = () => {
        console.log(album.images);
        onChangeAlbum(album.images);
        onClose();
    };

    const handleRemoveImage = (index: number) => {
        setAlbum({ ...album, images: album.images.filter((_, i) => i !== index) });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                    {album.id ? 'Edit Album' : 'Create Album'}
                </h2>
                <div className='flex gap-2 justify-center items-center'>
                    <button
                        onClick={onClose}
                        className='cursor-pointer font-medium text-blue-600 border-[1px] border-blue-600 rounded-md px-2 py-1'
                    >
                        Thư viện ảnh
                    </button>
                    <label htmlFor="images" className='cursor-pointer font-medium text-blue-600 border-[1px] border-blue-600 rounded-md px-2 py-1'>
                        Tải ảnh
                    </label>
                </div>
                </div>
                <div className="p-4 space-y-4 h-[450px] overflow-y-auto">    
                        <input
                            type="file"
                            id="images"
                            name="images"
                            multiple
                            className='hidden'
                            onChange={handleImageUpload}
                        />
                        <div className="mt-2 grid grid-cols-4 gap-2">
                            {album.images.map((image, index) => (
                                <div key={index} className='relative group'>
                                    <img
                                        src={image}
                                        alt={`Image ${index}`}
                                        className="w-full h-32 object-cover rounded-md shadow-md transition-all duration-300 group-hover:blur-sm"
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2'>
                                        <button className='bg-black/80 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            Edit
                                        </button>
                                        <button onClick={() => handleRemoveImage(index)} className='bg-black/80 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            Remove
                                        </button> 
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
                <div className="flex justify-end gap-2 p-4 border-t">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Save
                </button>
                </div>
            </div>
        </div>
    );
};

export default AlbumModal;
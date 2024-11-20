import React, { useState, useEffect, useRef } from 'react';
import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';
import photo5 from '../assets/photo5.jpeg';
import photo6 from '../assets/photo6.jpeg';
import photo7 from '../assets/photo7.jpeg';
import useChangeAlbumModal from './hooks/useChangeAlbumModal';

const initialPhotos: string[] = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7
]; 


const PhotoAlbum: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [buttonEdit, setButtonEdit] = useState<boolean>(false);
    const { album, onOpen } = useChangeAlbumModal();
    const [photos, setPhotos] = useState<string[]>(initialPhotos);

    const ref = useRef<HTMLDivElement>(null);
    const handleMouseEnter = () => {
        setButtonEdit(true);
    }
    const handleMouseLeave = () => {
        setButtonEdit(false);
    }
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(()=>{
        if(album.length > 0){
            setPhotos(album);
        }
    },[album])

    return (
        <section className="snap-start scroll-m-0 min-h-screen bg-[#faf7f1]">
            <div className="max-w-6xl h-screen mx-auto px-4 py-8 bg-[#faf7f1] ">
                <h1 className="text-4xl font-serif text-center mb-8">Album ảnh</h1>
                {/* Main Image Display */}
                <div 
                    ref={ref}
                    className="relative aspect-[5/3] mb-4 shadow-lg rounded-lg hover:cursor-pointer border-transparent border-2 hover:border-yellow-400 z-10" 
                    onMouseDown={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {buttonEdit && <button className='absolute top-2 right-2 z-20 text-black bg-white px-3 py-4 rounded-md' onClick={()=>onOpen()}>Sửa</button>}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={photos[currentIndex]}
                            alt={`${currentIndex}`}
                            className="max-h-[70vh] w-auto object-contain"
                        />
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-5xl text-yellow-400 hover:-translate-x-5 transition-all"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-5xl text-yellow-400 hover:translate-x-5 transition-all"
                    >
                        &#8594;
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="relative">
                    <div className="overflow-x-auto pb-4">
                    <div className="flex gap-2 justify-center">
                        {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative flex-shrink-0 transition-all duration-200 ${
                            currentIndex === index 
                                ? 'ring-2 ring-yellow-500 ring-offset-2' 
                                : 'opacity-70 hover:opacity-100'
                            }`}
                        >
                            <img
                            src={photo}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-20 w-24 object-cover"
                            />
                        </button>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoAlbum;
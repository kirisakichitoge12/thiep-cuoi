import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import MobilePreview from "./MobilePreview ";
import DestopPreview from "./DestopPreview"; 
import useWidget from "../components/hooks/useWidget";

type TypeDisplay = "mobile" | "desktop" | "edit";

const Navbar: React.FC = () => { 
    const [display, setDisplay] = useState<TypeDisplay>("edit"); 
    const phoneRef = useRef<HTMLDivElement>(null);
    const {onOpen} = useWidget();

    const enterFullScreen = (type: TypeDisplay) => {
        if (phoneRef.current) {
            setDisplay(type);
            phoneRef.current.requestFullscreen().catch((err) => {
                console.error("Error entering fullscreen:", err);
            });
        }
    };
    
    const exitFullScreen = (type: TypeDisplay) => {
        if (document.fullscreenElement) {
            setDisplay(type);
            document.exitFullscreen().catch((err) => {
                console.error("Error exiting fullscreen:", err);
            });
        }
    };


    return (
        <div ref={phoneRef} className="bg-white">
            <nav className="flex items-center justify-between p-4 bg-white shadow-md">
                {/* Left Section */}
                <div className="flex items-center">
                    <button
                        onClick={() => exitFullScreen("edit")}
                        className="p-2 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4"> 
                    <button
                        onClick={() => enterFullScreen("mobile")}
                        className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-100">
                        Phone
                    </button>
                    <button
                        onClick={() => enterFullScreen("desktop")}
                        className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-100">
                        Desktop
                    </button> 
                </div>
            </nav>
            {
                display === "edit" && ( 
                    <Outlet/> 
                )
            }
            {
                display === "mobile" && ( 
                    <MobilePreview /> 
                )
            }
            {
                display === "desktop" && ( 
                    <DestopPreview /> 
                )
            }

        </div>
    );
};

export default Navbar;

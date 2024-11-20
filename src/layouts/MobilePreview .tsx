import React from "react"; 
import Banner from "../components/Banner";
import Invitation from "../components/Invitation";
import Biography from "../components/Biography";
import Story from "../components/Story";
import Journey from "../components/Journey";
import PhotoAlbum from "../components/PhotoAlbum";
import Timeline from "../components/Timeline";

 
const MobilePreview: React.FC = ( ) => {  
    return ( 
        <div className="flex justify-center items-center h-full">
            
        <div className="relative w-[390px] h-[700px] bg-transparent rounded-[60px] border-[14px] border-black overflow-hidden shadow-xl bottom-5">
            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-6 bg-transparent z-10">
                <div className="flex justify-between items-center px-6 py-1 text-white">
                <span>9:41</span>
                <span>namtuyen</span>
                <div className="flex items-center space-x-2">
                    <span>📶</span>
                    <span>🔋</span>
                </div>    
                </div>
            </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 z-10 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>

            {/* Content */}
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                    backgroundImage: `url('/path/to/your/background/image.jpg')`
                    }}
                >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="overflow-x-hidden scroll-smooth overflow-y-auto w-full">
                            <Banner isEdit={true} phoneScreen={true} />
                            <Invitation isEdit={true} phoneScreen={true} />  
                            <Biography isEdit={true} />       
                            <Story isEdit={true}/>
                            <Journey />
                            <PhotoAlbum  />
                            <Timeline />  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobilePreview;

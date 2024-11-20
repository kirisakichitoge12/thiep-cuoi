import React, { useState } from "react";
import banner from "../assets/banner.jpg"; 
import RichTextEditor from "./common/RichTextEditor";

interface TextProps{
    text1: string;
    text2: string;
    text3: string;
}

interface BannerProps{
    isEdit?: boolean;
    phoneScreen?: boolean;
}

const Banner: React.FC<BannerProps> = ({ isEdit = false, phoneScreen = false}) => {  
    const [text, setText] = useState<TextProps>({
        text1: "Chúng tôi cưới",
        text2: "Chú rể & Cô dâu",
        text3: "06 . 09 . 2022",
    });
    return (
        <section
            className="relative snap-start min-h-screen h-screen bg-cover bg-center w-full"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        > 
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 text-center text-white ">
                <RichTextEditor
                    disabled={isEdit}
                    className={`${phoneScreen ? "text-2xl" : "text-base sm:text-lg lg:text-3xl 2xl:text-4xl "} text-lg mx-auto w-full text-center bg-transparent`}
                    initialValue={text.text1}
                /> 

                <RichTextEditor
                    disabled={isEdit}
                    className={`${phoneScreen ? "text-4xl" : "text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl "} text-lg mx-auto w-full text-center pt-4 bg-transparent min-h-[100px]`}
                    initialValue={text.text2}
                /> 
                <RichTextEditor
                    disabled={isEdit}
                    className={`text-2xl md:text-4xl w-full text-center bg-transparent `}
                    initialValue={text.text3}
                />  
            </div>
        </section>
    );
};

export default Banner;

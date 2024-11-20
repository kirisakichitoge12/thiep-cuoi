import React, { useState } from "react"; 

interface TextProps{
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
}

const Invitation: React.FC<{isEdit?: boolean, phoneScreen?: boolean}> = ({isEdit = false, phoneScreen = false}) => { 
    const [text, setText] = useState<TextProps>({
        text1: "Tới dự hôn lễ của hai vợ chồng vào hồi",
        text2: "9:00",
        text3: "06 . 09 . 2069",
        text4: "Thứ Sáu",
        text5: "Số 4 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        text6: "Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi!",
    }); 
    return (
        <section className="snap-start scroll-m-0 min-h-screen w-full max-w-6xl mx-auto pt-10"> 
            <div className={`${phoneScreen ? "space-y-4 mt-40" : "space-y-10"} flex flex-col items-center  border-[1px]  mx-2 border-yellow-500 h-full text-center`}>
                {/* Header */}
                <h2 className={`${phoneScreen ? "text-2xl" : "text-4xl "} font-serif font-medium w-fit bg-white -translate-y-6`}>Trân trọng kính mời</h2>

                {/* Subtitle */}
                <input className={`${phoneScreen ? "text-2xl" : "text-4xl w-1/2"}  font-medium mb-14 outline-none bg-transparent border-transparent text-center`} 
                defaultValue={text.text1} onChange={(e) => setText({...text, text1: e.target.value})} />

                {/* Time */}
                <div className={`${phoneScreen ? "mb-4 w-1/2" : "mb-8 w-1/6"} border-y-[1px] border-yellow-500`}>
                    <input 
                        disabled={isEdit}
                        className={`${phoneScreen ? "text-3xl w-full" : "text-5xl w-1/2"} w-[200px] font-medium  py-2 outline-none bg-transparent text-center`} 
                        defaultValue={text.text2} onChange={(e) => setText({...text, text2: e.target.value})} 
                    />
                </div>

                {/* Date */} 
                <input 
                    disabled={isEdit}
                    className={`${phoneScreen ? "text-5xl w-full" : "text-9xl w-3/4"} mb-14 text-center font-medium text-yellow-600 outline-none bg-transparent border-transparent`}
                    defaultValue={text.text3} onChange={(e) => setText({...text, text3: e.target.value})}
                />

                {/* Day of the week */}
                <div className={`${phoneScreen ? "mb-4 w-1/2" : "mb-8 w-1/3"} border-y-[1px] border-yellow-500`}>
                    <input 
                        disabled={isEdit}
                        className={`${phoneScreen ? "text-3xl w-full" : "text-5xl w-1/2"} font-medium  py-2 outline-none bg-transparent text-center`}
                        defaultValue={text.text4} onChange={(e) => setText({...text, text4: e.target.value})}
                    />
                </div>

                {/* Address */} 
                <input 
                    disabled={isEdit}
                    className={`${phoneScreen ? "text-base w-full" : "text-2xl w-1/2"} text-blue-400 underline font-medium py-2 text-center outline-none bg-transparent`} 
                    defaultValue={text.text5} onChange={(e) => setText({...text, text5: e.target.value})} 
                />

                {/* Closing Note */} 
                <input 
                    disabled={isEdit}
                    className={`${phoneScreen ? "text-sm w-full" : "text-2xl w-1/2"} font-medium py-2 text-center outline-none bg-transparent`} 
                    defaultValue={text.text6} onChange={(e) => setText({...text, text6: e.target.value})} 
                />
            
            </div>
        </section>
    );
};

export default Invitation;

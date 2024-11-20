import React from 'react';
import journeyImage1 from '../assets/journey1.jpeg'
import journeyImage2 from '../assets/journey2.jpeg'

interface TimelineEvent {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
}

const Journey: React.FC = () => {
    const events: TimelineEvent[] = [
        {
            date: "01/01/2019",
            title: "Mốc thời gian kỷ niệm",
            description: "Ở đây các bạn có thể thỏa thích ghi lại những ngày kỷ niệm đặc biệt của riêng các bạn nè. Ví dụ như ngày đầu gặp nhau, ngày đầu trộm 'hun' má, lần đầu tiên cầm tay, valentine đầu tiên, lần đầu tiên cãi vã...",
            imageUrl: journeyImage1
        },
        {
            date: "01/01/2020",
            title: "Mốc thời gian kỷ niệm",
            description: "Vẫn là những ngày kỷ niệm đặc biệt thôi, nhưng thay đổi vị trí ảnh để tấm Thiệp cưới Online của bạn thêm hài hòa, xinh xắn hơn. À mà các bạn đừng quên đăng những bức ảnh đánh dấu kỷ niệm thật đẹp nhé ♥",
            imageUrl: journeyImage2
        }
    ];

    return (
        <section className="snap-start scroll-m-0 min-h-screen max-w-4xl mx-auto p-6 pt-14">
        <h1 className="text-3xl font-serif text-center mb-12">Chặng đường</h1>
        
        <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400"></div>
            
            {events.map((event, index) => (
                <div key={index} className="mb-16 relative">
                    {/* Date Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    </div>
                    
                    {/* Content Container */}
                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Image */}
                        <div className="w-1/2">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                            <img 
                                src={event.imageUrl} 
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>
                    
                        {/* Text Content */}
                        <div className="w-1/2 space-y-4">
                            <div className="text-lg font-medium">{event.date}</div>
                            <h3 className="text-xl font-serif">{event.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {event.description}
                            </p>
                        </div>
                         {/* Heart Endpoint */}
                    </div>
                </div>
                ))}
                <div className="text-4xl text-yellow-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5">
                    &#9829;
                </div>
            </div>
        </section>
    );
};

export default Journey;
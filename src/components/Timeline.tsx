import React from 'react'; 

interface TimelineEvent {
    title: string;
    time: string;
    date: string;
    location: string;
    address: string;
}

const Timeline: React.FC = () => {
    const events: TimelineEvent[] = [
        {
        title: "Ăn hỏi",
        time: "11:00",
        date: "01/09/2069",
        location: "Nhà gái",
        address: "Số 4 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy"
        },
        {
        title: "Rước dâu",
        time: "11:00",
        date: "06/09/2069",
        location: "Nhà trai",
        address: "47 Hàng Bông, Hàng Gai, Hoàn Kiếm"
        },
        {
        title: "Tiệc cưới",
        time: "11:00",
        date: "01/09/2069",
        location: "Nhà trai",
        address: "Số 4 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy"
        }
    ];

    return (
        <section className="snap-start scroll-m-0 min-h-screen bg-[#faf7f1] flex justify-center items-center pt-2">
            <div className="max-w-6xl h-screen px-4 py-8 bg-[#faf7f1]" >
                <h1 className="text-4xl font-serif text-center mb-4">Sự kiện</h1>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-yellow-400"></div>

                    {/* Events */}
                    <div className="relative space-y-16">
                        {events.map((event, index) => (
                            <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                            </div>

                            {/* Event Content */}
                            <div className={`${index % 2 === 0 ? 'ml-[calc(50%+2rem)]' : 'mr-[calc(50%+2rem)]'} relative`}>
                                <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                                <div className="space-y-1 text-gray-600">
                                <p className="text-lg">{event.time} - {event.date}</p>
                                <p className="font-medium">{event.location}</p>
                                <p>{event.address}</p>
                                </div>
                            </div>
                            </div>
                        ))}

                        {/* Heart Endpoint */}
                        <div className="text-4xl text-yellow-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5">
                            &#9829;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
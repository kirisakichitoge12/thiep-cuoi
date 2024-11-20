import React from 'react';
import manImage from '../assets/man.jpeg'
import womanImage from '../assets/woman.jpeg'

interface BiographyPerson {
    role: string;
    title: string;
    name: string;
    description: string;
    imageUrl: string;
}

const Biography: React.FC<{isEdit?: boolean}> = ({isEdit = false}) => {
    const people: BiographyPerson[] = [
        {
            role: "Chú rể",
            title: "Tên chú rể",
            name: "Nguyễn Văn A",
            description: "Mời chú rể giới thiệu về bản thân ở đây nha. Chú rể có thể trả lời những câu hỏi cơ bản như tên đầy đủ là gì nè, bao tuổi rùi, nhà ở đâu, sở thích, ưu điểm, khuyết điểm...",
            imageUrl: manImage
        },
        {
            role: "Cô dâu",
            title: "Tên cô dâu",
            name: "Nguyễn Thị B",
            description: "Đã có phần giới thiệu chú rể rồi thì đương nhiên là phải có phần giới thiệu cô dâu chứ phải không ạ? Tương tự như chú rể, cô dâu có thể giới thiệu đôi nét về bản thân mình ở đây nha.",
            imageUrl: womanImage
        }
    ];

    return (
        <div className="snap-start scroll-m-0 min-h-screen max-w-6xl mx-auto p-6">
            {people.map((person, index) => (
                <div 
                    key={index} 
                    className={`flex items-center gap-12 mb-20 ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                {/* Image Section */}
                <div className="w-1/2">
                    <div className="relative h-[40vh] overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-1/2 space-y-6">
                    <div className="space-y-4">
                    <h2 className="text-xl font-serif">{person.role}</h2>
                    <h3 className="text-4xl font-serif text-yellow-500">{person.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {person.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Nhớ là hãy chọn những bức ảnh thật đẹp để ở phần này nha, vì phần đầu thiệp rất quan trọng mà phải không ♥
                    </p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Biography;
import React from 'react'
import storyImage from '../assets/story.jpeg'
import RichTextEditor from './common/RichTextEditor'

const Story: React.FC<{isEdit?: boolean}> = ({isEdit = false}) => {
    return (
        <section className="snap-start scroll-m-0 min-h-screen h-full p-6 max-w-6xl mx-auto pt-10">
            <div className="text-center">
                <h1 className="text-3xl font-serif text-center mb-2">Câu chuyện</h1>
                <img src={storyImage} className='mx-auto max-w-[1000px] w-full h-full object-cover' alt="Story" />
                <RichTextEditor
                    disabled={isEdit}
                    className="text-lg mx-auto w-full text-center pt-4 bg-transparent min-h-[100px]"
                    initialValue="Đoạn này tụi mình đã chuẩn bị sẵn một ảnh để các cặp đôi có thể lựa chọn bức ảnh mà mình yêu thích nhất và viết đôi dòng để kể về chúng. Nếu mọi người không muốn kể lể quá nhiều thì có thể lựa chọn Xóa widget này để lựa chọn các widget khác thay thế nha. Chúng mình còn rất nhiều các widget xinh xắn khác để dâu-rể lựa chọn cho tấm thiệp của mình đó. ♥"
                />
            </div>
        </section>
    )
}

export default Story
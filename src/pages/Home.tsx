import React, { useRef, useState } from 'react' 
import useWidget from '../components/hooks/useWidget'
import Banner from '../components/Banner';
const Home:React.FC = () => {
    const { widgets } = useWidget();
    const ref = useRef<HTMLDivElement>(null);
    const [addWidget, setAddWidget] = useState<boolean>(false);
    const {onOpen} = useWidget();
    const handleMouseEnter = () => {
        setAddWidget(true);
    }
    const handleMouseLeave = () => {
        setAddWidget(false);
    }
    const handleAddWidget = (index: number) => {
        onOpen(index);
    }
    return ( 
        <div className='relative snap-y snap-mandatory overflow-y-auto max-h-screen overflow-x-hidden'>
            <Banner />
            {widgets.map((widget, index) => (
                <div key={index} className='relative'> 
                    {React.createElement(widget)}
                    <div ref={ref} className='absolute top-0 right-0 w-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className={`${addWidget ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 flex flex-col items-center justify-center`}>
                            <div className='w-full h-[2px] bg-yellow-400 translate-y-5'></div>
                            <button onClick={()=>handleAddWidget(index)} className={`hover:bg-yellow-500 hover:text-white border-2 border-yellow-600 bg-white text-yellow-600 p-2 rounded-md px-4 z-10`}>+ Thêm widget</button>
                        </div>
                    </div>
                </div>
            ))  }

            <div className='snap-start scroll-m-0 min-h-screen mt-10 max-w-6xl mx-auto'>
                <div className='grid grid-cols-2'>
                    <div className='p-10 flex flex-col gap-8'>
                        <h2 className='text-5xl font-sans'> Bạn sẽ đến chứ?</h2>
                        <p>Widget cuối cùng này không thể di chuyển, đây sẽ là nơi để khách mời xác nhận xem họ có đến đám cưới của bạn không bằng cách điền Tên - SĐT và Phản hồi tham dự ở bên cạnh. Đôi lời gửi cho khách mời ở đây để "dụ" họ đến chung vui với đám cưới của bạn nha. Đừng quên nhắc mọi người click vào "phong bì đỏ" Mừng Cưới ở góc dưới bên tay phải để mừng cưới online ngay cho các bạn nhé ♥</p>
                    </div>
                    <div className='p-10'>
                        <h2 className='text-2xl font-sans mb-4'>Thông tin của bạn</h2>
                        <form className='flex flex-col gap-4'>
                            <input type="text" placeholder='Tên' className='p-2 border-[1px] border-yellow-300 rounded-md' />
                            <input type="text" placeholder='SĐT' className='p-2 border-[1px] border-yellow-300 rounded-md' />
                            <p>Bạn sẽ tham dự?</p>
                            <div className='flex gap-4'>
                                <label htmlFor="checkbox" className='text-gray-500 border-[1px] border-yellow-300 rounded-md p-2'>Có</label>
                                <label htmlFor="checkbox" className='text-gray-500 border-[1px] border-yellow-300 rounded-md p-2'>Không</label>
                            </div>

                            <button type='submit' className='bg-yellow-400 text-white p-2 rounded-md'>Gửi</button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Home
import React, { useState } from 'react'
import Modal from './Modal' 
import widget1 from '../../assets/widget1.png';
import widget2 from '../../assets/widget2.png';
import widget3 from '../../assets/widget3.png';
import widget4 from '../../assets/widget4.png';
import widget5 from '../../assets/widget5.png';
import widget6 from '../../assets/widget6.png';
import useWidget from '../hooks/useWidget';

const widgetList = [widget1, widget2, widget3, widget4, widget5, widget6];
type WidgetNumber = 1 | 2 | 3 | 4 | 5 | 6;
const WidgetModal: React.FC = () => {
    const {isOpen, onClose, onAddWidget} = useWidget();
    const [isWidget, setIsWidget] = useState<WidgetNumber>(1); 

    const handleConfirm = () => {
        onAddWidget(isWidget);
        onClose();
    }
    return (
        <Modal
            title='Chọn widget'
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleConfirm}
        > 
            <div className='flex items-center justify-center space-x-4'>
                <div className='flex flex-col items-center space-y-4 w-1/3'>
                    <button 
                        onClick={() => setIsWidget(1)} 
                        className={`${isWidget === 1 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Địa điểm</button>
                    <button 
                        onClick={() => setIsWidget(2)} 
                        className={`${isWidget === 2 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Tiểu sử</button>
                    <button 
                        onClick={() => setIsWidget(3)} 
                        className={`${isWidget === 3 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Câu truyện</button>
                    <button 
                        onClick={() => setIsWidget(4)} 
                        className={`${isWidget === 4 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Hành trình</button>
                    <button 
                        onClick={() => setIsWidget(5)} 
                        className={`${isWidget === 5 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Album ảnh</button>
                    <button 
                        onClick={() => setIsWidget(6)} 
                        className={`${isWidget === 6 ? 'bg-blue-600 text-white' : 'text-gray-600'} px-4 py-2 w-full text-gray-600 border-[1px] text-start border-gray-600 rounded-lg hover:bg-blue-600 hover:text-white`}>Sự kiện</button>
                </div>
                <div className='w-2/3 shadow-lg rounded-lg'>
                    {widgetList.map((widget, index) => (
                        <img src={widget} alt="widget" key={index} className={`w-full h-full object-cover ${isWidget === index + 1 ? 'block' : 'hidden'}`} />
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default WidgetModal
import Banner from '../components/Banner'
import Invitation from '../components/Invitation'
import Biography from '../components/Biography'
import Story from '../components/Story'
import Journey from '../components/Journey'
import PhotoAlbum from '../components/PhotoAlbum'
import Timeline from '../components/Timeline'

const DestopPreview: React.FC = () => {
    return ( 
        <div className='relative snap-y snap-mandatory overflow-y-auto max-h-screen overflow-x-hidden'>
            <Banner edit={true} />
            <Invitation  />  
            <Biography />       
            <Story/>
            <Journey />
            <PhotoAlbum />
            <Timeline />  
        </div>
    )
}

export default DestopPreview
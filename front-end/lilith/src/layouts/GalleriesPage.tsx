import { Galleries } from "../components/Galleries";

export const GalleriesPage: React.FC<{currentGallery: any, setCurrentGallery: any}> = (props) => {
    const {currentGallery, setCurrentGallery} = props;
    return (
        <>      
        <Galleries currentGallery={currentGallery} setCurrentGallery={setCurrentGallery}/> 
        </> 
    );
}
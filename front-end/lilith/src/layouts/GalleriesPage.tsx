import { Galleries } from "../components/Galleries";

export const GalleriesPage: React.FC<{currentGallery: string, setCurrentGallery: React.Dispatch<React.SetStateAction<string>>}> = (props) => {
    const {currentGallery, setCurrentGallery} = props;
    return (
        <>      
        <Galleries currentGallery={currentGallery} setCurrentGallery={setCurrentGallery}/> 
        </> 
    );
}
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SocialMedia } from "../components/SocialMedia";

export const Contact = () => {
    return(
        <div>
            <Navbar />                
            <ContactForm />            
            <Footer />
        </div> 

    );
}
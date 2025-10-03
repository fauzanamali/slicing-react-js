import Footer from "../Footer/Footer";
import Page from "../Page/Page";
import Header from "../Navbar";

const PagesLayouts = (props) => 
    {
        return (
            <>
                <Header />
                {props.children}
                <Footer />
                
            </>
        )
    };

export default PagesLayouts;
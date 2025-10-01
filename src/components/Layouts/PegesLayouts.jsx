import Footer from "../Footer";
import Page from "../Page";
import Header from "../Header";

const PagesLayouts = (props) => 
    {
        return (
            <>
                <Header />
                {props.children}
                <Page />
                <Footer />
                
            </>
        )
    };

export default PagesLayouts;
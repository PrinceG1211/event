import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function ShowVenue() {
  useScript('/assets/bundles/echart/echarts.js');
    return (<>
        <Header></Header>
       
       <Footer></Footer>
    </>);
}

export default ShowVenue;
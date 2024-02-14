import Header from "./includes/header";
import Footer from "./includes/footer";
import useScript from "./utils/useScript";

function ShowVendorCategory() {
  useScript('/assets/bundles/echart/echarts.js');
    return (<>
        <Header></Header>
   
       <Footer></Footer>
    </>);
}

export default ShowVendorCategory;
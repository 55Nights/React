import react from "react";
import reactDom from "react-dom";
import "./index.css"


function BioList() {
    return(
       <section>
         <Bio/>
         <Bio/>
         <Bio/>
       </section>
    );
}
function Bio(){99999
 return(
    <section>
<Img/>
<Name/>
    </section>
 );
}
const Img=()=><img src="./img/kai.jpg" alt="image of kyrie irving"/>;
const Name=()=>{<p>Kyrie irving</p>}
reactDom.render(<BioList/>,document.getElementById('root'));
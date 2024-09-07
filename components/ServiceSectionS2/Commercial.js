import React from "react";
import locations from "../../api/locations";
import Link from "next/link";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Commercial = (props) => {
    return(
        <div className="wpo-service-wrap wpo-service-slide">
            <div className="row">
                {locations.slice().map((location, srv) => (
                    <div className="col-lg-2 col-md-3 col-6" key={srv}>
                        <div className="wpo-service-item">
                            {/* <div className="wpo-service-icon"> */}
                                {/* <div className="icon">
                                    <Image src={location.img} alt=""/>
                                </div> */}
                            {/* </div> */}
                            <div className="wpo-service-text">
                                <h2><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${location.place}`}>{location.place}</Link></h2>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Commercial;
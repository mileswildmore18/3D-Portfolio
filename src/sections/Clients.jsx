import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear from My Clients
                <div className="client-container">
                    {clientReviews.map(({id, name, review, img, position}) =>(
                        <div key={id} className="client-review">
                            <div>
                                <p className="text-white font-light">{review}</p>
                                <div className="client-content">
                                    <div className="flex gap-3">
                                        <img src={img} alt={name} className="w-12 h-12 rounded-full"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </h3>
        </section>
    )
}
export default Clients

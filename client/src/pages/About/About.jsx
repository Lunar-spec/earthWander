import curiosity from "../../assets/nature-animate.svg";
import cherry from "../../assets/cherry-blossom-animate.svg";
import ecosystem from "../../assets/ecosystem-animate.svg";

import "./About.scss";

const About = () => {
    return (
        <div className="about">
            <img src={curiosity} alt="curiosity" className="curiosity" data-aos='zoom-out' data-aos-duration="400" loading="eager" />
            <p data-aos='fade-left' data-aos-duration="500">
                <h1>About EarthWander🌍</h1>
                <span>
                    At EarthWander, we are on a mission to redefine the
                    way people travel by promoting sustainable and eco-friendly adventures.
                    Our platform empowers responsible travelers to explore the world while
                    preserving its natural beauty and cultural diversity.
                </span>
                <h1>Our Vision</h1>
                <span>
                    We envision a future where travel becomes a force for good - where every
                    journey fosters environmental conservation, supports local communities,
                    and enhances cross-cultural understanding. By making eco-friendly travel
                    accessible and enjoyable, we aim to create a global community of conscious
                    explorers dedicated to protecting our planet.
                </span>
                <h1>Explore Responsibly</h1>
                <span>
                    At EarthWander, we believe that travel should leave a positive impact on the
                    places we visit. That&apos;s why we handpick destinations known for their
                    sustainable practices and immersive eco-friendly activities. From pristine
                    eco-reserves to community-based tourism initiatives, we offer a wide array
                    of options that prioritize the well-being of both travelers and the
                    environment.
                </span>
            </p>
            <img src={cherry} alt="cherry" className="cherry" data-aos='zoom-out' data-aos-duration="400" loading="lazy" />
            <p data-aos='fade-right' data-aos-duration="500">
                <h1>Curated Green Accommodations</h1>
                <span>
                    Rest easy knowing that our curated green accommodations meet rigorous eco-friendly standards. Whether
                    it&apos;s eco-lodges nestled in the heart of nature or eco-conscious hotels
                    committed to reducing their carbon footprint, we ensure that your stay
                    contributes to a greener and more sustainable world.
                </span>
                <h1>Responsible Tours and Activities</h1>
                <span>
                    Discover the wonders of the world responsibly with our
                    selection of responsible tour operators. Our partners share our commitment
                    to low-impact travel, focusing on authentic experiences that support local
                    economies and promote wildlife conservation.
                </span>

                <h1>Offset Your Carbon Footprint</h1>
                <span>
                    We understand that travel has an environmental footprint.
                    That&apos;s why we offer a carbon footprint calculator that estimates the
                    emissions generated during your journey. Take control of your impact by
                    contributing to certified carbon offset projects that counterbalance your
                    travel&apos;s environmental effects.
                </span>
            </p>
            <img src={ecosystem} alt="ecosystem" className="ecosystem" data-aos='zoom-out' data-aos-duration="400" loading="lazy" />
            <p data-aos='fade-left' data-aos-duration="500">
                <h1>Journey with Purpose</h1>
                <span>
                    Every adventure can be an opportunity to give back. Through our EarthWander initiatives,
                    you can participate in meaningful community projects and conservation
                    efforts during your travels. Together, we can leave a lasting, positive
                    legacy in the places we explore.
                </span>
                <h1>Join the EarthWander Community </h1>
                We invite you to join our community of EarthWanderers who believe in mindful
                travel and sustainable exploration. By choosing EarthWander, you embark on
                a transformative journey, not only discovering the beauty of the world but
                also nurturing it for generations to come.

                <span>
                    Embrace the spirit of
                    adventure, embark on a voyage of responsibility, and let your wanderlust
                    make a difference. Together, we can journey towards a brighter and more
                    sustainable future.
                </span>

                <h1 style={{ textAlign: 'center', marginTop: '7rem' }} data-aos='fade-up'>Welcome to EarthWander🌍 - where travel meets purpose.</h1>
            </p>
        </div>
    );
};

export default About;

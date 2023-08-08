
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { useState } from "react"

import faq from '../../../assets/faq-animate.svg'
import mob from '../../../assets/mobile-marketing-animate.svg'
import visual from '../../../assets/visual-data-animate.svg'
import './Faq.scss'


const Faq = () => {

    const [active, setActive] = useState(null);

    const handleShow = (id) => {
        if (active === id) {
            return setActive(null)
        }
        setActive(id)
    }

    const data = [
        {
            id: 1,
            question: "What is EarthWander🌍?",
            answer: "EarthWander is a sustainable travel platform dedicated to promoting eco-friendly and responsible travel experiences worldwide."
        },
        {
            id: 2,
            question: "How does EarthWander promote sustainability in travel?",
            answer: "EarthWander curates eco-conscious destinations, green accommodations, and responsible tour operators to encourage low-impact and community-supporting travel."
        },
        {
            id: 3,
            question: "Are the accommodations listed on EarthWander verified for eco-friendliness?",
            answer: "Yes, we carefully vet and list accommodations that adhere to eco-friendly practices and demonstrate a commitment to sustainable tourism."
        },
        {
            id: 4,
            question: "Can I offset my carbon footprint while using EarthWander?",
            answer: "Absolutely! EarthWander offers a carbon footprint calculator and options to offset your travel emissions through certified carbon offset projects."
        },
        {
            id: 5,
            question: "How can I contribute to local communities through my travels with EarthWander?",
            answer: "By booking tours and activities with our responsible tour operators, you directly support local economies and community development initiatives."
        },
        {
            id: 6,
            question: "Is my personal information secure on EarthWander?",
            answer: "Yes, EarthWander takes data privacy seriously. We employ industry-standard security measures to protect your information."
        },
        {
            id: 7,
            question: "Can I save my favorite destinations on EarthWander?",
            answer: "Yes, you can create a personalized profile on EarthWander to save and organize your favorite eco-friendly destinations for future reference."
        },
        {
            id: 8,
            question: "Are EarthWander's recommended activities suitable for families?",
            answer: "Yes, EarthWander provides a diverse range of family-friendly eco-adventures, ensuring that sustainable travel is accessible to everyone."
        },
    ]

    return (
        <div className='faq'>
            <div className='header'>
                Frequently Asked Questions
            </div>
            <div>
                {data.map((faq, i) => (
                    <div className='faq-content' key={i}>
                        <div className="shown">
                            <div className='question' onClick={() => handleShow(i)}>
                                {faq.question}
                                {/* {active === i ? <AiOutlineCaretUp className='icon' /> : <AiOutlineCaretDown className='icon' />} */}
                                {active === i ? <MdExpandLess className='icon' /> : <MdExpandMore className='icon' />}
                            </div>
                            <div className={active === i ? 'answer active' : 'answer'}>{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={faq} className='faq-svg' alt="gif" height={450} width={450} />
            <img src={mob} className='mob-svg' alt="gif" height={500} width={450} />
            <img src={visual} className='data-svg' alt="gif" height={500} width={500} />
        </div>
    )
}

export default Faq
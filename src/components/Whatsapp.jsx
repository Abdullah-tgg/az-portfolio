import whatsappIcon from '../assets/images/icons/icon-whatsapp.png'

const Whatsapp = () => {
    return (
        <>
            <span className='floating-whatsapp-btn'>
                <a href='https://wa.link/jczjvd' target='_blank' rel='noopener noreferrer'>
                    <img src={whatsappIcon} alt="" />
                </a>
            </span>
        </>
    )
}

export default Whatsapp

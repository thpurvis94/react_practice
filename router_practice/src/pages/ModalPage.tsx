import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

const ModalPage: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = ():void => {
        setShowModal(false)
    }
    
    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia, urna ut aliquet volutpat, diam tellus volutpat mauris, quis pulvinar felis sapien sed dolor. Nulla non mattis nulla. Quisque ut interdum sapien. Etiam fringilla neque eu nulla imperdiet condimentum. Donec euismod venenatis leo id ornare. Duis hendrerit quis nisl nec viverra. Nullam vitae odio sed erat hendrerit bibendum. Nullam consectetur dapibus lectus, quis porttitor ex accumsan at. Ut vulputate orci euismod nunc mollis venenatis. Cras cursus nunc id felis elementum, mollis laoreet nisi mollis. Phasellus suscipit elit ac dictum mattis. Pellentesque sollicitudin mi nec leo fermentum accumsan. Donec vel malesuada diam, vitae venenatis tortor.
            </p>
            
        </div>
    )
}
export default ModalPage
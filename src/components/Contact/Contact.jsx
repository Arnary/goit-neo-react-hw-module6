import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import css from "./Contact.module.css"

const Contact = ({contact, handleDelete}) => {
    return (
        <>
            <p><span className={css.icon}><IoPersonSharp /></span>{contact.name}</p>
            <p><span className={css.icon}><FaPhone /></span>{contact.number}</p>
            <button className={css['delete-btn']} onClick={() => handleDelete(contact.id)}>Delete</button>
        </>
    )
};

export default Contact;

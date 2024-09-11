import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const searchInput = useSelector(selectNameFilter);
    const contacts =  !searchInput ? useSelector(selectContacts) : useSelector(selectContacts).filter(contact => contact.name.toLowerCase().includes(searchInput.toLowerCase()));;
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={css.card}>
                        <Contact
                            handleDelete={handleDelete}
                            contact = {contact}
                        />
                   </li>
               )
           })}
        </ul>
    )
};

export default ContactList;

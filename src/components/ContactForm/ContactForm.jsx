import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const schemaValidation = Yup.object().shape({
    name: Yup.string().min(3, "*Too short!").max(50, "*Too Long!").required("*Required"),
    number: Yup.string().min(3, "*Too short!").required("*Required"),
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const userNameId = useId();
    const userNumberId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
        actions.resetForm();
    }

    return (
        <div className={css["form-container"]}>
            <Formik
                initialValues={{
                    name: "",
                    number: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={schemaValidation}
            >
                <Form className={css.form}>
                    <label htmlFor={userNameId}>Name</label>
                    <Field name="name" id={userNameId}></Field>
                    <ErrorMessage name="name" className={css.error} component="span"/>
                    <label htmlFor={userNumberId} className={css["form-label"]}>Number</label>
                    <Field name="number" id={userNumberId}></Field>
                    <ErrorMessage name="number" className={css.error} component="span"/>
                    <button className={css["form-button"]} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    )
};

export default ContactForm;

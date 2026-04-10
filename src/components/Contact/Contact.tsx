import ContactContainer from "./ContactContainer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="my-container flex-col">
      <ContactContainer />
      <ContactForm />
    </section>
  );
};

export default Contact;

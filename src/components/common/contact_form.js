const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form-group">
        <label htmlFor="from-address">Contact person name</label>
        <input
          required="required"
          type="text"
          className="form-control"
          id="from-address"
        />
      </div>
    </div>
  );
};

export default ContactForm;

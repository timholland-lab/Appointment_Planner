import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    
    <>
      <form onSubmit={handleSubmit}>
          <label>
          <input 
            type="text"
            name = "name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder = "Contact Name"
          />
          </label>
          <label>
          <input 
            type="tel"
            name = "phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            placeholder = "Contact Phone (###-###-####)"
            pattern = "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"

          />
          </label>
          <label>
          <input 
            type="email"
            name = "email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder = "Contact email"

          />
          </label>
          <input type="submit" value="Add Contact"/>
          

        </form>

    </>

  );
};

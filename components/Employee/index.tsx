import React from "react";
interface Props {
  name: string;
  position: string;
  image?: string;
  email: string;
  phone?: string;
}
const Employee: React.FC<Props> = ({ name, image, position, email, phone }) => {
  return (
    <figure className="employee">
      <img src={image ? image : "#"} alt={name} />
      <span className="employee-name">{name}</span>
      <span className="employee-position">{position}</span>
      <a className="employee-email" href={`mailto:${email}`}>{email}</a>
        {phone && 
          <a className="employee-phone" href={`tel:${phone}`}>{phone}</a>
        }
    </figure>
  );
};
export default Employee;

import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';

export const Contact = ({ val: { name, number } }) => {
  return (
    <div>
      <p>
        <IoPerson /> {name}
      </p>
      <p>
        <BsFillTelephoneFill /> {number}
      </p>
      <button>Delete</button>
    </div>
  );
};

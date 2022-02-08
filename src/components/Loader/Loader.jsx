import "./styles.css";
import { Audio } from  'react-loader-spinner'

export default function Loader() {
  return (
    <Audio
      heigth="200"
      width="200"
      color='red'
      ariaLabel='loading'
    />
  );
}



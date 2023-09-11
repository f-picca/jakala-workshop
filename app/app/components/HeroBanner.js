import Image from "next/image";
import styles from "../styles/heroBanner.module.css";

function HeroBanner(props) {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h2>{props.content.title}</h2>
      <Image
        src={props.content.image.url}
        width={250}
        height={130}
        alt={props.content.image.description}
      />
      <br />
      <br />
      <p>{props.content.text}</p>
    </div>
  );
}

export default HeroBanner;

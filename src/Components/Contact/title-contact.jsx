import Image from "../../assets/title-contact.png";
// import Form from "./form.jsx";

const TitleForm = () => {
  return (
    <div>
      <div
        loading="lazy"
        className="image-contact-by-sarah-cuisine sm:py-16 sm:px-24 lg:px-8"
      >
        <span className="flex justify-center">
          <img
            loading="lazy"
            data-aos="fade-left"
            src={Image}
            alt=""
            className="mt-20 sm:mt-7"
          />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;

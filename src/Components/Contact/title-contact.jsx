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
            data-aos="fade-right"
            src={Image}
            alt=""
            className="px-16 mt-24 mb-20 sm:mb-10 sm:mt-4"
          />
        </span>
      </div>
    </div>
  );
};

export default TitleForm;

const Section = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-center">
        <svg
          className="relative bottom-7"
          width="748"
          height="46"
          viewBox="0 0 748 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="748" height="46" rx="20" fill="white" />
        </svg>
      </div>
      <div className="flex justify-center ">
        <h2 className="font-extrabold text-2xl sm:text-4xl">
          <span className="text-pink font-sans-recursive">{`Traiteur de tous types d'évènements`}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-black text-sm sm:text-xl tracking-wide">
          INGRÉDIENTS BIO OU DE QUALITÉS
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col sm:flex-row mt-5">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            {`Originaire de Meaux, Sarah est une excellente cusinière. Elle partage sa cuisine au quotidien,
            avec beaucoup de passion et de rigueur. L'excellence, l'hygiène, l'assiduité font partie de ses valeurs qu'elle prône.
            Elle crée des expériences uniques qui reflètent l'identité de ses services et ses 
            objectifs. Choisissez les formules qui conviennent à vos besoins.`}
          </p>

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-black font-sans-serif w-80 m-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            {`Originaire de Meaux, Sarah est une excellente cusinière. Elle partage sa cuisine au quotidien,
            avec beaucoup de passion et de rigueur. L'excellence, l'hygiène, l'assiduité font partie de ses valeurs qu'elle prône.
            Elle crée des expériences uniques qui reflètent l'identité de ses services et ses 
            objectifs. Choisissez les formules qui conviennent à vos besoins..`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;

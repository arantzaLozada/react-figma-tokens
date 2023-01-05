export function Home() {
  return (
    <>
      <div className="bg-body body-max">
        <section className="section-container margin-responsive">
          <h1 className="text-title mb-md padding-top">
            ¡Hola👋, soy Arantza! soy diseñador UX/UI
          </h1>
          <p className="text-body mb-xl">
            Soy Diseñador UI, actualmente trabajo como Diseñador UX/UI en
            EDteam, creando mejoras para la plataforma, antes trabajé creando
            e-commerce para una empresa uruguaya. Mi herramienta principal y
            favorita de diseño es Figma.
          </p>
          <h2 className="text-h2">Suscríbete</h2>
          <p className="text-body mb-lg">
            Déjame tu correo y entérate de lo nuevo en mi blog.
          </p>
          <div className="input-button">
            <input
              className="send-mail"
              type="text"
              placeholder="hola@tucorreo.com"
            />

            <button className="button">¡Suscríbete ahora!</button>
          </div>
          <footer>
            <a
              className="links"
              href="https://www.linkedin.com/in/davidrivadeneyra/"
            >
              Linkedin
            </a>
            <a
              className="links"
              href="https://www.instagram.com/therivadeneyra/"
            >
              Instagram
            </a>
          </footer>
        </section>
      </div>
    </>
  );
}

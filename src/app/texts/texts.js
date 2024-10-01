const title = "Taller Creativo Quinche";
const slogan = "Creatividad, sostenibilidad y comunidad en cada diseño";
const email = "tcreativoq@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3043422537";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "Taller Creativo Quinche es un espacio de creación artística y artesanal comprometido con la sostenibilidad y el desarrollo comunitario. Nos dedicamos a la confección de productos únicos utilizando materiales reutilizados y técnicas artesanales, como el tejido en crochet y el diseño gráfico aplicado a papelería, accesorios y ropa.\n" +
            "\n" +
            "Uno de nuestros pilares fundamentales es el trabajo en común-unidad, ya que creemos que el arte es una herramienta poderosa para fomentar la colaboración, el crecimiento personal y el bienestar colectivo. Nuestros talleres de artes plásticas, tejido, diseño, música, artes escénicas y expresión corporal, están diseñados para promover el desarrollo del ser, creando espacios donde las personas pueden expresarse libremente, explorar su creatividad y descubrir su potencial.\n" +
            "\n" +
            "Además, en Taller Creativo Quinche ponemos un énfasis especial en la conexión con la naturaleza. Nos inspiramos en el entorno natural para nuestros diseños y utilizamos materiales reciclados y sostenibles en la mayoría de nuestros productos. Esta conexión es fundamental no solo en nuestra práctica artística, sino también en nuestra misión de promover un estilo de vida responsable y consciente con el medio ambiente."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Taller Creativo Quinche",
            p2: slogan,
        },
        address: "Dirección del negocio",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100069534288916",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;

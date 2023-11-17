using Portfolio_3.Models;

namespace Portfolio_3.Servicios
{
    public class ServicioDatosIntegrado : IServiciosDatos
    {
        List<Proyecto> Lista = new List<Proyecto>() {
                new Proyecto
                {
                Titulo = "Amazon",
                Descripcion = "E-Commerce realizado en ASP.NET Core",
                Link = "https://amazon.com",
                ImagenURL = "/img/amazon.png"
                },
                new Proyecto
                {
                Titulo = "New York Times",
                Descripcion = "Página de noticias en React",
                Link = "https://nytimes.com",
                ImagenURL = "/img/nyt.png"
                },
                new Proyecto
                {
                Titulo = "Reddit",
                Descripcion = "Red social para compartir en comunidades",
                Link = "https://reddit.com",
                ImagenURL = "/img/reddit.png"
                },

            };
        Persona persoona = new Persona
        {
            Nombre = "Rodrigo",
            Edad = 21,
            Imagen = "img/yo.jpg"
        };

        public List<Proyecto> GetDatos()
        {
            return Lista;
        }

        public Persona GetPersona()
        {
            return persoona;
        }
    }
}

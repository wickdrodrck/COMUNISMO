using Portfolio_3.Models;
namespace Portfolio_3.Servicios
{
    public interface IServiciosDatos
    {
        public List<Proyecto> GetDatos();

        public Persona GetPersona();
    }
}

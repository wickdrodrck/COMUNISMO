using Microsoft.AspNetCore.Mvc;
using Portfolio_3.Models;
using Portfolio_3.Servicios;
using System.Diagnostics;

namespace Portfolio_3.Controllers
{
    public class HomeController : Controller
    {
        private readonly IServiciosDatos ds2;
        public HomeController(IServiciosDatos ds)
        {
           this.ds2 = ds;
        }

        public IActionResult Index()
        { 

            HomeViewModel m = new HomeViewModel
            {
                P = ds2.GetPersona(),
                Proyectos = ds2.GetDatos()
            };
                return View(m);

        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
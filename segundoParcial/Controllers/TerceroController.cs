using Microsoft.AspNetCore.Mvc;
using Logica;
using Datos;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Http;

namespace segundoParcial.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TerceroController : ControllerBase
    {
        private readonly TercerosService _terceroService;

        public TerceroController(EntidadContext context)
        {
            _terceroService = new TercerosService(context);
        }

        [HttpGet("{identificacion}")]
        public async Task<ActionResult<Tercero>> BuscarTercero(string identificacion)
        {
            var response = _terceroService.BuscarTercero(identificacion);
            if(response.Error){
                ModelState.AddModelError("Mensaje",response.Mensaje);
            }
            if (!ModelState.IsValid)
            {
                var details = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(details);
            }
            return Ok(response.Tercero);
        }
    }
}
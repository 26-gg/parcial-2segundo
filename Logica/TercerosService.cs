using System;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class TercerosService
    {
        private readonly EntidadContext _context;

        public TercerosService(EntidadContext context)
        {
            _context = context;
        }

        public class ConsultarTerceroResponse
        {
            public ConsultarTerceroResponse(Tercero tercero)
            {
                Error = false;
                Tercero = tercero;
            }
            public ConsultarTerceroResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Tercero Tercero { get; set; }
        }

        public ConsultarTerceroResponse BuscarTercero(string identificacion)
        {
            try
            {
                var tercero = _context.Terceros.Where(c=>c.NumIdentificacion == identificacion).FirstOrDefault();
                if (tercero == null)
                {
                    return new ConsultarTerceroResponse("El tercero no se encuentra registrado");
                }
                return new ConsultarTerceroResponse(tercero);
            }
            catch (Exception e)
            {
                
                return new ConsultarTerceroResponse("Error en la Aplicacion: " + e.Message);
            }
            
        }
    }
}

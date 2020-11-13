using System;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class EntidadContext : DbContext
    {
        public EntidadContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<Tercero> Terceros { get; set; }
    }
}

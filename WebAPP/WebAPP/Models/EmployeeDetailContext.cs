using Microsoft.EntityFrameworkCore;

namespace WebAPP.Models
{
    public class EmployeeDetailContext : DbContext
    {
        public EmployeeDetailContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<EmployeeDetail> EmployeeDetails { get; set; }
    }
}

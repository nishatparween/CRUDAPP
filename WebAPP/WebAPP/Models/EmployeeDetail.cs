using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebAPP.Models
{
    public class EmployeeDetail
    {
        [Key]
        public int EmployeeID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string EmployeeName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        public string Department { get; set; } = "";

        //mm/yy
        [Column(TypeName = "nvarchar(10)")]
        public string JoiningDate { get; set; } = "";
    }
}

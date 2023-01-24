using Microsoft.EntityFrameworkCore;
using dictionaryEnglish.models;

namespace dictionaryEnglish.Data{
    public class DataContext: DbContext{
        public DataContext(DbContextOptions<DataContext> options): base(options){

        }
        public DbSet<Words> Word { get; set; }
    }
}
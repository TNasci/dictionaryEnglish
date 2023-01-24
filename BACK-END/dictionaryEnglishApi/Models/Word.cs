using System.ComponentModel.DataAnnotations;

namespace dictionaryEnglish.models{
    public class Words{
        [Key]
        public int Id { get; set; }
        public string  Word { get; set; }
        public string Meaning { get; set; }
        public string Translation { get; set; }
        public string WordType { get; set; }
        public DateTime dateRegister { get; set; }
    }
}
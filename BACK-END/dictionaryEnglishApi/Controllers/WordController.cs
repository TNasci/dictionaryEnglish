using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using dictionaryEnglish.models;
using dictionaryEnglish.Data;

namespace dictionaryEnglish.Controllers
{
    [ApiController]
    [Route("words")]
    public class WordController : Controller
    {
        [HttpPost]
        [Route("/register")]
        public async Task<ActionResult<Words>> Post([FromServices] DataContext context, [FromBody] Words body)
        {
            if (!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            var word = new Words(){
                Word = body.Word,
                Meaning = body.Meaning,
                Translation = body.Translation,
                WordType = body.WordType,
                dateRegister = body.dateRegister,
            };
            context.Word.Add(word);
            await context.SaveChangesAsync();

            return body;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Words>>> List([FromServices] DataContext context){
            var words = await context.Word.ToListAsync();

            return words;
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<ActionResult<Words>> Delete([FromServices] DataContext context, int id){
            var word = await context.Word.FirstOrDefaultAsync(word => word.Id == id);
            if (word == null) return NotFound();

            context.Word.Remove(word);
            await context.SaveChangesAsync();

            return Ok(word);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minimize.Models;
using Minimize.Repositories;
namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        IGoalRepository goalRepository;
        public TrackerController(IGoalRepository goalRepository)
        {
            this.goalRepository = goalRepository;
        }
        // GET: api/Tracker
        [HttpGet]
        public IEnumerable<Goal> Get()
        {
            return goalRepository.GetAll().ToArray();
        }

        // GET: api/Tracker/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Tracker
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Tracker/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

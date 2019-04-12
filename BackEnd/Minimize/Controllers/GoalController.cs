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
    public class GoalController : ControllerBase
    {
        IGoalRepository goalRepository;

        public GoalController(IGoalRepository goalRepository)
        {
            this.goalRepository = goalRepository;
        }
        // GET: api/Goal
        [HttpGet]
        public IEnumerable<Goal> Get()
        {
            var model = goalRepository.GetAll().ToArray();
            return model;
        }

        // GET: api/Goal/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Goal
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Goal/5
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

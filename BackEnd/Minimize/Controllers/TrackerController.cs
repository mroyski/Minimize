using Microsoft.AspNetCore.Mvc;
using Minimize.Models;
using Minimize.Repositories;
using System.Diagnostics;
using System.Linq;

namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrackerController : ControllerBase
    {
        private readonly IGoalRepository goalRepository;
        private MinimizeContext db;
        public TrackerController(IGoalRepository goalRepository)
        {
            this.goalRepository = goalRepository;
            db = new MinimizeContext();
        }


        // GET: api/Tracker/5
        [HttpGet("{id}", Name = "Get")]
        public Tracker Get(int id)
        {
            //  var goal = goalRepository.GetById(id);
            //desire to remove
            var goal = db.Goals.Single(g => g.GoalId == id);
            //var goal = db.Goals.Single(g => g.GoalId == id);

            var posts = goal.Category.Posts;

            var expectedInGoal = goal.NumberOfItems;
            var currentTotal = posts.Sum(p => p.RemovedItems);


            var percentageComplete = ((float)currentTotal /expectedInGoal)*100;


            return new Tracker()
            {             
                PercentageComplete = percentageComplete,
                GoalTotalItemsToRemove = expectedInGoal,
                GoalTotalItemsActuallyRemoved = currentTotal
            };
        }

    }


}

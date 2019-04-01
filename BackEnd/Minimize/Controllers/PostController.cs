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
    public class PostController : ControllerBase
    {
        PostRepository postRepo;

        public PostController(PostRepository postRepo)
        {
            this.postRepo = postRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Post>> GetAll()
        {
            return Ok(postRepo.GetAll());
        }
    }
}
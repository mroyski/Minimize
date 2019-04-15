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
    public class UserController : ControllerBase
    {
        IUserRepository userRepo;

        public UserController(IUserRepository userRepo)
        {
            this.userRepo = userRepo;
        }
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var model = userRepo.GetById(id);
            return model;

        }

        [HttpPost]
        public void Post([FromBody] User  user)
        {
           
            userRepo.Add(user);

        }
    }
}
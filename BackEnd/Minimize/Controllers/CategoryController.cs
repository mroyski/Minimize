using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Minimize.Models;
using Minimize.Repositories;

namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryRepository categoryRepo;

        public CategoryController(ICategoryRepository categoryRepo)
        {
            this.categoryRepo = categoryRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Category>> GetAll()
        {
            return Ok(categoryRepo.GetAll()); 
        }

        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var model = categoryRepo.GetById(id);
            return model;
        }
    }
}
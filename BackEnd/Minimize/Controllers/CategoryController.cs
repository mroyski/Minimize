using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Minimize.Models;

namespace Minimize.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        CategoryController categoryRepo;

        public CategoryController(CategoryController categoryRepo)
        {
            this.categoryRepo = categoryRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Category>> GetAll()
        {
            return categoryRepo.GetAll(); 
        }
    }
}
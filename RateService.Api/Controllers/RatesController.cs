using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RateService.Api.Models;
using RateService.Api.Helper;
using Microsoft.AspNetCore.Cors;

namespace RateService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class RatesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Rates>> GetRates(int startDateIndex)
        {
            return GenerateCoinData.GenerateRatesData();
        }

        [HttpGet("getrate")]
        public ActionResult<Rates> GetRatesData()
        {
            var rng = new Random();
            return GenerateCoinData.GenerateRatesData(rng.Next(0, 4))[0];            
        }
    }
}
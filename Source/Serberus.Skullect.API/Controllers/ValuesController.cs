using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;

namespace Serberus.Skullect.API.Controllers
{
	[Route("api/[controller]")]
	public class ValuesController : Controller
	{
		// GET api/values
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return new[] { "value1", "value2" };
		}

		[HttpGet]
		[Route("customers")]
		public HttpResponseMessage GetCustomers()
		{
			return new HttpResponseMessage
			{
				StatusCode = HttpStatusCode.OK,
				Content = new StringContent("something")
			};
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody]string value)
		{
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
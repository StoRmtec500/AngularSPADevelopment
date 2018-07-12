using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{
    [Route("api/[controller]")]
    public class AccountsController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly VouchersDBContext ctx;

        public AccountsController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IEnumerable<BalanceAccount> Get()
        {
            return ctx.BalanceAccounts;
        }

        [HttpGet("{id}")]
        public BalanceAccount Get(int id)
        {
            return id == 0 ? new BalanceAccount() : ctx.BalanceAccounts.FirstOrDefault(v => v.ID == id);
        }

        [HttpPost]
        public ActionResult Post([FromBody]BalanceAccount value)
        {
            ctx.BalanceAccounts.Add(value);
            ctx.SaveChanges();
            return Ok(value);
        }

        [HttpPut]
        public ActionResult Put([FromBody]BalanceAccount value)
        {
            ctx.BalanceAccounts.Attach(value);
            ctx.Entry(value).State = EntityState.Modified;
            ctx.SaveChanges();
            return Ok(value);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var v = Get(id);
            if (v != null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
            return Ok();
        }
    }
}
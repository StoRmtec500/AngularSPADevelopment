using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;

namespace Vouchers.Auth
{
    [Route("api/[controller]")]
    public class AuthApiController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpGet]
        [Route("getWinUser")]
        public string Get()
        {
            var identity = HttpContext.User.Identity;
            var wi = identity as WindowsIdentity;
            return identity is WindowsIdentity
                ? identity.Name
                : "Not Authenticated";
        }

        [HttpGet]
        [Route("getSimpleJwt")]
        public string GetJwtToken()
        {
            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim("issuer", "http://www.vouchers.net"));
            claims.Add(new Claim("username", this.Get()));
            claims.Add(new Claim("isAdmin", "true"));
            string token = CreateToken(claims);
            return token;
        }

        public static string CreateToken(List<Claim> claims)
        {
            Chilkat.Jwt jwt = new Chilkat.Jwt();

            //  Build the JOSE header
            Chilkat.JsonObject jose = new Chilkat.JsonObject();
            //  Use HS256.  Pass the string "HS384" or "HS512" to use a different algorithm.
            bool success = jose.AppendString("alg", "HS256");
            jose.AppendString("typ", "JWT");

            //  Now build the JWT claims (also known as the payload)
            Chilkat.JsonObject jsonClaims = new Chilkat.JsonObject();
            //success = jsonClaims.AppendString("issuer", "http://www.vouchers.net");
            //success = jsonClaims.AppendString("aud", "http://www.vouchers.net");

            //  Set the timestamp of when the JWT was created to now.
            int curDateTime = jwt.GenNumericDate(0);
            jsonClaims.AddIntAt(-1, "iat", curDateTime);

            //  Set the "not process before" timestamp to now.
            jsonClaims.AddIntAt(-1, "nbf", curDateTime);

            //  Set the timestamp defining an expiration time (end time) for the token
            //  to be now + 1 hour (3600 seconds)
            jsonClaims.AddIntAt(-1, "exp", curDateTime + 3600);

            //  Produce the smallest possible JWT:
            jwt.AutoCompact = true;

            string strJwt = jwt.CreateJwt(jose.Emit(), jsonClaims.Emit(), "Pa$$w0rd");

            return strJwt;
        }

        [HttpGet]
        [Route("usefbauth")]
        public string UseFbAuth()
        {
            return HttpContext.User.Identity is WindowsIdentity identity
                ? identity.Name
                : "Not Authenticated";
        }

    }
}
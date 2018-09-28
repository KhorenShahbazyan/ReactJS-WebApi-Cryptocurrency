using System;

namespace RateService.Api.Models
{
    public class Rates 
    {
        /// <summary>
        /// Crypto Coin Full Name
        /// </summary>
        public string Coin { get; set; }       

        /// <summary>
        /// Crypto Coin Logo
        /// </summary>
        public string CoinLogo { get; set; }

        /// <summary>
        /// Crypto Coin Synbol
        /// </summary>
        public string CoinSynbol { get; set; }

        /// <summary>
        /// Rate DateTime
        /// </summary>
        public DateTime RateDateTime { get; set; }

        /// <summary>
        /// Price (by USD, BTC or ETH) of Crypto currency
        /// </summary>
        public double Price { get; set; }

        /// <summary>
        /// Quantity of Crypto currency
        /// </summary>
        public double Quantity { get; set; }

        /// <summary>
        /// TotalVolume of Crypto currency
        /// </summary>
        public double TotalVolume { get; set; }

        /// <summary>
        /// MarketCap of Crypto currency
        /// </summary>
        public double MarketCap { get; set; }

    }
}

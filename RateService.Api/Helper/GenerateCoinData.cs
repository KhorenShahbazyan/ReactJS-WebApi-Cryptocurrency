using RateService.Api.Models;
using System;
using System.Collections.Generic;

namespace RateService.Api.Helper
{
    public static class GenerateCoinData
    {      
       
        public static List<Rates> GenerateRatesData(int? index = null)
        {
            var rng = new Random();
            List<Rates> rates = new List<Rates>();

            rates.Add(new Rates
            {
                Coin = "BitCoin",
                CoinLogo = "btc.png",
                CoinSynbol = "BTC",
                MarketCap = rng.NextDouble(45326.251, 56041.024),             
                Price = rng.NextDouble(6200.01, 6806.32),
                Quantity = rng.NextDouble(5623, 57641),
                RateDateTime = DateTime.Now.AddMinutes(rng.Next(0, 60)),
                TotalVolume = rng.NextDouble(10623.02, 15764.47)
            });

            rates.Add(new Rates
            {
                Coin = "Ethereum",
                CoinLogo = "eth_logo.png",
                CoinSynbol = "ETH",
                MarketCap = rng.NextDouble(1, 56041),
                Price = rng.NextDouble(220, 260),
                Quantity = rng.NextDouble(5623, 57641),
                RateDateTime = DateTime.Now.AddMinutes(rng.Next(0, 60)),
                TotalVolume = rng.NextDouble(10623, 15764)
            });

            rates.Add(new Rates
            {
                Coin = "Bitcoin Cash",
                CoinLogo = "bitcoin-cash.png",
                CoinSynbol = "BCH",
                MarketCap = rng.NextDouble(1, 56041),
                Price = rng.NextDouble(405.1, 425.6),
                Quantity = rng.NextDouble(5623, 57641),
                RateDateTime = DateTime.Now.AddMinutes(rng.Next(0, 60)),
                TotalVolume = rng.NextDouble(10623, 15764)
            });

            rates.Add(new Rates
            {
                Coin = "XRP",
                CoinLogo = "xrp.png",
                CoinSynbol = "XRP",
                MarketCap = rng.NextDouble(1, 56041),
                Price = rng.NextDouble(1.15, 2.35),
                Quantity = rng.NextDouble(5623, 57641),
                RateDateTime = DateTime.Now.AddMinutes(rng.Next(0, 60)),
                TotalVolume = rng.NextDouble(10623, 15764)
            });

            rates.Add(new Rates
            {
                Coin = "Dash",
                CoinLogo = "dash.png",
                CoinSynbol = "DASH",
                MarketCap = rng.NextDouble(1, 56041),
                Price = rng.NextDouble(172.15, 185.35),
                Quantity = rng.NextDouble(5623, 57641),
                RateDateTime = DateTime.Now.AddMinutes(rng.Next(0, 60)),
                TotalVolume = rng.NextDouble(10623, 15764)
            });

            if (index == null || index >= rates.Count)
            {
                return rates;
            }
            else
            {
                return new List<Rates>
                {
                    rates[index.Value]
                };
            }

        }
    }
}

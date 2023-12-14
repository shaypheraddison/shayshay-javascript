# create a dictionary and loop over each item in the dictionary
world_series_winners = {
    "2023": "Rangers",
    "2022": "Astros",
    "2021": "Braves",
    "2020": "Dodgers",
    "2019": "Nationals",
    "2018": "Red Sox"
}
for winner in world_series_winners:
    print(winner)
    print(world_series_winners[winner])

# create a dictionary and loop over each item while mutating the value for each key.
world_series_losers = {
    "2023": "Rangers",
    "2022": "Astros",
    "2021": "Braves",
    "2020": "Dodgers",
    "2019": "Nationals",
    "2018": "Red Sox"
}
for year, losers in world_series_losers.items():
    if losers == "Rangers":
        world_series_losers.update({"2023": "Diamondbacks"})
    elif losers == "Astros":
        world_series_losers.update({"2022": "Phillies"})
    elif losers == "Braves":
        world_series_losers.update({"2021": "Astros"})
    elif losers == "Dodgers":
        world_series_losers.update({"2020": "Rays"})
    elif losers == "Nationals":
        world_series_losers.update({"2019": "Astros"})
    elif losers == "Red Sox":
        world_series_losers.update({"2018": "Dodgers"})
    
print(world_series_losers)
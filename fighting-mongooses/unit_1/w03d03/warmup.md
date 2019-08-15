# Analyzing a Teams Performance

Given an array that looks like the one below, write functions that analyze the team's performance over the season:

```javascript
const games = [
    { result: "Win", score: [45, 27] } , 
    { result: "Loss", score: [28, 19] } ,
    { result: "Win", score: [32, 12] } , 
    { result: "Win", score: [14, 7] } ,
    { result: "Win", score: [52, 28] } , 
    { result: "Loss", score: [12, 10] } ,
    { result: "Loss", score: [35, 17] } , 
    { result: "Win", score: [28, 24] } ,
    { result: "Win", score: [35, 20] } , 
    { result: "Loss", score: [9, 6] } 
]
```

0. totalRecord(arr) => return an object with how many wins and losses the team had
1. averagePoints(arr) => calculate the average points the team scored. Pay close attention to whether they won or lost that game!
2. biggestWinStreak(arr) => calculate the number of games largest winning streak the team had. As a bonus, also calculate their average points scored during the streak.
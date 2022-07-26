const requestURL = 'https://foodapi.calorieking.com/v1'

fetch(requestURL).then((res) => {
    return res.json()
})
.then((FoodData) => {
    console.log(FoodData)
})
.catch((error) => {
    console.log(error)
})
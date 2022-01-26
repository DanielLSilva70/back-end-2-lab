const houses = require('./db.json')

let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        console.log(houses)
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(house => +house.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {id, address, price, imageUrl} = req.body
        let newHouse = {
            id: globalId,
            address: address,
            price: price,
            imageUrl: imageUrl
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = houses.findIndex(house => +house.id === +id)
        if(houses[index].prices <= 10000 && type  === 'minus'){
            houses[index].prices = 0
            res.status(200).send(houses)
        } else if (type === 'plus'){
            houses[index].prices += 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].prices -= 10000
            res.status(200).send(houses)
        } else {
            res.status(400).send(houses)
        }
       
    } 

}


import express from "express"
import http from "http"
import cors from "cors"
import axios from "axios"

const app= express()
const httpServer= http.createServer(app)
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({
    extended: true
}))

app.get("/nearly-place", async (req, res)=> {
    const ress= await axios({
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.latitude}%2C${req.query.longtitude}&radius=1500&type=restaurant&key=AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0`,
        method: "get"
    })  
    const result= await ress.data
    return res.status(200).json(result)
})

httpServer.listen(4000, ()=> console.log("server run port 4000"))

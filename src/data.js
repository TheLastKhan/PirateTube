export const API_KEY = 'AIzaSyD9OPYI8B81qT5ZU6yQw-aLou3FToYyoUU';

export const value_converter = (value) => {
    if(value>=1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000) {
        return Math.floor(value/1000)+"K";
    }
    else {
        return value;
    }
}

//AIzaSyAa-IeVspXq54Myte8fh9hdOkjpGD3tQks

// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors({
// origin:"http://localhost:5173"
// }));

// app.get("/", (req, res) => {
//     res.json({name:"Code",Subscribe:true});
// });

// app.listen(5173, () => console.log("Server is listening on 5173"))


let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true}))

let districtsLists = [
    {id: 1, name: 'Nyabihu',province: 'Weatern'},
    {id: 2, name: 'Gasabo',province: 'Kigali'},
    {id: 4, name: 'Nyarugenge',province: 'Kigali'},
    {id: 4, name: 'Kicukiro',province: 'Kigali'}
]
app.get('/api/districts', (req,res) => {
    res.send(districtsLists)
})
app.post('/api/districts', (req, res )=> {
    districtsLists.push(req.body)
    res.status(201);
    res.json(districtsLists);
    res.send(districtsLists);
})
app.delete('/api/districts/:id',(req, res)=> {
   const id = req.params.id;
   const newDistrict = districtsLists.filter((district)=>district.id != id)

   if (!newDistrict) {
     res.send(404).send("Account not found")
   }else{
       res.send(newDistrict)
   }
})
app.put('/api/districts/id:', (req, res)=>{
    const id= req.params.id;
    const body = req.body;
    const district = districtsLists.find((district)=> district.id === id);
    const index = accounts.indexOf(district)

    if (!district) {
        res.status(500).send("Account not found!")
    }else{
        const updatedDistrict = {...account, ...body}
        accounts[index] = updatedDistrict;
        res.send(updatedDistrict);
    }
})

port = 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
const getUser =  (req, res)=>{
  res.json({messege : "Hello Update"})
}
const getAll =  (req, res)=>{
  res.json({messege : "Hello all update"})
}
const getOne =  (req, res)=>{
  res.json({messege : "Hello Get one"})
}
const getAnother =  (req, res)=>{
  res.json({messege : "Hello Get Another"})
}
module.exports = { getUser, getAll, getOne, getAnother };

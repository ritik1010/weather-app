const request=require('request')
const geocode=require('./utils/geocode')
const weather=require('./utils/weather')


geocode("bhopal",(error,data)=>{
     
     const weather=require('./utils/weather')
if(error){console.log('error',error)}
     
 else{    console.log('location:',data.placename)  
}
     weather(data,(error,temp)=>{
          console.log("temperature is ",temp,"F")
     })
}

)

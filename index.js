let data =  {
    first_name: "Greg",
    last_name: "Salama",
    date_of_birth: "1990-06-01",
    email: "salamander90@gmail.com"
}


let newVal = ''
let newDAta = {}

for( const [key ,val] of Object.entries(data)){

    console.log(val);

    for(let i; i < val.length; i++){
        if(i > 2){
            val[i] = '*';
           console.log(val)
            
 }


    }


}

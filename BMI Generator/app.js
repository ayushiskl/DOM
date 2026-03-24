const form = document.querySelector('form');

//if we had fetch the height and weight values here,
// it'll give an empty value.Hence we take it in inside the function.

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const height = (parseInt(document.querySelector('#height').value));     //getting value
    const weight = (parseInt(document.querySelector('#weight').value));
    const result = document.querySelector('#results');

    //applying checks...
    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height.'
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight.'
    }
    else{
        //applying formulae

        const bmi = (weight / ((height*height)/10000)).toFixed(2);   //upto 2 decimal places...

        //show the result:
        result.innerHTML = `<span>${bmi}</span>`;

        // if(bmi < 18.6){
        //     result.innerHTML = "You are under-weight."
        // }
        // else if(24.9 >= bmi >= 18.6){
        //     result.innerHTML = "Normal-Range."
        // }
        // else if(bmi > 24.9){
        //     result.innerHTML = "You are over-weight."
      //  }

    }



})
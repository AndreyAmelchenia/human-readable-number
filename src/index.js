module.exports = function toReadable (number) {
    const numberOne = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const numberTwo = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const numberThree = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred']
    if (number < 10){
        for (let i = 0; i< numberOne.length; i++ ){
            if(i === number){
                console.log(numberOne[i])
                return numberOne[i];
            }
        }
    } else if (number >= 10 && number < 20 ) {
        for (let i = 0; i< numberTwo.length; i++ ){
            if((i+10) === number){
                console.log(numberTwo[i])
                return numberTwo[i];
            }
        }
    } else if (number >= 20 && number <= 99 ) {
        const arr = [];
        str = '';
        while(0 != number){
                let one = number%10; 
                arr.push(one);
                number = (number-number%10)/10;      
        }
        

        for (let i = 0; i< numberThree.length; i++ ){
            if((i+2) === arr[1]){
                str = numberThree[i];
            }
        }
        if (arr[0] != 0){
            str += ' ';
            for (let i = 0; i< numberOne.length; i++ ){
                if(i === arr[0]){
                    str += numberOne[i];
                }
            }
        }
        console.log(str)
        return str;
    } else if (number >= 100) {
        str = '';
        const arr = [];
        while(0 != number){
                let one = number%10; 
                arr.push(one);
                number = (number-number%10)/10;      
        }




        //if(arr[0] != 0 && arr[1] != 0){
            for (let i = 0; i< numberOne.length; i++ ){
                if(i === arr[2]){
                    str += numberOne[i];
                    str += ' ';
                    str += numberThree[8];
                }
            }
        // } else {
        //     str += numberThree[8];
        // }



        
        if (arr[1]<=1){
            if (arr[1] === 1){
                if(arr[1] != 0){
                    str += ' ';
                    for (let i = 0; i< numberTwo.length; i++ ){
                        if(i === arr[0]){
                        str += numberTwo[i];
                        }
                    }
                } 
            } else {
                
                for (let i = 1; i< numberOne.length; i++ ){
                    if(i === arr[0] ){
                        str += ' ';
                        str += numberOne[i];
                    }
                }
            }
        } else {
            if (arr[1] != 0){
                str += ' ';
                for (let i = 0; i< numberThree.length; i++ ){
                    if((i+2) === arr[1]){
                        str += numberThree[i];
                    }
                }
                
            }
            if (arr[0] != 0){
                str += ' ';
                for (let i = 0; i< numberOne.length; i++ ){
                    if(i === arr[0]){
                        str += numberOne[i];
                    }
                }
            }
        }            
        return str;
    }
}
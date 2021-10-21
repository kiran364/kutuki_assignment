
const arr = [9, 6, 1, 6, 2];

//explanation
//constraints
   // we can only cut the hight of tree on add 


// arr[9, 6, 1, 6, 2]
//     0  1  2  3  4 ----> index

// (with even index)

//     even index tree hight > odd index tree hight
//     arr[0] > arr[1] < arr[2] > arr[3] < arr[4]

// arr[9, 6, 1] -----> here even index tree height arr[2] is not > odd index tree arr[1]
//     0  1  2  

// diff =  arr[1] - arr[2] + 1     -------->( + 1 for make tree hight less than adjacent tree) 
//      =    6    -  1     + 1
//      =    5   +    1
// diff = 6 -----> number of cut on tree hight     (1 cut = number - 1)

// arr[1] = arr[1] - diff

// arr[9, 0, 1, 6, 2]  ---------> new array with 6 cut 
//     0  1  2  3  4 -------> here also even index tree hight arr[2] is not > odd index tree arr[3]

//     so again 

// diff = arr[3] - arr[1] + 1
//      =   6    -  1     + 1
//      =   5 + 1
// diff = 6

// arr[3] = arr[3] - diff

// here we get zik zak tree
// arr[9, 0, 1, 0, 2]   ------> total 12 cut of tree 


// (with odd index)

// arr = [9, 6, 1, 6, 2];
//        0  1  2  3  4 --------->index

// odd index tree hight > even index tree hight

// arr[0] < arr[1] > arr[2] < arr[3] > arr[4]

//     [9, 6, 1]
//      0  1  2

// here odd index tree hight arr[1] is not > even index tree hight arr[0]

// diff = arr[0] - arr[1] + 1
//      =   9    -   6    + 1
// diff =  3 + 1

// arr[0] = arr[0] - diff

// [5, 6, 1, 6, 2]----------> here we get zik zak array of tree with 4 cut 


// last min (even index cut, odd index cut)

// ans = 4




const zikZak = (array) => {
    let len = array.length;
    let even = 0;
    let odd = 0;
    let array1 = [];
    for(let i=0; i<len; i++){
         array1[i] = array[i];
    }
    
    for(let i=0; i<len; i++){
        if(i+1 < len){
            if(i%2==0){
                if(array[i] <= array[i+1]){
                    let diff = array[i+1] - array[i];
                    even += diff + 1;
                    array[i+1] = array[i+1] - (diff+1);
                }
            }else{
                if(array[i] >= array[i+1]){
                    let diff = array[i] - array[i+1];
                    even += diff + 1;
                    array[i] = array[i] - (diff + 1);
                }
            }
        }
    }
 
    for(let i=0; i<len; i++){
        if(i+1 < len){
            if(i%2==0){
                if(array1[i] >= array1[i+1]){
                    let diff = array1[i] - array1[i+1];
                    odd += diff + 1;
                    array1[i] = array1[i] - (diff+1);
                }
            }else{
                if(array1[i] <= array1[i+1]){
                    let diff = array1[i+1] - array1[i];
                    odd += diff + 1;
                    array1[i+1] = array1[i+1] - (diff + 1);
                }
            }
        }
    }
    return Math.min(even, odd);

}
console.log('minimum number of cut is', zikZak(arr), 'to make zik zak array');





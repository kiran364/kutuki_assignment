const arr = [9, 6, 1, 6, 2];

// Same but not extra space to improve space complexity
// and not modifiy the array 

const zikZak = (arr) => {
    let len = arr.length;
    let even = 0;
    let odd = 0;        
    let first = -1;
    let second = -1;
    for(let i=0;i<len;i++)
    {
        if(i+1<len)
        {   
            if(first==-1 && second ==-1)
            {
                first = arr[i];
                second = arr[i+1];
            }
            else
            {
                second = arr[i+1];
            }
            if(i%2==0)
            {
                if(first<=second)
                {
                    let diff = second-first;
                    even += diff+1;
                    second = second - (diff+1);
                }
            }
            else
            {
                if(first>=second)
                {
                    let diff = first-second;
                    even += diff+1;
                    first = first - (diff+1);
                }
            } 
        }
        first = second;
    }

    first = -1;
    second = -1;
    for(let i=0;i<len;i++)
    {
        if(i+1<len)
        {
            if(first==-1 && second ==-1)
            {
                first = arr[i];
                second = arr[i+1];
            }
            else
            {
                second = arr[i+1];
            }
            if(i%2==0)
            {
                if(first>=second)
                {
                    let diff = first-second;
                    odd += diff+1;
                    first = first - (diff+1);
                }                    
            }
            else
            {
                if(first<=second)
                {
                    let diff = second-first;
                    odd += diff+1;
                    second = second - (diff+1);
                }
            }
        }
        first = second;
    }
    return Math.min(even,odd);
}

console.log('minimum number of cut is', zikZak(arr), 'to make zik zak array');

var permute = function(nums) {
    let res = [[nums.shift()]]
    for (let each of nums){
        const temp_res = []
        for (let i=0; i<res.length; i++){
            const temp = [...res[i]]
            for (let j=0; j<=temp.length; j++){
                const temp_arr = [...temp]
                temp_arr.splice(j, 0, each)
                temp_res.push(temp_arr)
            }
        }
        res = temp_res
    }
    return res
};

permute([1,2,3,4,5,6,7,8,9])
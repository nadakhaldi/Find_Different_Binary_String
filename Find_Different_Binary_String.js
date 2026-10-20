function findDifferntBinaryString(nums){
    let result ="";

    for(let i=0;i < nums.length;i++){
        result += nums[i][i] === "0" ? "1" :"0";
    }

    return result;
}

//for testing
console.log(findDifferntBinaryString(["0"]));
console.log(findDifferntBinaryString(["11","01"]));
console.log(findDifferntBinaryString(["111","001","101"]));
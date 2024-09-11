//let arr_nums=[1,2,3,4,5]
//console.log(arr_nums.length)
/*
arr=Array(1,2,3,4,5)
console.log(arr)
empty=Array(2,6)
console.log(empty)*/

//fruits = new Array("apple","mango","banana")
//console.log(fruits) 
//function take input an array and give sum of an array

/**function sum_arr(arr){
    sum = 0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(sum_arr([1,2,3,4,5,6]))**/
//arr =[1,75,11,5,9,2,7];
//arr.sort((a,b)=> b-a)
//console.log(arr.reverse())

arr=[3,4,2,[3,7,[8,9,[2,7,9,1,[23,4,21]]]]]
console.log(arr.flat(3))
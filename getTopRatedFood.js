'use strict';

const fs = require('fs');
const https = require('https');
const axios = require('axios');
var _ = require('lodash');


// import fetch from 
// const fetch = require ('node-fetch');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getTopRatedFoodOutlets' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/food_outlets?city=<city>&page=<pageNumber>
 *
 * The function is expected to return an array of strings.
 * 
 * The function accepts only city argument (String).
 */

async function getTopRatedFoodOutlets(city) {
        let result ='';
        let maxRate =0;
        let resultData=[];
        let page=1
        while(true){
            let res = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`)
            let total = res.data.total 
            let end = res.data.page* res.data.per_page
            if(total < end){
                break
            }else{
                resultData.push(...res.data.data )
            }
            page++ 
        }
        for(let item of resultData){
            if(item['user_rating'].average_rating >=maxRate ){
                if(item['user_rating'].average_rating >maxRate) {result=''}
                maxRate=item['user_rating'].average_rating;
                result+= item.name+'\n';
            }
        }
        return result
}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const city = readLine();

    const result = await getTopRatedFoodOutlets(city);
    // console.log(result,'rest')
    // const json = await  JSON.stringify(result.json());
    ws.write(result);
    // ws.write(result.join('\n') + '\n');

    ws.end();
}

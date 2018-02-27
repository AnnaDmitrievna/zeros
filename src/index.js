module.exports = function getZerosCount(number) {

        let zerosCounter = 0;
        for (let i = 5; number/i >= 1; i *= 5){
            zerosCounter += Math.floor(number/i);
        }
    return zerosCounter;
};

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = []
    for(let i = 0 ; i < accounts.length ; i++){
        let accWealth = accounts[i].reduce((acc , account) => {
            return acc + account
        }, 0)
        wealth.push(accWealth)
    }
    return Math.max(...wealth)
    
};
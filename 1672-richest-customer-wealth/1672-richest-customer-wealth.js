/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const wealth = accounts.reduce((acc , account) => {
            let accountWealth = account.reduce((per , cur) => per + cur, 0)
            acc.push(accountWealth)
            return acc
        }, [])

    return Math.max(...wealth)
    
};
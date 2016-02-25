"use strict";
var transferService = (function () {
    function publicRegister(person, account, balance){
        if(balance < 0) {
            throw "balance < 0";
        }
        person._accounts.push(account);
        account._isActivated = true;
        account._balance = balance;
    }

    function publicTransfer(accountFrom, accountTo, value){
        if(!accountFrom._isActivated || !accountTo._isActivated){
            throw "account not activated";    
        }
        if(accountFrom._balance < value){
            throw "insufficient funds in the account";
        }
        accountFrom._balance -= value;
        accountTo._balance += value;
        var now = new Date();
        accountFrom._lastOperation = now.toLocaleDateString();
        accountTo._lastOperation = now.toLocaleDateString();
        console.log(accountFrom._accountName + " transfer " + value + " to " + accountTo._accountName);
    }

    function publicGetPersonAccounts(person){
        return person._accounts;
    }

    return {
        register: publicRegister,
        transfer: publicTransfer,
        getPersonAccounts: publicGetPersonAccounts

    };
})();
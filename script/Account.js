"use strict";
function Account(accountName, person){
    this._accountName = accountName;
    this._person = person;
    this._lastOperation = "";
    this._balance = 0.0;
    this._isActivated = false;
}


"use strict";
function Person(name, birthDate){
    this._name = name;
    this._birthDate = new Date(Date.parse(birthDate));
    this._accounts = [];
}
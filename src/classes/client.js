export class Client {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(currentName) {
    this._name = currentName;
  }
}

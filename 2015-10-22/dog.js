function dog(name, year, month, day) {
  this.name = name;
  this.birthDate = new Date(year, month - 1, day);
  this.sit = function() { 
    return this.name + " is sitting";
  };
  this.setBirthdate = function(birthDate) {
    this.birthDate = birthDate;
  };
  this.idle = function() {
    return this.name + " is idle";
  };
  this.fetch = function() {
    return this.name + " is fetching"; 
  };
  this.shake = function() {
    return this.name + " is shaking hands";
  };
  this.down = function() {
    return this.name + " is lying down";
  };
}

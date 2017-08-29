var dic = function(){
    this.datastore = [];

    this.add = function(key,value){
      this.datastore[key] = value;
    };

    this.find = function(key){
      return this.datastore[key];
    };

    this.remove = function(key){
      delete this.datastore[key];
    };

    this.showAll = function(){
      Object.keys(this.datastore).sort().forEach(function(key){
        console.log(key ,"--->>", this.datastore[key]);
      },this);
    };

    this.count = function(){
      var n = 0;
      for(key in Object.keys(this.datastore) ){
        ++n;
      }
      return n;
    }

    this.clear = function(){
      var keys = Object.keys(this.datastore);
      for(var i=0;i<keys.length;i++){
        delete this.datastore[keys[i]];
      }
    }
}

var d = new dic();
d.add("c",11);
d.add("b",222);
d.add("a",3333);
d.add("d",444);
// console.log(d.datastore);
// d.showAll();
d.showAll();
d.clear();
console.log(d.count());

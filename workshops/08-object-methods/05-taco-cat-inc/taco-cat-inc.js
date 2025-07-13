let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,
  currentInventory: function() {
    
    let total=0
    let keys= Object.keys(this)
    for (let i=0; i<keys.length; i++) {
      let akey= keys[i]
      if(typeof this[akey]=== 'object') {
        let items = Object.keys(this[akey]) 
        for (let j=0; j<items.length;j++) {
          let lo =items[j]
          
          total+= (this[akey][lo].cost*this[akey][lo].quantity)
          
          
        }
      
      }
      

    }
    return total;
  },
  sale: function(order) {

    debugger;
    let total=0
    let amount =0
    let keys= Object.keys(order)
    for (let i=0; i<keys.length; i++) {
      let akey= keys[i];

          let lo =order[akey]
            amount+= this[akey][lo].cost
            this[akey][lo].quantity--
    }
    this.cash+=amount
    return amount;

  }
};

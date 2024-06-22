//task1
function User(fullName) {
    this.fullName = fullName;
    this.creditLimit = 1000;
    this.balans = 50;
    this.precentOfMinPayment = 10;
    this.getBalance = function () {
      if (this.balans === 0 && this.creditLimit < 1000) {
        console.log(
          `Sizin borcunuz: ${
            1000 -
            this.creditLimit +
            (1000 - this.creditLimit) * (this.precentOfMinPayment / 100)
          }`
        );
      } else if (this.balans > 0) {
        console.log(`Sizin balansınız : ${this.balans}`);
      } else {
        console.log("Sizin borcunuz yoxdur");
      }
    };
  
    this.withdraw = function (amount) {
      if (amount > this.balans + this.creditLimit) {
        console.log("Almaq istediyiniz mebleg coxdur");
      } else if (amount > this.balans) {
        const diff = amount - this.balans;
        this.balans = 0;
        this.creditLimit -= diff;
      } else {
        this.balans -= amount;
      }
    };
    this.refill = function (amount) {
    if (amount > 0) {
      this.balans += amount;
      console.log(`${amount} məbləğ əlavə edildi. Yeni balans: ${this.balans}`);
    } else {
      console.log("Əlavə ediləcək məbləğ müsbət olmalıdır.");
    }
  };
}
  const client = new User("Neman Yusif");
  const client1 = new User("Sonya Həmidova");
  
  client.withdraw(500);
 
  client.getBalance();
  client1.getBalance();
  
  client.refill(2000); 
  console.log(client);

  function Hesabla(yaddas) {
    this.yaddas=function (a) {
      return a
    }
    this.topla =function (a,b) {
      return a+b
    }
    this.cixma =function (a,b) {
       if (a>=b) {
        return a - b 
       } else {
        return b-a
       }
    }
    this.vurma = function (a,b) {
      return a*b
    }
    this.bolme =function (a,b) {
      return a/b
    }
  }
  const topla =new Hesabla()


  console.log(topla.topla(3,4));
  console.log(topla.cixma(6,5));
  console.log(topla.vurma(6,5));
  console.log(topla.bolme(6,5));
  console.log(topla.yaddas(66));

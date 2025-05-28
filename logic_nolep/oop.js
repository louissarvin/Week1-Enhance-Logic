class Bank {
    // Tulis Code Disini
    constructor(bankName) {
        this.bankName = bankName
        this.accountNumber = Math.floor(Math.random() * 10000000)
    }

    register(person, type, saldo) {
        if(type === "platinum" && saldo >= 50000) {
            person.bankAccount = new Platinum(person.name, this.accountNumber, saldo)
            console.log(`Selamat datang ke ${this.bankName}, ${person.name}. Nomor akun anda adalah ${this.accountNumber}. Total saldo anda adalah ${saldo}`)
            return 
        } else if (type === "silver" && saldo >= 10000) {
            person.bankAccount = new Silver(person.name,this.accountNumber, saldo)
            console.log(`Selamat datang ke ${this.bankName}, ${person.name}. Nomor akun anda adalah ${this.accountNumber}. Total saldo anda adalah ${saldo}`)
            return 
        } else {
          console.log("Saldo awal kurang dari minimum saldo yang ditentukan")
            return 
        }
    }
}
  
  class Person {
    // Tulis Code Disini
    constructor(name) {
        this.name = name
    }
  }
  
  class Member {
    // Tulis Code Disini
    constructor(memberName, accountNumber, saldo) {
        this.memberName = memberName
        this.accountNumber = accountNumber
        this.mininumBalance = 0
        this.balance = saldo
        this.transactions = []
        this.type = this.constructor.name.toLowerCase()
    }

    credit(nominal) {
      if(nominal >= this.mininumBalance) {
        this.balance += nominal
        this.transactions.push(new Transaction(nominal, "credit", new Date(), "nyetor"))
        console.log("Anda sukses menyimpan uang ke dalam bank.")
        return 
      }else {
        console.log("Belum memenuhi minimal uang yang dapat di setor")
        return 
      }
    }

    debet(nominal, note) {
      if(this.balance >= nominal && this.balance - nominal >= this.mininumBalance) {
        this.balance -= nominal
        this.transactions.push(new Transaction(nominal, "debet", new Date(), note))
        console.log("Anda sukses menarik uang dari bank")
        return
      } else if (nominal > this.balance) {
        console.log("Saldo anda tidak cukup")
        return 
      } else {
        console.log("Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.")
        return 
      }
    }

    transfer(targetAccount, nominal) {
      if(this.balance >= nominal && this.balance - nominal >= this.mininumBalance) {
        this.balance -= nominal;
        targetAccount.balance += nominal
        targetAccount.transactions.push(new Transaction(nominal, "credit", new Date(), `Transfer dari akun ${this.memberName}`))
        this.transactions.push(new Transaction(nominal, "debet", new Date(), `transfer ke akun ${targetAccount.memberName}`))
        console.log(`Anda sukses transfer ke ${targetAccount.memberName}`)
        return
      } else {
        console.log(`Anda gagal transfer ke ${targetAccount.memberName}`)
        return
      }
    }
  }
  
  class Platinum extends Member{
    // Tulis Code Disini
    constructor(memberName, accountNumber,mininumBalance, balance, transactions, type) {
        super(memberName, accountNumber, mininumBalance , balance, transactions,type)
        this.mininumBalance = 50000
    }

   
  }
  
  class Silver extends Member{
    // Tulis Code Disini
    constructor(memberName, accountNumber,mininumBalance, balance, transactions, type) {
      super(memberName, accountNumber, mininumBalance , balance, transactions,type)
      this.mininumBalance = 10000
  }
  }
  
  class Transaction {
    // Tulis Code Disini
    constructor(nominal, status, date, note) {
      this.nominal = nominal
      this.status = status
      this.date = date
      this.note = note
    }
  }
  
  // TESTCASE
  // TIDAK BOLEH MENGUBAH CODE DI BAWAH INI
  
  let yudhistiraBank = new Bank('Yudhistira Bank')
  let nadia = new Person('Nadia')
  
  yudhistiraBank.register(nadia, 'platinum', 5000)
  // Saldo awal kurang dari minimum saldo yang ditentukan
  yudhistiraBank.register(nadia, 'platinum', 54000)
  //Selamat datang ke Yudhistira Bank, Nadia. Nomor Akun anda adalah 6332937. Total saldo adalah 54000
  
let nadiaAccount = nadia.bankAccount
  
//   /* PASTIKAN BAHWA SALDO SELALU BERKURANG ATAU BERTAMBAH UNTUK SETIAP TRANSAKSI */
  nadiaAccount.credit(300000)
  // Anda sukses menyimpan uang ke dalam bank.
  
  nadiaAccount.credit(1000)
  // Belum memenuhi minimal uang yang dapat di setor
  
  nadiaAccount.debet(200000, 'Beli Keyboard')
  // Anda sukses menarik uang dari bank
  
  nadiaAccount.debet(130000, 'Beli Keyboard Lagi')
  // Saldo minimum anda tidak terpenuhi untuk melakukan transaksi.
  nadiaAccount.debet(600000, 'Bisa gak ya lebih besar dari balance ? ')
  // Saldo anda tidak cukup
  
  let semmi = new Person('Semmi Verian')
  yudhistiraBank.register(semmi, 'silver', 10000000)
  let semmiAccount = semmi.bankAccount
  
  nadiaAccount.transfer(semmiAccount, 100000)
  // Anda sukses transfer ke Semmi Verian
  nadiaAccount.transfer(semmiAccount, 1000000)
  // Anda gagal transfer ke Semmi Verian
  
  console.log(semmiAccount)
  // Silver {
  //   memberName: 'Semmi Verian',
  //   accountNumber: 1319650,
  //   minimumBalance: 10000,
  //   balance: 10100000,
  //   transactions: [
  //     Transaction {
  //       nominal: 100000,
  //       status: 'credit',
  //       date: 2025-01-28T07:13:54.802Z,
  //       note: 'transfer dari akun Nadia'
  //     }
  //   ],
  //   type: 'silver'
  // }
  
  console.log(nadiaAccount)
  // Platinum {
  //   memberName: 'Nadia',
  //   accountNumber: 3971487,
  //   minimumBalance: 50000,
  //   balance: 54000,
  //   transactions: [
  //     Transaction {
  //       nominal: 300000,
  //       status: 'credit',
  //       date: 2025-01-28T07:13:54.800Z,
  //       note: 'nyetor'
  //     },
  //     Transaction {
  //       nominal: 200000,
  //       status: 'debet',
  //       date: 2025-01-28T07:13:54.801Z,
  //       note: 'Beli Keyboard'
  //     },
  //     Transaction {
  //       nominal: 100000,
  //       status: 'debet',
  //       date: 2025-01-28T07:13:54.802Z,
  //       note: 'transfer ke akun Semmi Verian'
  //     }
  //   ],
  //   type: 'platinum'
  // }
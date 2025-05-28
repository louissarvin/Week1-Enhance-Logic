  // DOKUMENTASI DFS
  
  function shortestPath(friends, start, target) {
    //code
    const visited = new Set() // Penanda untuk menyimpan simpul yang sudah dikunjungi agar tidak diproses dua kali.
    const queue = [] // Menampung queue atau antrian dari logic BFS, atau antrian untuk menyimpan simpul yang akan dikunjungi berikutnya.

    queue.push([start, 0]) // Menambahkan simpul awal (start) ke dalam antrian dengan jarak 0. Ini menampung antrian awal sesuai awalnya (contoh pertama yaitu menampung Alice di antrian awal) dan menandakan bahwa awal ini ditandai dengan jarak 0 

    while(queue.length > 0) { // Looping untuk menentukan bahwa selama masih ada simpul yang harus dikunjungi, terus jalankan BFS.
      const [currentList, distance] = queue.shift() // Mengambil dan menghapus elemen pertama dari queue. currentList adalah simpul saat ini, distance adalah jarak dari start ke simpul ini.
      if(currentList === target) return distance // Jika simpul saat ini adalah simpul tujuan, maka kembalikan jarak sebagai hasil (karena kita sudah sampai di tujuan dengan jalur terpendek).
      visited.add(currentList) // Tandai simpul saat ini sebagai sudah dikunjungi.x
      for(const neighbor of friends[currentList]){ // Looping untuk mencari tetangga dari setiap simpul saat ini
        if(!visited.has(neighbor)){ // Validasi untuk mencari apakah tetangga sudah dikunjungi apa belum
          queue.push([neighbor, distance + 1]) // Jika belum, maka masukan tetangga kedalam antrian dan buat setiap tetangga memiliki jarak dimana jarak akan bertambah 1
          visited.add(neighbor) // Tandai tetangga ini sebagai sudah dikunjungi untuk menghindari pemrosesan ulang.
        }
      }
    }
    return -1 // Jika tidak ditemukan jalur dari start ke target, kembalikan -1.
  }
  
  // Testcase 1
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'David')); // Expected Output: 2
    
    // Testcase 2
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Eve')); // Expected Output: 2
    
    // Testcase 3
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Alice')); // Expected Output: 0
    
    // Testcase 4
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Charlie')); // Expected Output: 3
    
    // Testcase 5
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Eve', 'Bob')); // Expected Output: 1
    
    // Testcase 6
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'Charlie', 'Alice')); // Expected Output: 1
    
    // Testcase 7
    console.log(shortestPath({
      'Alice': ['Bob', 'Charlie'],
      'Bob': ['Alice', 'David', 'Eve'],
      'Charlie': ['Alice', 'Eve'],
      'David': ['Bob'],
      'Eve': ['Bob', 'Charlie']
    }, 'David', 'Eve')); // Expected Output: 2
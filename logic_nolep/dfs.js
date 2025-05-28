// DOKUMENTASI GRAPH

class Graph {
    // Implementasi graph dan metode DFS
    constructor(grid) { // Menampung array matriks yang akan di gunakan
    this.grid = grid;
  }

  dfs(r, c) { // Implementasi dfs
    // Ini merupakan base case, dimana jika row atau column keluar dari batas indeks grid, atau nilainya 0 (air / sudah dikunjungi), maka tidak perlu diproses → return 0.
    if(r < 0 || c < 0 || r >= this.grid.length || c >= this.grid[0].length || this.grid[r][c] == 0) return 0
    
    this.grid[r][c] = 0 // Jika sudah dikunjungi atau array matriks yang tadi awalnya 1 berubah menjadi 0

    // Mengecek apakah angka 1 ini memiliki angka 1 lain yang bisa digunakan sebagai terbentuknya pulau, jadi ketika dia ketemu angka 1, maka angka 1 ini akan mengecek atas,bawah,kiri dan kanannya
    this.dfs(r, c + 1)
    this.dfs(r, c - 1)
    this.dfs(r + 1, c)
    this.dfs(r - 1, c)
  }
  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    const graph = new Graph(grid)
    let island = 0
    for(let i = 0; i < grid.length; i++) { // Looping buat row nya
      for(let j = 0; j < grid[0].length; j++) { // Looping buat columnya
        if(grid[i][j] === 1) { // Validasi untuk mencari angka dari matriks ini, jika angkanya 1 bisa di jadikan sebagai acuan untuk awal mula terbentuknya pulau
          graph.dfs(i, j) // Jika validasi diatas menemukan angka 1, maka lakukan logic DFS ini
          island++ // Jika pulaunya sudah terbentuk 1 maka akan terhitung 1, dan seterusnya sampai semua matriks itu menjadi 0 semua
        }
      }
    }
    return island
  }
  
  // Testcase 1
  console.log(islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])); // Expected Output: 1
  
  // Testcase 2
  console.log(islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ])); // Expected Output: 3
  
  // Testcase 3
  console.log(islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1]
  ])); // Expected Output: 5
  
  // Testcase 4
  console.log(islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
  ])); // Expected Output: 4
  
  // Testcase 5
  console.log(islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ])); // Expected Output: 6
  
  // Testcase 6
  console.log(islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0]
  ])); // Expected Output: 2
  
  // Testcase 7
  console.log(islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1]
  ])); // Expected Output: 3
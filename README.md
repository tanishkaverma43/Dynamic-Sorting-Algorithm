<div align="center">

# 🎨 Dynamic Sorting Explorer

### A Visual Journey Through Sorting Algorithms

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

<style>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: bold;
}

.feature-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  margin: 15px 0;
  color: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  animation: slideIn 0.6s ease-out;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.algorithm-badge {
  display: inline-block;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 20px;
  font-weight: bold;
  animation: pulse 2s ease-in-out infinite;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.bubble { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.selection { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.insertion { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.merge { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
.quick { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
.heap { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }

.stats-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  color: white;
  display: inline-block;
  min-width: 200px;
  animation: float 3s ease-in-out infinite;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.tech-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  animation: slideIn 0.5s ease-out;
}
</style>

<div align="center">
  <h1 class="animated-gradient">🚀 Dynamic Sorting Explorer</h1>
  <p style="font-size: 1.2em; color: #666; margin: 20px 0;">
    An interactive web application that visualizes sorting algorithms in real-time with beautiful animations and color-coded comparisons
  </p>
</div>

---

## ✨ Features

<div class="feature-card">
  <h3>🎯 Interactive Visualization</h3>
  <p>Watch sorting algorithms come to life with real-time bar animations and color-coded comparisons</p>
</div>

<div class="feature-card">
  <h3>⚙️ Customizable Controls</h3>
  <p>Adjust array size (20-150 elements) and animation speed (1-5 levels) to suit your learning pace</p>
</div>

<div class="feature-card">
  <h3>📊 Complexity Analysis</h3>
  <p>Real-time display of time and space complexity for each algorithm (Best, Average, Worst cases)</p>
</div>

<div class="feature-card">
  <h3>🎨 Beautiful UI</h3>
  <p>Modern, responsive design with smooth animations and intuitive controls</p>
</div>

---

## 🔢 Supported Algorithms

<div align="center">

<span class="algorithm-badge bubble">🫧 Bubble Sort</span>
<span class="algorithm-badge selection">🎯 Selection Sort</span>
<span class="algorithm-badge insertion">📥 Insertion Sort</span>
<span class="algorithm-badge merge">🔀 Merge Sort</span>
<span class="algorithm-badge quick">⚡ Quick Sort</span>
<span class="algorithm-badge heap">📚 Heap Sort</span>

</div>

### Algorithm Details

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
|-----------|-----------|--------------|------------|------------------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) |
| **Heap Sort** | O(n log n) | O(n log n) | O(n log n) | O(1) |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required! 🎉

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Dynamic-Sorting-Explorer
   ```

3. **Open `index.html` in your browser**
   - Simply double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

---

## 🎮 How to Use

<div class="feature-card">
  <h3>📋 Step-by-Step Guide</h3>
  <ol style="text-align: left; padding-left: 20px;">
    <li><strong>Generate Array:</strong> Click "Generate New Array!" to create a random array</li>
    <li><strong>Adjust Size:</strong> Use the slider to set array size (20-150 elements)</li>
    <li><strong>Set Speed:</strong> Adjust the speed slider (1 = slowest, 5 = fastest)</li>
    <li><strong>Choose Algorithm:</strong> Click any sorting algorithm button to start visualization</li>
    <li><strong>Watch & Learn:</strong> Observe how the algorithm sorts the array with color-coded animations</li>
  </ol>
</div>

### 🎨 Color Coding

- **🔵 Blue**: Default/unsorted elements
- **🟡 Yellow**: Currently being compared
- **🔴 Red**: Elements being swapped
- **🟢 Green**: Sorted/final position

---

## 🛠️ Technology Stack

<div class="tech-stack">
  <div class="tech-item">HTML5</div>
  <div class="tech-item">CSS3</div>
  <div class="tech-item">JavaScript (ES5+)</div>
  <div class="tech-item">SCSS</div>
</div>

---

## 📁 Project Structure

```
Dynamic-Sorting-Explorer/
│
├── index.html              # Main HTML file
├── style.scss              # SCSS source file
├── css/
│   ├── style.css          # Compiled CSS
│   └── style.css.map      # Source map
│
├── scripts/
│   ├── main.js            # Main application logic
│   ├── visualizations.js  # Visualization utilities
│   ├── bubble_sort.js     # Bubble sort implementation
│   ├── selection_sort.js  # Selection sort implementation
│   ├── insertion_sort.js  # Insertion sort implementation
│   ├── merge_sort.js      # Merge sort implementation
│   ├── quick_sort.js      # Quick sort implementation
│   └── heap_sort.js       # Heap sort implementation
│
└── README.md              # This file
```

---

## 🎓 Educational Value

This project is perfect for:

- 🎓 **Students** learning data structures and algorithms
- 👨‍💻 **Developers** understanding sorting algorithm mechanics
- 🧠 **Educators** teaching computer science concepts
- 🔍 **Interview preparation** for technical roles

---

## 🌟 Key Highlights

<div class="stats-box">
  <h3>📊 6 Algorithms</h3>
  <p>Comprehensive coverage of major sorting techniques</p>
</div>

<div class="stats-box" style="animation-delay: 0.5s;">
  <h3>⚡ Real-time</h3>
  <p>Live visualization with adjustable speed</p>
</div>

<div class="stats-box" style="animation-delay: 1s;">
  <h3>🎨 Interactive</h3>
  <p>Engaging visual experience with color coding</p>
</div>

<div class="stats-box" style="animation-delay: 1.5s;">
  <h3>📈 Complexity Info</h3>
  <p>Built-in time and space complexity analysis</p>
</div>

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contribution

- ✨ Add more sorting algorithms (Radix Sort, Counting Sort, etc.)
- 🎨 Improve UI/UX design
- 📱 Add mobile responsiveness
- 🧪 Add unit tests
- 📝 Improve documentation
- 🐛 Fix bugs and optimize performance

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Dynamic Sorting Explorer**

- 🌐 Project: [GitHub Repository](https://github.com/yourusername/Dynamic-Sorting-Explorer)
- 📧 Issues: [Report a Bug](https://github.com/yourusername/Dynamic-Sorting-Explorer/issues)

---

## 🙏 Acknowledgments

- Inspired by various sorting visualizer projects
- Built with vanilla JavaScript for maximum compatibility
- Designed for educational purposes

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star! ⭐

**Made with ❤️ and JavaScript**

[⬆ Back to Top](#-dynamic-sorting-explorer)

</div>


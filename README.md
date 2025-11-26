<div align="center">

# 🎨 Dynamic Sorting Explorer

### A Visual Journey Through Sorting Algorithms

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

<div align="center">
  <h1>🚀 Dynamic Sorting Explorer</h1>
  <p>
    <strong>An interactive web application that visualizes sorting algorithms in real-time with beautiful animations and color-coded comparisons</strong>
  </p>
</div>

---

## ✨ Features

### 🎯 Interactive Visualization
Watch sorting algorithms come to life with real-time bar animations and color-coded comparisons

### ⚙️ Customizable Controls
Adjust array size (20-150 elements) and animation speed (1-5 levels) to suit your learning pace

### 📊 Complexity Analysis
Real-time display of time and space complexity for each algorithm (Best, Average, Worst cases)

### 🎨 Beautiful UI
Modern, responsive design with smooth animations and intuitive controls

---

## 🔢 Supported Algorithms

<div align="center">

[![Bubble Sort](https://img.shields.io/badge/🫧_Bubble_Sort-667eea?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
[![Selection Sort](https://img.shields.io/badge/🎯_Selection_Sort-f5576c?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
[![Insertion Sort](https://img.shields.io/badge/📥_Insertion_Sort-00f2fe?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
[![Merge Sort](https://img.shields.io/badge/🔀_Merge_Sort-38f9d7?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
[![Quick Sort](https://img.shields.io/badge/⚡_Quick_Sort-fee140?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
[![Heap Sort](https://img.shields.io/badge/📚_Heap_Sort-330867?style=for-the-badge)](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)

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

### 📋 Step-by-Step Guide

1. **Generate Array:** Click "Generate New Array!" to create a random array
2. **Adjust Size:** Use the slider to set array size (20-150 elements)
3. **Set Speed:** Adjust the speed slider (1 = slowest, 5 = fastest)
4. **Choose Algorithm:** Click any sorting algorithm button to start visualization
5. **Watch & Learn:** Observe how the algorithm sorts the array with color-coded animations

### 🎨 Color Coding

- **🔵 Blue**: Default/unsorted elements
- **🟡 Yellow**: Currently being compared
- **🔴 Red**: Elements being swapped
- **🟢 Green**: Sorted/final position

---

## 🛠️ Technology Stack

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)

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

<div align="center">

| 📊 6 Algorithms | ⚡ Real-time | 🎨 Interactive | 📈 Complexity Info |
|:---:|:---:|:---:|:---:|
| Comprehensive coverage of major sorting techniques | Live visualization with adjustable speed | Engaging visual experience with color coding | Built-in time and space complexity analysis |

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

- 🌐 Project: [GitHub Repository](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm)
- 📧 Issues: [Report a Bug](https://github.com/tanishkaverma43/Dynamic-Sorting-Algorithm/issues)

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


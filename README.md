# use-in-viewport-react

### **[Live Demo](https://stackblitz.com/edit/vitejs-vite-xwfgh6ze?file=src%2FApp.tsx)**

A lightweight and performant **React hook** to check if an element is in the **viewport** using the **Intersection Observer API**. This hook allows you to easily track an element’s visibility and trigger UI updates, animations, lazy loading, or other effects when an element enters or leaves the viewport.

## 🚀 Features

✅ **Tiny & Fast** – Uses the native **IntersectionObserver API** for efficient performance.  
✅ **Customizable** – Supports `root`, `rootMargin`, and `threshold` options for precise control.  
✅ **Simple API** – Just pass a `ref`, and get a `boolean` indicating visibility.  
✅ **No Dependencies** – Pure React, works with **React 16.8+ (including React 19)**.  
✅ **SSR Compatible** – Works well with frameworks like **Next.js**.

## Installation

To install the package, run:

```bash
npm install use-in-viewport-react
```

## Usage

### Example Usage in a Functional Component

```tsx
import { useRef } from 'react';
import { useInViewportReact } from 'use-in-viewport-react';

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useInViewportReact(ref, { rootMargin: '-200px' });

  return (
    <div>
      <h1>Testing useInViewportReact Hook</h1>
      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        <p>
          Scroll down to see the change in color when the box comes into view.
        </p>
      </div>

      <div
        ref={ref}
        style={{
          height: '200px',
          background: isInViewport ? 'green' : 'red',
          transition: 'background-color 0.3s ease',
        }}
      >
        This element is {isInViewport ? 'in' : 'out of'} the viewport.
      </div>

      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        <p>Scroll further to test the visibility change.</p>
      </div>
    </div>
  );
}

export default App;
```

## 📌 Use Cases

🔹 **Lazy Load Images & Components** – Load content only when it becomes visible to optimize performance.  
🔹 **Infinite Scrolling** – Detect when users reach the bottom of a list and fetch more content dynamically.  
🔹 **Trigger Animations** – Animate elements when they appear in the viewport for a better UX.  
🔹 **Sticky Elements** – Change styles or behavior when an element enters/leaves the viewport.  
🔹 **Ad Tracking & Analytics** – Track when specific content is visible to users.

## ⚙️ Options

| Option       | Type                 | Default | Description                                                              |
| ------------ | -------------------- | ------- | ------------------------------------------------------------------------ |
| `root`       | `Element \| null`    | `null`  | The element used as the viewport. Defaults to `null` (browser viewport). |
| `rootMargin` | `string`             | `"0"`   | Margin around the root element (e.g., `"10px"`).                         |
| `threshold`  | `number \| number[]` | `0.1`   | Visibility percentage that triggers the observer.                        |

## 🛠️ Compatibility

✅ **React 16.8+** (Hooks API)  
✅ **React 17, 18, and 19**  
✅ **ES5 & ES6** compatible  
✅ Works with **Next.js**, **Gatsby**, **Vite**, and **Create React App**

## 🌟 Why use `use-in-viewport-react`?

There are several similar hooks available, but `use-in-viewport-react` is optimized for **performance, simplicity, and flexibility**. It helps you build **smooth scrolling experiences**, **lazy load content**, and create **engaging animations** with minimal effort.

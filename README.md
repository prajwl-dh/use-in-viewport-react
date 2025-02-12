# use-in-viewport-react

A simple React hook to detect if an element is in the viewport using the Intersection Observer API.

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

## Options

The `useInViewportReact` hook accepts an options object with the following properties:

- `root`: The element to use as the viewport (defaults to `null`).
- `rootMargin`: Margin around the root (defaults to `'0px'`).
- `threshold`: The percentage of the element visible before triggering the callback (defaults to `0.1`).

## License

MIT

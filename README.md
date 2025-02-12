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
import React, { useRef } from 'react';
import { useInViewportReact } from 'use-in-viewport-react';

const ExampleComponent = () => {
  const ref = useRef(null);
  const isInViewport = useInViewportReact(ref);

  return (
    <div>
      <div
        ref={ref}
        style={{ height: '200px', background: isInViewport ? 'green' : 'red' }}
      >
        This element is {isInViewport ? 'in' : 'out of'} the viewport.
      </div>
    </div>
  );
};

export default ExampleComponent;
```

## Options

The `useInViewportReact` hook accepts an options object with the following properties:

- `root`: The element to use as the viewport (defaults to `null`).
- `rootMargin`: Margin around the root (defaults to `'0px'`).
- `threshold`: The percentage of the element visible before triggering the callback (defaults to `0.1`).

## License

MIT

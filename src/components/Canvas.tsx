import { forwardRef } from 'react';

interface CanvasProps {
  className?: string;
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ className = '' }, ref) => {
    return (
      <canvas 
        ref={ref} 
        width={400} 
        height={600} 
        className={`border-2 border-gray-300 rounded-lg ${className}`}
        style={{
          width: '400px',
          height: '600px'
        }}
      />
    );
  }
);

Canvas.displayName = 'Canvas';

export default Canvas;
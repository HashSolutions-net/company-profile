import React, { useState, useEffect } from 'react';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
        className="custom-cursor"
        style={{
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px)`,
        }}
    >
        #
    </div>
  );
}

export default CustomCursor;

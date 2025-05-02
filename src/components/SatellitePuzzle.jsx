import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import antennaImg from '../assets/1. Antenna.jpg';
import cpuImg from '../assets/2. Main-Processing-Unit.jpg';
import wing1Img from '../assets/3. SolarPanel-Wing-1.jpg';
import wing2Img from '../assets/4. SolarPanel-Wing-2.jpg';
import thrustersImg from '../assets/5. Mini-Thursters.jpg';

const pieceMap = {
  antenna: antennaImg,
  cpu: cpuImg,
  wing1: wing1Img,
  wing2: wing2Img,
  thrusters: thrustersImg,
};

// Draggable puzzle piece
const PuzzlePiece = ({ name, image, placed }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece',
    item: { name },
    canDrag: !placed,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  if (placed) return null;

  return (
    <img
      ref={drag}
      src={image}
      alt={name}
      style={{
        width: '100px',
        height: '100px',
        opacity: isDragging ? 0.5 : 1,
        margin: '10px',
        cursor: 'grab',
      }}
    />
  );
};

// Drop target zone
const DropZone = ({ id, onDrop, image, style }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      if (item.name === id) {
        onDrop(id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        backgroundColor: isOver ? '#d0f0ff' : 'transparent',
        ...style,
      }}
    >
      {image && (
        <img src={image} alt={id} style={{ width: '100px', height: '100px' }} />
      )}
    </div>
  );
};

// Main puzzle component
const SatellitePuzzle = () => {
  const initialState = {
    antenna: false,
    cpu: false,
    wing1: false,
    wing2: false,
    thrusters: false,
  };

  const [placed, setPlaced] = useState(initialState);

  const handleDrop = (id) => {
    setPlaced((prev) => ({ ...prev, [id]: true }));
  };

  const handleReset = () => {
    setPlaced(initialState);
  };

  const completed = Object.values(placed).every(Boolean);

  return (
    <DndProvider backend={HTML5Backend}>
      <h2 style={{ textAlign: 'center' }}>🧠 Rebuild the Satellite</h2>

      {/* Draggable tray */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Object.entries(pieceMap).map(([name, image]) => (
          <PuzzlePiece key={name} name={name} image={image} placed={placed[name]} />
        ))}
      </div>

      {/* Puzzle board */}
      <div
        style={{
          position: 'relative',
          width: '350px',
          height: '400px',
          margin: '20px auto',
          border: '2px dashed #ccc',
        }}
      >
        <DropZone
          id="antenna"
          image={placed.antenna ? pieceMap.antenna : null}
          onDrop={handleDrop}
          style={{ top: '10px', left: '125px' }}
        />
        <DropZone
          id="cpu"
          image={placed.cpu ? pieceMap.cpu : null}
          onDrop={handleDrop}
          style={{ top: '110px', left: '125px' }}
        />
        <DropZone
          id="wing1"
          image={placed.wing1 ? pieceMap.wing1 : null}
          onDrop={handleDrop}
          style={{ top: '110px', left: '225px' }}
        />
        <DropZone
          id="wing2"
          image={placed.wing2 ? pieceMap.wing2 : null}
          onDrop={handleDrop}
          style={{ top: '110px', left: '25px' }}
        />
        <DropZone
          id="thrusters"
          image={placed.thrusters ? pieceMap.thrusters : null}
          onDrop={handleDrop}
          style={{ top: '210px', left: '125px' }}
        />
      </div>

      {/* Success message */}
      {completed && (
        <div style={{ textAlign: 'center', fontSize: '1.2rem', color: 'green' }}>
          ✅ Satellite Reassembled Successfully!
        </div>
      )}

      {/* Reset button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          🔁 Puzzle Again!
        </button>
      </div>
    </DndProvider>
  );
};

export default SatellitePuzzle;

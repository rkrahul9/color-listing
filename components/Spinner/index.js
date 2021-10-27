import React from 'react';

export default function Spinner() {
  return (
    <div className="mx-auto">
      <div className="spinner-grow text-primary m-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success m-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-danger m-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning m-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
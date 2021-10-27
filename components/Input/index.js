import React from 'react';

export default function Input({ text, onChange }) {
  return (
    <div className="input-group my-4">
      <span className="input-group-text">Type Words</span>
      <input
        type="text"
        className="form-control"
        onChange={onChange}
        value={text}
        placeholder="Please type atleast 3 words..."
      />
    </div>
  );
}
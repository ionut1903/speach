import React from 'react';

const Spinner = (props) => {
  const { loading } = props;

  return (
    <div className={`load ${loading ? '' : 'finished'}`}>
      <div className="load__wrap">
        <svg className="load__icon">
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
      </div>
    </div>
  )
}

export default Spinner;
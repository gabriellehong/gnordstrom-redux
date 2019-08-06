import React from 'react';
import { SHOE_STAR_COUNT, DRESS_STAR_COUNT } from './types';

const arr = [
  [
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr">
      <path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr">
      <path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr">
      <path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr">
      <path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr">
      <path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path>
    </svg>
  ],
  [
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path></svg>
  ],
  [
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z15Hx1O"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" strokeWidth="1px"></path></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" className="nui-icon nui-icon-medium-star-full Z1syfzr"><path className="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" strokeWidth="1px"></path></svg>
  ]
]

export const shoeStarCount = () => {
  let randomindex = Math.floor(Math.random() * 3)
  return {
    type: SHOE_STAR_COUNT,
    payload: arr[randomindex]
  }
}

export const dressStarCount = () => {
  let randomindex = Math.floor(Math.random() * 3)
  return {
    type: DRESS_STAR_COUNT,
    payload: arr[randomindex]
  }
}
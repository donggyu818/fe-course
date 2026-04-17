import React from 'react';
import {decrement, increment} from '../../features/likeSlice.js';
import { useDispatch } from 'react-redux';

export default function Modal({ project, onClose }) {
    // console.log('like => ', like, 'setLike => ', setLike);       // 확인용
    const dispatch = useDispatch();
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" >
                <span className="close-btn" onClick={onClose}>✕</span>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
                <h3>
                    <button className='modal-like-button' onClick={() => {dispatch(increment(project))}}>❤Like</button>
                    <button className='modal-like-button' onClick={() => {dispatch(decrement())}}>💔disLike</button>
                </h3>
            </div>
        </div>
    );
}
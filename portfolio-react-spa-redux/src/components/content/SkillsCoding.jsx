import React from 'react';
import {useDispatch} from 'react-redux';
import { add } from '../../features/skillsSlice.js';

export default function SkillsCoding({list}) {
    const dispatch = useDispatch();
    // console.log('coding', list);
    
    // const skills = [
    //     {"title" : "HTML", "value" : "98%", "width" : "98%"},
    //     {"title" : "CSS", "value" : "90%", "width" : "90%"},
    //     {"title" : "JavaScript", "value" : "90%", "width" : "90%"},
    //     {"title" : "TypeScript", "value" : "80%", "width" : "80%"},
    //     {"title" : "React", "value" : "79%", "width" : "79%"},
    //     {"title" : "Node.js", "value" : "68%", "width" : "68%"},
    // ];
    return (
        <ul>
            {list?.map( (skill, idx) => 
                <li className="bar" key={idx} >
                    <div class="bar-title">
                        <span onClick={ () => {dispatch(add(skill.title))} }>{skill.title}</span>
                        <span>{skill.value}</span>
                    </div>
                    <div className="bar-bg">
                        <div className="bar-value" style={ {width:skill.width} }></div>
                    </div>
                </li>
            )}
        </ul>
    );
}
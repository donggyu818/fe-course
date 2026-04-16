import React from 'react';

export default function SkillsCoding({list}) {
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
                <li className="bar" key={idx}>
                    <div class="bar-title">
                        <span>{skill.title}</span>
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

                    <ul>
                        <li class="bar">
                            <div class="bar-title">
                                <span>HTML</span>
                                <span>98%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value html"></div>
                            </div>
                        </li>
                        <li class="bar">
                            <div class="bar-title">
                                <span>CSS</span>
                                <span>90%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value CSS"></div>
                            </div>
                        </li>
                        <li class="bar">
                            <div class="bar-title">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value JavaScript"></div>
                            </div>
                        </li>
                        <li class="bar">
                            <div class="bar-title">
                                <span>TypeScript</span>
                                <span>80%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value TypeScript"></div>
                            </div>
                        </li>
                        <li class="bar">
                            <div class="bar-title">
                                <span>React</span>
                                <span>79%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value React"></div>
                            </div>
                        </li>
                        <li class="bar">
                            <div class="bar-title">
                                <span>NodeJS</span>
                                <span>68%</span>
                            </div>
                            <div class="bar-bg">
                                <div class="bar-value NodeJS"></div>
                            </div>
                        </li>
                    </ul>
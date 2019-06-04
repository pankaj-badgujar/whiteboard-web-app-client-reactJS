import React from 'react'


const LessonTabs = ({lessons,selectLesson,selectedLesson, addLesson}) =>
    <ul className="nav nav-tabs">
        {lessons.map((lesson,key) =>
            <li className="nav-item" key={key} onClick={() => selectLesson(lesson)}>
                <a className={ lesson === selectedLesson ? "nav-link active" : "nav-link"}>{lesson.title}</a>
            </li>
        )}
        <li className = "mx-2">

                <input placeholder={"New Lesson"} className="form-control"/>

        </li>
        <li>
            <button
                onClick={() => addLesson()}
                className={"btn btn-dark rounded-circle"}>+</button>
        </li>
    </ul>


export default LessonTabs
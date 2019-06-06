import React from 'react'


const TopicPills = ({topics,selectTopic ,selectedTopic}) =>

    <ul className="nav nav-pills">
        {topics.map( topic =>
            <li key={topic.id} className="nav-item m-2" onClick={() => selectTopic(topic)}>
                <a className={ topic === selectedTopic ? "nav-link active" : "nav-link"}>{topic.title}</a>
            </li>
        )}

    </ul>

export default TopicPills
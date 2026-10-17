import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
    const courses = props.courses;
    const category = props.category;
    const [likedCourses, setLikedCourses]= useState([]);

    // returns a flat list of all course objects from the API shape
    function getCourses() {
        if (!courses) return []

        if (category === 'All') {
            const allCourses = []
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData)
                })
            })
            return allCourses
        }

        return courses[category] || []
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card key={course.id || course.title} course={course}  likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            ))}
        </div>
    )
}

export default Cards

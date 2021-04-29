import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector'
import { getCourseTerm, terms } from '../utils/course'
import CourseSelector from './CourseSelector'

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseButton: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});
export default CourseList;
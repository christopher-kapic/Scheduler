import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CourseList from '../components/CourseList';



const ScheduleScreen = ({navigation}) => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const fetchSchedule = async () => {
    const response = await fetch(url);
    if (!response.ok) throw response;
    const json = await response.json();
    setSchedule(json);
  };

  const view = (course) => {
    navigation.navigate('CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
};

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});

export default ScheduleScreen;
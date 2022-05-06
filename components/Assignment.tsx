import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native'
import GradeUtil from '../gradebook/GradeUtil'
import AppContext from '../contexts/AppContext'
import { Colors } from '../colors/Colors'
import { FontAwesome } from '@expo/vector-icons'

function AssignmentComponent(props) {
  const { marks, setMarks } = useContext(AppContext)
  const assignment = marks.courses
    .get(props.course)
    .assignments.find((a) => a.name === props.name)

  const updatePoints = (input: string, type: string) => {
    const points = parseFloat(input)
    let newMarks = Object.assign({}, marks)
    const assignment = newMarks.courses
      .get(props.course)
      .assignments.find((a) => a.name === props.name)
    if (type === 'earned') {
      assignment.points = points
    } else if (type === 'total') {
      assignment.total = points
    }
    assignment.modified = true
    newMarks = GradeUtil.calculatePoints(newMarks)
    setMarks(newMarks)
  }

  const deleteAssignment = () => {
    let newMarks = Object.assign({}, marks)
    newMarks.courses.get(props.course).assignments = newMarks.courses
      .get(props.course)
      .assignments.filter((a) => a.name !== props.name)
    newMarks = GradeUtil.calculatePoints(newMarks)
    setMarks(newMarks)
  }

  return (
    <View style={[styles.container, props.style]}>
      <TouchableHighlight onPress={() => deleteAssignment()}>
        <FontAwesome
          name="trash-o"
          color={Colors.red}
          size={18}
          style={{ marginLeft: 10 }}
        />
      </TouchableHighlight>
      <View style={styles.assignment_info_container}>
        <Text
          numberOfLines={1}
          style={[
            styles.name,
            {
              color: assignment.modified
                ? Colors.dark_middle_blue_green
                : 'black'
            }
          ]}
        >
          {props.name}
        </Text>
        <Text numberOfLines={1} style={styles.category}>
          {assignment.category}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={
            isNaN(assignment.points) ? '' : assignment.points.toString()
          }
          placeholder={'_'}
          style={[
            styles.mark,
            {
              color: assignment.modified
                ? Colors.dark_middle_blue_green
                : 'black'
            }
          ]}
          onChangeText={(input) => updatePoints(input, 'earned')}
        />
        <Text style={styles.dash}> / </Text>
        <TextInput
          defaultValue={
            isNaN(assignment.total) ? '' : assignment.total.toString()
          }
          placeholder={'_'}
          style={[
            styles.mark,
            {
              marginRight: 10,
              color: assignment.modified
                ? Colors.dark_middle_blue_green
                : 'black'
            }
          ]}
          onChangeText={(input) => updatePoints(input, 'total')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 7
  },
  assignment_info_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 7,
    flex: 1
  },
  name: {
    color: 'black',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    marginHorizontal: 7,
    lineHeight: 12 * 0.75,
    paddingTop: 12 - 12 * 0.75,
    textAlign: 'left'
  },
  category: {
    color: 'black',
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    marginHorizontal: 7,
    lineHeight: 11 * 0.75,
    marginTop: 4,
    paddingTop: 11 - 11 * 0.75,
    textAlign: 'left'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mark: {
    height: 60,
    borderWidth: 0,
    fontSize: 23,
    fontFamily: 'Inter_600SemiBold',
    alignSelf: 'center'
  },
  dash: {
    fontSize: 20,
    alignSelf: 'center',
    textAlignVertical: 'center'
  }
})

export default AssignmentComponent

// 1. Создать ф-цию studentsBirthDays(students)
// 2. Из массива `students` создать объект, где ключами будут названия месяцев,
// а значениями - массивы студентов, у которых день рождения в этом месяце 
// (год не имеет значения, важен только месяц рождения)
// Получится что-то в виде:
// ```
// {
//   Jan: [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }],
//   Mar: [{ name: 'Sam', birthDate: '03/07/2012' }],
// }
// ```
// Используйте метод `.reduce` для этого преобразования
// В объект могут попасть не все месяце. Если в сентябре нету ни у кого дня рождения, то `Sep`не будет в объекте
// 3. Каждый массив теперь отсортируйте по дню месяца (год тоже не важен)
// Например `01/03/2010` должен идти перед `02/03/2000` - важен только день внутри месяца
// 4. Нужно в каждом массиве оставить только имена пользователей

// 1. Create function getStudentsBirthDays
// 2. input: [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }, { name: 'Sam', birthDate: '03/15/2010' }]
//    output: { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }
// 3. Detect month of birth and group
// 4. Sort students inside the month
// 5. Leave only names

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const studentsBirthDays = studentsList => {
    const studentsObj = studentsList.reduce((acc, student) => {
        const monthNumber = new Date(student.birthDate).getMonth()
        const monthName = monthNames[monthNumber]
        const oldStudents = acc[monthName] ? acc[monthName] : []
        return {
            ...acc,
            [monthName]: oldStudents.concat(student)
        }
    }, {})

    for (let month in studentsObj) {
        const sortedStudentsObj = studentsObj[month].sort((a, b) => {
            return new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
        })
        const studentsNames = sortedStudentsObj.map((student) => student.name)
        studentsObj[month] = studentsNames
    }



    return studentsObj
}


// const studentsList = [{
//         name: 'Tom',
//         birthDate: '01/15/2010'
//     },
//     {
//         name: 'Ben',
//         birthDate: '01/17/2008'
//     },
//     {
//         name: 'Sam',
//         birthDate: '03/15/2010'
//     }
// ]
// const result = getStudentsBirthDays(studentsList)
// console.log(result)
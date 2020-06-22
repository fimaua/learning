const getMessagesForBestStudents = (allStudents, notPassedStudents) => {
    const passedStudents = allStudents
        .filter(name => !notPassedStudents
            .includes(name));
    const massage = passedStudents
        .map(name => 'Good job, ' + name)
    return massage;
}
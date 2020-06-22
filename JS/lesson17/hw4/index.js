export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    setFullName(fullName) {
        const str = fullName.split(' ')
        this.firstName = str[0]
        this.lastName = str[1]
        console.log(user)
    }
}
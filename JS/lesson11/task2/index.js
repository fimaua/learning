const arr1 = [{
        name: 'Tom',
        phoneNumber: '777-77-77',
    },
    {
        name: 'Ann',
        phoneNumber: '666-66-66',
    },
    {
        name: 'Bob',
        phoneNumber: '555-55-55',
    },
];
const bool1 = false;

const sortContacts = (arr, bool) => {
    if (!Array.isArray(arr)) {
        return null
    } else {
        const res = arr.sort((a, b) => {
            if (bool !== false) {
                return a.name.localeCompare(b.name)
            } else { return b.name.localeCompare(a.name) }
        })
        return res;
    }
}
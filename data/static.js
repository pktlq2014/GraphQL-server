// tách data ra thành 1 file riêng
const booksData = [
    {
        id: 1,
        name: 'Nguyen Van Ty',
        genre: 'Adventure',
        authorId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van Hau',
        genre: 'Education',
        authorId: 2
    }
]
const authorsData = [
    {
        id: 1,
        name: 'Nguyen Van Dien',
        age: 30
    },
    {
        id: 2,
        name: 'Truong Thi Danh',
        age: 40
    }
]
module.exports = {
    booksData, authorsData
}
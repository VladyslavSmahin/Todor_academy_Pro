export function task_3() {
    function updateUserInfo(person, newName) {
        return {
            ...person,
            name: newName,
        };
    }
    const user1 = {name: 'Joseph', age: 100};
    const user2 = updateUserInfo(user1, 'Donald')
    function getUserInfo(user) {
        return user.name
    }
    console.log(getUserInfo(user1));
    console.log(getUserInfo(user2));
}
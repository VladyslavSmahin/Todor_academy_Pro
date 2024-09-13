export function task_1() {
    const user1 = {};
    user1['user123'] = 'username';
    user1.email = 'user@example.com';
    console.log(user1);
    ///
    let username = 'user111';
    let email ='user111@example.com';
    const user2 = {
        username,
        email,
    };
    console.log(user2);
}

import axios from "axios";

async function getData(num) {
    return new Promise(async (resolve, reject) => {
        if(!(/\D/gi.test(num))) {
            const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${num}`);
            const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`);

            resolve({users,posts});
        }

        reject("error");

    });
};

export default getData;
import { useState } from 'react';

function Profile() {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <h2>Huzaifa Ahmed</h2>
            <p>I'm trying to make things work right now by learning React. </p>

            <button onClick = {() => setLikes(likes + 1)}> 👍 Counter: {likes} </button>
        </div>
    );
}

export default Profile;
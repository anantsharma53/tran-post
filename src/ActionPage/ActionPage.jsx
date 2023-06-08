import { useState } from 'react';
import './ActionPage.css'
function ActionPage() {
    const [post, setPost] = useState();
    return (
        <div className='postSelection'>
            <div>
                <label for="pet-select">Select Post:
                </label>
            </div>
            <div>
                <select id="select_box" value={post} onChange={e => setPost(e.target.value)}>
                    <option value="" selected="selected">--Please choose an option--</option>
                    <option value="1">OS</option>
                    <option value="2">HC</option>
                    <option value="3">UDC</option>
                    <option value="4">LDC</option>
                </select>
            </div>
            <div>
                <h4>{post}</h4>
                </div>
                <div>
                    <button onClick={e => setPost(e.target.value)} ></button>
                </div>

        </div>
    );
}

export default ActionPage;
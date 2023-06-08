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
                    <option value="OS1">OS</option>
                    <option value="HC2">HC</option>
                    <option value="UDC3">UDC</option>
                    <option value="LDC4">LDC</option>
                </select>
            </div>
            <div>
                <h4>{post}</h4>
                </div>
                <div>
                    <button type="button" class="btn btn-primary btn-block mb-4"  >View employee</button>
                    {/* onClick={e => setPost(e.target.value)} */}
                </div>

        </div>
    );
}

export default ActionPage;
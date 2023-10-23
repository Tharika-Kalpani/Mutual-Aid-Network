
import './Button.css';
import {Link} from 'react-router-dom';

export function Button(){
    return(
<Link to='sign-up'>
    <Button className='btn'>Sign Up </Button>
</Link>
    );
}
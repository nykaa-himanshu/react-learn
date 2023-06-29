
import Button from './Button'

function Home() {

    const temp = 'submit';
    const temp1 = 'reset';

    return (
        <>
            Home
            <Button abc={temp}></Button>
            <Button abc={temp1}></Button>
        </>
    )
}

export default Home;
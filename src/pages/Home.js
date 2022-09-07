// icons
import {HiMenuAlt3} from 'react-icons/hi';

// Components
import CurtainMenu from '../components/menu/curtainMenu';
import HomeLargeClass from '../components/home/homeLargeClass'
import HomeSmallClass from '../components/home/homeSmallClasses'

// fetch("http://localhost:4000/api/v1/classes")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(err => console.error(err));

const HomePage = () => {
    return (  
        <div className='wrapper_home px-5'>
            <header className='flex items-center justify-between my-5 text-3xl'>
                <h1 className='font-semibold'>Popular classes</h1>
                <HiMenuAlt3 className='text-[#9e9e9e]'/>
                <CurtainMenu/>
            </header>
            <HomeLargeClass/>
            <div className='flex items-start pt-10 pb-8'>
                <h1 className='font-bold text-3xl'>Classes for you</h1>
            </div>
            <HomeSmallClass/>
        </div>
        
    );
}
 
export default HomePage;
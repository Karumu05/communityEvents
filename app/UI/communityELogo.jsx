import { CalendarIcon } from '@heroicons/react/24/solid'
import { lusitana } from './fonts';

const CommunityELogo = () => {
    return ( 
        <div className={`${lusitana.className} flex flex-row md:p-2 gap-2 leading-none items-center`}>
            <CalendarIcon className='h-12 w-12'/>
            <p className='md:text-[44px] text-[30px]'>Community Events</p>
        </div>
     );
}
 
export default CommunityELogo;


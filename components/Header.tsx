import { Button } from '@/components/ui/button';
import Image from "next/image";

const Header = () => {
  return <header className='header'>
    <div className='h3 text-brand'>Menu Editor by Paweł Groński</div>
    <div className='header-wrapper'>
      <form>
        <Button type="submit" className='sign-out-button'>
          <Image src={"/assets/icons/logout.svg"} alt='logo' width={24} height={24} className='w-6' />
        </Button>
      </form>
    </div>
  </header>
}

export default Header;
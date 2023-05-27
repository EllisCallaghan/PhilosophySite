import Image from 'next/image'
import heroImg from '../images/HeroImg.png'
import Link from 'next/link'
import './globals.css'
import BooksCard from './components/BooksCard'
import meditations from '../images/meditations.jpg'
import discourses from '../images/discourse.jpg'
import plato from '../images/plato.jpg'
import seneca from '../images/seneca.jpg'
import nietzsche from '../images/nietzsche.jpg'
import rings from '../images/rings.jpg'
export default function Home() {
  return (
    <>
    <main className="bg-[#1f2132] w-full px-28 md:px-12 tablet:px-8">
      <div className='flex flex-row h-[100vh] md:h-full items-center pt-20 gap-10 md:flex-col-reverse'>
        <div className='flex items-start w-[55%] md:w-full pt-10 text-primary font-primary flex-col'>
          <h1 className='font-[800] text-[5rem] xl:text-[4rem] tablet:text-[3rem] tracking-tighter'>
            Change your outlook on life with the wisdom of the ancient.
          </h1>
          <p className='text-2xl font-[500] tablet:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere consectetur massa, 
          et mattis est elementum sed. Morbi pulvinar suscipit.
          </p>
          <div className='flex flex-col items-start gap-[24px] mt-16 text-4xl'>
            <a href='#books'
             className='text-[#5b9991] border bg-slate-900 transition ease-in-out duration-300
            border-none rounded-[8px] p-4 hover:scale-105 hover:text-slate-900 hover:bg-slate-300'>
              Check Out Our Featured Books
              </a>
            <button>Forum Coming Soon!</button>
          </div>
        </div>
        <Image src={heroImg} className='w-[50%] md:w-[70%] tablet:w-[90%] lg:h-[65%] xl:h-[80%]'/>
      </div>
      <div id='books' className='h-full pt-12 gap-[50px] flex flex-col'>
          <h1 className='text-primary text-7xl font-primary font-[800]'>Featured Books</h1>
          <div className='grid grid-cols-3 lg:grid-cols-2 tablet:grid-cols-1 grid-flow-row items-center gap-[48px]'>
            <BooksCard title='Meditations' desc='Meditations is a collection of personal philosophical reflections by Stoic Roman Emperor Marcus Aurelius, promoting self-discipline and acceptance of the universe.
          ' image={meditations} bookLink='https://www.amazon.com/Meditations-Penguin-Classics-Marcus-Aurelius/dp/0140449337/ref=sr_1_4?crid=2T2KUGAVUZ9ER&amp;keywords=meditations+marcus+aurelius&amp;qid=1685195923&amp;sprefix=meditations+%252Caps%252C816&amp;sr=8-4&_encoding=UTF8&tag=dailystoic04-20&linkCode=ur2&linkId=948b05217c4b5925c58ab3ce0e0c792c&camp=1789&creative=9325'/>
            <BooksCard title='Discourses and Selected Writings' desc='Discourses and Selected Writings are a collection of philosophy texts by Epictetus, covering themes such as ethics, morality, and stoicism.
' 
            image={discourses} bookLink='https://www.amazon.com/Discourses-Selected-Writings-Penguin-Classics/dp/0140449469?pd_rd_w=gbJ3c&content-id=amzn1.sym.a5610dee-0db9-4ad9-a7a9-14285a430f83&pf_rd_p=a5610dee-0db9-4ad9-a7a9-14285a430f83&pf_rd_r=W4RTQ8QR800MYAEY3HV8&pd_rd_wg=4OJnK&pd_rd_r=6cf68475-ae23-427a-87ea-ef997d17e040&pd_rd_i=0140449469&psc=1&linkCode=ll1&tag=dailystoic04-20&linkId=2d833ef496c65827a21feeada6f4ec9e&language=en_US&ref_=as_li_ss_tl'/>
            <BooksCard title='The Republic' desc='A philosophical dialogue on justice, governance, and democracy.' 
            image={plato} bookLink='https://www.amazon.com/Republic-Penguin-Classics-Plato/dp/0140455116?crid=312U8X160E07U&keywords=plato&qid=1685197045&s=books&sprefix=p%2Cstripbooks-intl-ship%2C455&sr=1-2&linkCode=ll1&tag=dailystoic04-20&linkId=699d504149b4ae68f6c2614fdd05d4a5&language=en_US&ref_=as_li_ss_tl'/>
            <BooksCard title='Letters from a Stoic' desc="Seneca's letters offer wisdom on living a meaningful, virtuous life, reminding readers of life's brevity and the importance of self-reflection."
            image={seneca} bookLink='https://www.amazon.com/Letters-Penguin-Classics-Lucius-Annaeus/dp/0140442103?crid=1O9E3R6E9I7BE&keywords=seneca&qid=1685197187&s=books&sprefix=sene%2Cstripbooks-intl-ship%2C533&sr=1-1&linkCode=ll1&tag=dailystoic04-20&linkId=43f6ecc6f6413054760191853327c551&language=en_US&ref_=as_li_ss_tl'/>
            <BooksCard title='Beyound Good and Evil' desc='Challenging traditional notions of morality and truth, Nietzsche encourages the individual pursuit of self-discovery and critical questioning of authority.
' 
            image={nietzsche} bookLink="https://www.amazon.com/Beyond-Good-Evil-Penguin-Classics/dp/014044923X?pd_rd_w=TRX7x&content-id=amzn1.sym.d175b668-34ca-4e00-80df-baa0ace9f518&pf_rd_p=d175b668-34ca-4e00-80df-baa0ace9f518&pf_rd_r=V6SD61JDGMZ5EPEAK5E8&pd_rd_wg=dsv7a&pd_rd_r=dfe028c6-2113-4b9f-a197-7814d28f6430&pd_rd_i=014044923X&linkCode=ll1&tag=dailystoic04-20&linkId=7f5219c490582c3ea97479a98e063923&language=en_US&ref_=as_li_ss_tl"/>
            <BooksCard title='Book of Five Rings' desc='Insights into strategy and tactics that can be applied in various aspects of life, including martial arts and business. 

' image={rings} bookLink='https://www.amazon.com/Musashis-Book-Five-Rings-Interpretation/dp/0804835209?keywords=the+book+of+five+rings&qid=1685197965&s=books&sprefix=book+of+the+five+%2Cstripbooks-intl-ship%2C383&sr=1-2&linkCode=ll1&tag=dailystoic04-20&linkId=527fb455dd854ff0a7175ff46f7a971a&language=en_US&ref_=as_li_ss_tl'/>
          </div>
      </div>
      
    </main>
    <div className='border border-t w-full bg-[#1f2132] border-t-slate-500 text-primary text-[18px] py-[18px] text-center'>
    <p>Contact me on Instagram : @stoicdaily2023</p>
  </div>
  </>
  )
}

import Link from 'next/link';


export default function Footer(){
return(
<>
<div className="footer-wrapper w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20 py-5 gap-5 bg-gray-200">

<div className="fotter-section flex flex-col items-center px-8">
    <h1 className='font-bold text-[1.4rem]'>About</h1>
    <p className='text-center my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A autem doloremque quas dolore vero ea molestiae adipisci, dolorum corrupti cupiditate quod minima distinctio esse assumenda minus nemo quam voluptates quos maiores sequi, neque porro suscipit? Voluptatibus rem fuga quam sint.</p>
    <p><span className='font-bold'>Email:</span>khalid@gmail.com</p>
    <p>03445487678</p>
</div>
<div className="fotter-section flex flex-col items-center px-8">
    <h1 className='font-bold text-[1.4rem]'>Quick Links</h1>
    <div className="links mt-5">
    <Link href="/"><li className='list-none'>Home</li></Link>
            <Link href="/AllBlogs"><li className='list-none'>Blogs</li></Link>
            <Link href="/Author"><li className='list-none'>Author</li></Link>
            <Link href="/Contact"><li className='list-none'>Contact</li></Link>
        </div>
    </div>


     
    </div>





</>

);
     
}
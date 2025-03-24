import React from 'react';
import Image from 'next/image';
import spot from '~/images/stories/Background.webp';
import wire1 from '~/images/stories/Wire1.webp';
import wire2 from '~/images/stories/Wire2.webp';
import { ActionButton } from '~/elements';
import Link from 'next/link';
import { readex_pro } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { HomeItemCard } from '~/components/cards'
import { ListScreen } from '../ListScreen'
import { Title, DynamicIcon, InfiniteScrollComponent, readexPro } from '~/elements';
import { useRouter } from 'next/router'

const Header = () => {
    return <div className={`${readexPro.className} text-left flex flex-row mb-4 border-b border-primary/20 w-full lg:mt-0 mt-20`}>
      <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl flex flex-row items-center w-full'>
        <DynamicIcon name={'HomeIcon'} width={28} height={28} className="text-primary mr-2 -mt-1" />
          { 'Home' }
      </span>

      <div className='w-full text-end p-2'>
        <Link href={'/store'} key={'reg1'}>
          <button
            className={`${readexPro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                { 'Browse Store' }
          </button>
        </Link>
       </div>
    </div>
  }

export const Container = ({ children }: any) => {
    return (
      <div className="bg-dark-indigo w-full flex justify-center m-auto lg:mt-20 -mt-24 lg:mt-4 w-full">
        <Image src={spot} alt="spot" className="z-0 block top-0 ml-auto absolute h-full" />
        <Image src={wire1} alt="wire1" className="hidden sm:block z-0 top-[40%] absolute" />
        <Image src={wire2} alt="wire2" className="hidden sm:block z-0 top-[40%] absolute" />

        <div className="w-full mb-10 flex justify-center relative z-30 mt-24 lg:mt-0">
         <div className="flex flex-col justify-start items-center pb-32 min-h-full px-4 w-full">
         <Header/>
         <div className="flex flex-col justify-start items-center w-full">
              { children }
              </div>
          </div>
          </div>
      </div>
  )
}

const EmptyHome = () => {
    return <Container>
        <div className="w-full flex flex-col justify-start items-center mt-64 lg:mt-10 pb-80 bg-black/0 z-50">
            <DynamicIcon name={'SquaresPlusIcon'} width={48} height={48} className='text-primary mr-3'/>
            <div className={`${readex_pro.className} text-left flex flex-row mb-8 lg:mt-0`}>
                    <span className='font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan to-light-green text-2xl'>
                        {`Add apps and agents`}
                    </span>
            </div>
            <Link href={'/store'} key={'reg1'}>
                <button
                    className={`${readex_pro.className} text-nowrap text-sm md:text-md shrink-0 hover:opacity-80 border-cyan font-medium border text-white px-2 py-3 shadow-early-access-button shrink-0`}>
                        Browse the store
                </button>
            </Link>
        </div>
    </Container>
}

const onItemPress = (element: any, router: any) => {
    router.push(`/${element.type === "agent" ? 'agent' : 'app'}/${element.username}`)
}

const HomeList = ({ home }: any) => {
    const items = Object.values(home)
    const router = useRouter()

    return <Container>
            <div className="w-full flex flex-col justify-start items-center pb-80 bg-black/0 z-50">
                <div className='w-full mb-20 min-h-screen'>
                    <InfiniteScrollComponent
                    containerClasses={`justify-center gap-4 grid grid-cols-3 lg:grid-cols-4 p-2`} 
                    renderItem={items.map((element: any, elementId: any) => <HomeItemCard 
                        {...element} 
                        onPress={() => onItemPress(element, router) }
                        />)}
                    elementsNumber={3}
                    loader={<ListPlaceholder />}
                />
                </div>
            </div>
    </Container>
}

export const MainHomeScreen = (props: any) => {
    const { home } = props.auth.profile

    if (!home) {
        return <EmptyHome/>
    }

    return <HomeList home={home}/>
  }
  